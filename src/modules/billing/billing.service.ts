// src/modules/billing/billing.service.ts
import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from '../../database/prisma.service';
import {CreateInvoiceDto, ManualPaymentDto, SubscribeDto, TopUpDto} from './dto/billing.dto';
import {InvoiceStatus, InvoiceType, PaymentStatus} from '@prisma/client';
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

            // 1. Create the Payment Record
            const payment = await tx.payment.create({
                data: {
                    invoiceId: dto.invoiceId,
                    amount: dto.amount,
                    method: dto.method,
                    status: PaymentStatus.SUCCESS,
                    processedAt: new Date()
                }
            });

            // 2. Update Invoice Status
            await tx.invoice.update({
                where: { id: dto.invoiceId },
                data: { status: InvoiceStatus.PAID }
            });

            // 3. Log to Immutable Ledger (AuditLog)
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

    async handleGatewayWebhook(payload: any) {
        // Implementation for PayHere/DirectPay signature validation logic goes here
        // CRITICAL: Check gatewayTxId in the payments table to ensure idempotency
        return { status: 'acknowledged' };
    }

    // ====================================================================
    // 🚀 NEW: Dynamic Checkout & Subscription Logic
    // ====================================================================

    async generateSubscriptionCheckout(tenantId: string, userId: string, dto: SubscribeDto) {
        const tenant = await this.prisma.tenant.findUnique({where: {id: tenantId}});
        const membership = await this.prisma.membership.findUnique({where: {userId_tenantId: {userId, tenantId}}});
        const plan = await this.prisma.plan.findUnique({where: {id: dto.planId, tenantId}});

        if (!tenant || !membership || !plan) {
            throw new NotFoundException('Required resources not found.');
        }

        const gatewayKeys = tenant.gatewayKeys as any;
        if (!gatewayKeys?.payhereMerchantId || !gatewayKeys?.payhereSecret) {
            throw new BadRequestException('This facility has not configured a payment gateway.');
        }

        // Calculate basic tax (e.g., extracting from JSON config)
        const taxRules = tenant.taxRules as any || {vatPercentage: 0};
        const subtotal = Number(plan.monthlyPrice);
        const taxAmount = subtotal * ((taxRules.vatPercentage || 0) / 100);
        const totalAmount = subtotal + taxAmount;

        // Create Pending Invoice
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

        // Generate Security Hash for UI Handshake
        const hash = this.generateGatewayHash(
            gatewayKeys.payhereMerchantId,
            invoice.id,
            totalAmount,
            'LKR',
            gatewayKeys.payhereSecret
        );

        return {
            invoiceId: invoice.id,
            merchantId: gatewayKeys.payhereMerchantId,
            amount: parseFloat(totalAmount.toString()).toFixed(2),
            currency: 'LKR',
            hash
        };
    }

    async generateTopUpCheckout(tenantId: string, userId: string, dto: TopUpDto) {
        const tenant = await this.prisma.tenant.findUnique({where: {id: tenantId}});
        const membership = await this.prisma.membership.findUnique({where: {userId_tenantId: {userId, tenantId}}});

        if (!tenant || !membership) throw new NotFoundException('Required resources not found.');

        const businessRules = tenant.businessRules as any || {};
        if (businessRules.allowTokenTopUps === false) {
            throw new BadRequestException('This facility does not allow manual token top-ups.');
        }

        const gatewayKeys = tenant.gatewayKeys as any;
        if (!gatewayKeys?.payhereMerchantId || !gatewayKeys?.payhereSecret) {
            throw new BadRequestException('This facility has not configured a payment gateway.');
        }

        // Calculate Token Price (Defaulting to 1000 LKR per token if not configured)
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
            }
        });

        const hash = this.generateGatewayHash(
            gatewayKeys.payhereMerchantId,
            invoice.id,
            totalAmount,
            'LKR',
            gatewayKeys.payhereSecret
        );

        return {
            invoiceId: invoice.id,
            merchantId: gatewayKeys.payhereMerchantId,
            amount: parseFloat(totalAmount.toString()).toFixed(2),
            currency: 'LKR',
            hash
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

        // Optional: Dispatch call to Gateway (e.g., PayHere/Stripe) to cancel tokenized mandate here.

        return {message: 'Auto-renewal disabled successfully.'};
    }

    /**
     * Helper function to generate a PayHere compliant MD5 Hash
     */
    private generateGatewayHash(merchantId: string, orderId: string, amount: number, currency: string, merchantSecret: string): string {
        const amountFormatted = parseFloat(amount.toString()).toFixed(2);
        const hashedSecret = crypto.createHash('md5').update(merchantSecret).digest('hex').toUpperCase();
        const rawString = `${merchantId}${orderId}${amountFormatted}${currency}${hashedSecret}`;
        return crypto.createHash('md5').update(rawString).digest('hex').toUpperCase();
    }
}