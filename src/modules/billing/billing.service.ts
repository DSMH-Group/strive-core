// src/modules/billing/billing.service.ts
import {BadRequestException, ForbiddenException, Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from '../../database/prisma.service';
import {CheckoutInvoiceDto, CreateInvoiceDto, ManualPaymentDto, SubscribeDto, TopUpDto} from './dto/billing.dto';
import {InvoiceStatus, InvoiceType, MembershipStatus, PaymentMethod, PaymentStatus} from '@prisma/client';

@Injectable()
export class BillingService {
    constructor(private readonly prisma: PrismaService) {}

    async createInvoice(tenantId: string, dto: CreateInvoiceDto) {
        const totalAmount = dto.lineItems.reduce((sum, item) => sum + item.amount, 0);

        return this.prisma.invoice.create({
            data: {
                tenantId,
                membershipId: dto.membershipId,
                type: dto.type,
                status: InvoiceStatus.OPEN,
                totalAmount,
                items: {
                    create: dto.lineItems
                }
            },
            include: { items: true }
        });
    }

    async getInvoices(tenantId: string, membershipId?: string) {
        return this.prisma.invoice.findMany({
            where: {
                tenantId,
                ...(membershipId && { membershipId })
            },
            include: { items: true, payments: true },
            orderBy: { createdAt: 'desc' }
        });
    }

    async processManualPayment(tenantId: string, dto: ManualPaymentDto, adminId: string) {
        return this.prisma.$transaction(async (tx) => {
            const invoice = await tx.invoice.findUnique({
                where: { id: dto.invoiceId, tenantId }
            });

            if (!invoice) throw new NotFoundException('Invoice not found.');
            if (invoice.status === InvoiceStatus.PAID) throw new BadRequestException('Invoice already settled.');

            const payment = await tx.payment.create({
                data: {
                    invoiceId: dto.invoiceId,
                    amount: dto.amount,
                    method: dto.method,
                    status: PaymentStatus.SUCCESS,
                    processedAt: new Date()
                }
            });

            await tx.invoice.update({
                where: { id: dto.invoiceId },
                data: { status: InvoiceStatus.PAID }
            });

            await tx.auditLog.create({
                data: {
                    tenantId,
                    userId: adminId,
                    action: 'MANUAL_PAYMENT_RECONCILED',
                    entity: 'Invoice',
                    entityId: invoice.id,
                    changes: { method: dto.method, amount: dto.amount }
                }
            });

            return payment;
        });
    }

    // ====================================================================
    // 🚀 DEMO MODE LOGIC (Instant Webhook Bypass)
    // ====================================================================

    /**
     * Completes the admin onboarding flow (User pays their pending activation invoice)
     */
    async payExistingInvoiceDemo(tenantId: string, userId: string, dto: CheckoutInvoiceDto) {
        const membership = await this.prisma.membership.findUnique({where: {userId_tenantId: {userId, tenantId}}});
        if (!membership) throw new NotFoundException('Membership not found.');

        const invoice = await this.prisma.invoice.findFirst({
            where: {id: dto.invoiceId, tenantId, membershipId: membership.id},
            include: {membership: {include: {activePlan: true}}}
        });

        if (!invoice) throw new NotFoundException('Invoice not found.');
        if (invoice.status === InvoiceStatus.PAID) throw new BadRequestException('Invoice is already paid.');

        // 1. Simulate gateway success
        await this.processDemoPayment(tenantId, invoice.id);

        // 2. If this was an activation invoice, flip them to active and grant tokens
        if (invoice.membership.status === MembershipStatus.PENDING) {
            const plan = invoice.membership.activePlan;
            await this.prisma.membership.update({
                where: {id: membership.id},
                data: {
                    status: MembershipStatus.ACTIVE,
                    tokensLeft: {increment: plan?.sessionTokens || 0},
                    expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                }
            });
        }

        return {success: true, message: 'Payment processed successfully (Demo Mode).'};
    }

    /**
     * Self-serve plan upgrades
     */
    async generateSubscriptionCheckoutDemo(tenantId: string, userId: string, dto: SubscribeDto) {
        const tenant = await this.prisma.tenant.findUnique({where: {id: tenantId}});
        const membership = await this.prisma.membership.findUnique({where: {userId_tenantId: {userId, tenantId}}});
        const plan = await this.prisma.plan.findUnique({where: {id: dto.planId, tenantId}});

        if (!tenant || !membership || !plan) throw new NotFoundException('Required resources not found.');

        // 🚀 Enforce Self-Service Rule
        const businessRules = tenant.businessRules as any || {};
        if (businessRules.allowSelfService === false) {
            throw new ForbiddenException('Self-service plan purchases are disabled for this facility. Please contact the front desk.');
        }

        const taxRules = tenant.taxRules as any || {vatPercentage: 0};
        const subtotal = Number(plan.monthlyPrice);
        const taxAmount = subtotal * ((taxRules.vatPercentage || 0) / 100);
        const totalAmount = subtotal + taxAmount;

        // 1. Create Invoice
        const invoice = await this.prisma.invoice.create({
            data: {
                tenantId,
                membershipId: membership.id,
                type: InvoiceType.SUBSCRIPTION,
                status: InvoiceStatus.OPEN,
                totalAmount,
                items: {
                    create: [
                        {description: `Subscription: ${plan.name}`, amount: subtotal},
                        ...(taxAmount > 0 ? [{description: 'VAT', amount: taxAmount}] : [])
                    ]
                }
            }
        });

        // 2. Simulate gateway success
        await this.processDemoPayment(tenantId, invoice.id);

        // 3. Update Membership instantly
        await this.prisma.membership.update({
            where: {id: membership.id},
            data: {
                status: MembershipStatus.ACTIVE,
                activePlanId: plan.id,
                tokensLeft: {increment: plan.sessionTokens},
                expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
            }
        });

        return {success: true, message: 'Subscription activated successfully (Demo Mode).'};
    }

    /**
     * Self-serve token top-ups
     */
    async generateTopUpCheckoutDemo(tenantId: string, userId: string, dto: TopUpDto) {
        const tenant = await this.prisma.tenant.findUnique({where: {id: tenantId}});
        const membership = await this.prisma.membership.findUnique({where: {userId_tenantId: {userId, tenantId}}});

        if (!tenant || !membership) throw new NotFoundException('Required resources not found.');

        const businessRules = tenant.businessRules as any || {};
        if (businessRules.allowTokenTopUps === false) {
            throw new BadRequestException('This facility does not allow manual token top-ups.');
        }

        const pricePerToken = businessRules.tokenPrice || 1000;
        const totalAmount = dto.tokenAmount * pricePerToken;

        // 1. Create Invoice
        const invoice = await this.prisma.invoice.create({
            data: {
                tenantId,
                membershipId: membership.id,
                type: InvoiceType.TOKEN,
                status: InvoiceStatus.OPEN,
                totalAmount,
                items: {
                    create: [{description: `Token Top-Up x${dto.tokenAmount}`, amount: totalAmount}]
                }
            }
        });

        // 2. Simulate gateway success
        await this.processDemoPayment(tenantId, invoice.id);

        // 3. Grant tokens instantly
        await this.prisma.membership.update({
            where: {id: membership.id},
            data: {tokensLeft: {increment: dto.tokenAmount}}
        });

        return {success: true, message: `Purchased ${dto.tokenAmount} tokens successfully (Demo Mode).`};
    }

    /**
     * Reusable helper to fake a successful gateway response
     */
    private async processDemoPayment(tenantId: string, invoiceId: string) {
        const invoice = await this.prisma.invoice.findUnique({where: {id: invoiceId, tenantId}});
        if (!invoice) throw new NotFoundException('Invoice not found.');
        if (invoice.status === InvoiceStatus.PAID) return true;

        await this.prisma.payment.create({
            data: {
                invoiceId,
                amount: invoice.totalAmount,
                method: PaymentMethod.PAYHERE, // Simulating an online gateway payment
                status: PaymentStatus.SUCCESS,
                gatewayTxId: `DEMO_TX_${Date.now()}`
            }
        });

        await this.prisma.invoice.update({
            where: {id: invoiceId},
            data: {status: InvoiceStatus.PAID}
        });

        return true;
    }

    async cancelSubscription(tenantId: string, userId: string) {
        const membership = await this.prisma.membership.findUnique({
            where: {userId_tenantId: {userId, tenantId}}
        });

        if (!membership) throw new NotFoundException('Membership not found.');

        await this.prisma.membership.update({
            where: {id: membership.id},
            data: {autoRenewEnabled: false}
        });

        return {message: 'Auto-renewal disabled successfully.'};
    }
}