// src/modules/billing/billing.service.ts
import {BadRequestException, ForbiddenException, Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from '../../database/prisma.service';
import {CheckoutInvoiceDto, CreateInvoiceDto, ManualPaymentDto, SubscribeDto, TopUpDto} from './dto/billing.dto';
import {InvoiceStatus, InvoiceType, MembershipStatus, PaymentMethod, PaymentStatus} from '@prisma/client';
import * as crypto from 'crypto';

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

    async getInvoices(tenantId: string, filter: { userId?: string; membershipId?: string } = {}) {
        return this.prisma.invoice.findMany({
            where: {
                tenantId,
                // If the admin passes a specific membership ID, query it directly
                ...(filter.membershipId && {membershipId: filter.membershipId}),

                // 🚀 NEW: If it's a standard user, use Prisma's relational filtering to match the User ID inside the Membership
                ...(filter.userId && {membership: {userId: filter.userId}})
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
    // 🚀 PAYHERE PAYLOAD GENERATORS
    // ====================================================================

    async generateExistingInvoiceCheckout(tenantId: string, userId: string, dto: CheckoutInvoiceDto) {
        const membership = await this.prisma.membership.findUnique({where: {userId_tenantId: {userId, tenantId}}});
        if (!membership) throw new NotFoundException('Membership not found.');

        const invoice = await this.prisma.invoice.findFirst({
            where: {id: dto.invoiceId, tenantId, membershipId: membership.id},
            include: {membership: {include: {user: true, activePlan: true}}, tenant: true}
        });

        if (!invoice) throw new NotFoundException('Invoice not found.');
        if (invoice.status === InvoiceStatus.PAID) throw new BadRequestException('Invoice is already paid.');

        // Pass the existing planId so the webhook can activate it if this is an onboarding invoice
        const targetPlanId = invoice.membership.activePlanId || '';
        return this.buildCheckoutPayload(invoice, invoice.tenant, targetPlanId);
    }

    async generateSubscriptionCheckout(tenantId: string, userId: string, dto: SubscribeDto) {
        const tenant = await this.prisma.tenant.findUnique({where: {id: tenantId}});
        const membership = await this.prisma.membership.findUnique({
            where: {userId_tenantId: {userId, tenantId}},
            include: {user: true}
        });
        const plan = await this.prisma.plan.findUnique({where: {id: dto.planId, tenantId}});

        if (!tenant || !membership || !plan) throw new NotFoundException('Required resources not found.');

        const businessRules = tenant.businessRules as any || {};
        if (businessRules.allowSelfService === false) {
            throw new ForbiddenException('Self-service plan purchases are disabled. Please contact the front desk.');
        }

        const taxRules = tenant.taxRules as any || {vatPercentage: 0};
        const subtotal = Number(plan.monthlyPrice);
        const taxAmount = subtotal * ((taxRules.vatPercentage || 0) / 100);
        const totalAmount = subtotal + taxAmount;

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
            },
            include: {membership: {include: {user: true}}, tenant: true}
        });

        // Pass the planId in custom_1 so the webhook knows which plan to activate
        return this.buildCheckoutPayload(invoice, tenant, plan.id);
    }

    async generateTopUpCheckout(tenantId: string, userId: string, dto: TopUpDto) {
        const tenant = await this.prisma.tenant.findUnique({where: {id: tenantId}});
        const membership = await this.prisma.membership.findUnique({
            where: {userId_tenantId: {userId, tenantId}},
            include: {user: true}
        });

        if (!tenant || !membership) throw new NotFoundException('Required resources not found.');

        const businessRules = tenant.businessRules as any || {};
        if (businessRules.allowTokenTopUps === false) {
            throw new BadRequestException('This facility does not allow manual token top-ups.');
        }

        const pricePerToken = businessRules.tokenPrice || 1000;
        const totalAmount = dto.tokenAmount * pricePerToken;

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
            },
            include: {membership: {include: {user: true}}, tenant: true}
        });

        // Pass the tokenAmount in custom_1 so the webhook knows how many to grant
        return this.buildCheckoutPayload(invoice, tenant, dto.tokenAmount.toString());
    }

    async handlePayHereWebhook(body: any) {
        const {
            merchant_id,
            order_id,
            payhere_amount,
            payhere_currency,
            status_code,
            md5sig,
            payment_id,
            custom_1
        } = body;

        const invoice = await this.prisma.invoice.findUnique({
            where: {id: order_id},
            include: {tenant: true, membership: true}
        });

        if (!invoice) return; // Silent return, let PayHere know we received it to stop retries

        const gatewayKeys = invoice.tenant.gatewayKeys as { payhereSecret?: string } | null;
        if (!gatewayKeys?.payhereSecret) return;

        // 1. Verify Signature
        const hashedSecret = crypto.createHash('md5').update(gatewayKeys.payhereSecret).digest('hex').toUpperCase();
        const localSignature = crypto.createHash('md5')
            .update(merchant_id + order_id + payhere_amount + payhere_currency + status_code + hashedSecret)
            .digest('hex').toUpperCase();

        if (localSignature !== md5sig) {
            console.error(`[Security Warning] Invalid webhook signature for invoice ${order_id}`);
            return;
        }

        // 2. Process Successful Payment (status_code 2)
        if (status_code === '2') {
            const existingPayment = await this.prisma.payment.findUnique({where: {gatewayTxId: payment_id}});

            if (!existingPayment) {
                await this.prisma.$transaction(async (tx) => {
                    // Create payment ledger entry
                    await tx.payment.create({
                        data: {
                            invoiceId: invoice.id,
                            amount: Number(payhere_amount),
                            method: PaymentMethod.PAYHERE,
                            gatewayTxId: payment_id,
                            status: PaymentStatus.SUCCESS,
                        }
                    });

                    // Mark invoice as paid
                    await tx.invoice.update({
                        where: {id: invoice.id},
                        data: {status: InvoiceStatus.PAID}
                    });

                    // Ledger Reconciliation based on Invoice Type
                    if (invoice.type === InvoiceType.SUBSCRIPTION) {
                        const targetPlanId = custom_1;
                        const plan = targetPlanId ? await tx.plan.findUnique({where: {id: targetPlanId}}) : null;

                        await tx.membership.update({
                            where: {id: invoice.membershipId},
                            data: {
                                status: MembershipStatus.ACTIVE,
                                ...(plan && {activePlanId: plan.id}),
                                ...(plan && {tokensLeft: {increment: plan.sessionTokens}}),
                                expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                            }
                        });
                    } else if (invoice.type === InvoiceType.TOKEN) {
                        const tokensToGrant = parseInt(custom_1, 10);
                        if (!isNaN(tokensToGrant) && tokensToGrant > 0) {
                            await tx.membership.update({
                                where: {id: invoice.membershipId},
                                data: {tokensLeft: {increment: tokensToGrant}}
                            });
                        }
                    } else if (invoice.membership.status === MembershipStatus.PENDING) {
                        // Generic activation scenario
                        await tx.membership.update({
                            where: {id: invoice.membershipId},
                            data: {status: MembershipStatus.ACTIVE}
                        });
                    }
                });
            }
        }
    }

    private generatePayHereHash(merchantId: string, secret: string, orderId: string, amount: string, currency: string) {
        const hashedSecret = crypto.createHash('md5').update(secret).digest('hex').toUpperCase();
        return crypto.createHash('md5')
            .update(merchantId + orderId + amount + currency + hashedSecret)
            .digest('hex')
            .toUpperCase();
    }

    // ====================================================================
    // 🚀 ASYNCHRONOUS WEBHOOK RECONCILIATION
    // ====================================================================

    private async buildCheckoutPayload(invoice: any, tenant: any, custom1: string = '', custom2: string = '') {
        const gatewayKeys = tenant.gatewayKeys as { payhereMerchantId?: string; payhereSecret?: string } | null;
        if (!gatewayKeys?.payhereMerchantId || !gatewayKeys?.payhereSecret) {
            throw new BadRequestException('Payment gateway is not configured for this facility.');
        }

        const businessRules = tenant.businessRules as any || {};
        const currency = businessRules.defaultCurrency || 'LKR';
        const amountStr = Number(invoice.totalAmount).toFixed(2);

        const hash = this.generatePayHereHash(
            gatewayKeys.payhereMerchantId,
            gatewayKeys.payhereSecret,
            invoice.id,
            amountStr,
            currency
        );

        return {
            sandbox: process.env.NODE_ENV !== 'production',
            merchant_id: gatewayKeys.payhereMerchantId,
            order_id: invoice.id,
            items: `Invoice - ${invoice.type}`,
            amount: amountStr,
            currency,
            hash,
            first_name: invoice.membership.user.firstName,
            last_name: invoice.membership.user.lastName,
            email: invoice.membership.user.email,
            phone: invoice.membership.user.phone || '0000000000',
            address: 'N/A',
            city: 'N/A',
            country: 'Sri Lanka',
            custom_1: custom1, // Pass contextual data to the webhook
            custom_2: custom2
        };
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