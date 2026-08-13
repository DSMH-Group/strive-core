import {BadRequestException, ForbiddenException, Injectable, Logger, NotFoundException} from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import {PrismaService} from '../../database/prisma.service';
import {CheckoutInvoiceDto, CreateInvoiceDto, ManualPaymentDto, SubscribeDto, TopUpDto} from './dto/billing.dto';
import {InvoiceStatus, InvoiceType, MembershipStatus, PaymentMethod, PaymentStatus} from '@prisma/client';
import * as crypto from 'crypto';

@Injectable()
export class BillingService {
    private readonly logger = new Logger(BillingService.name);

    constructor(
        private readonly prisma: PrismaService,
        @InjectQueue('comms') private readonly commsQueue: Queue,
    ) {}

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
        const payment = await this.prisma.$transaction(async (tx) => {
            const invoice = await tx.invoice.findUnique({
                where: { id: dto.invoiceId, tenantId },
                include: { membership: { include: { user: true } } }
            });

            if (!invoice) throw new NotFoundException('Invoice not found.');
            if (invoice.status === InvoiceStatus.PAID) throw new BadRequestException('Invoice already settled.');

            const paymentRecord = await tx.payment.create({
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

            return { payment: paymentRecord, userEmail: invoice.membership?.user?.email, userName: invoice.membership?.user?.firstName };
        });

        // Dispatch Payment Receipt Email
        if (payment.userEmail) {
            const webappUrl = process.env.NEXT_PUBLIC_WEBAPP_URL || 'https://dsmhgroup.com';
            await this.commsQueue.add('dispatch', {
                channel: 'EMAIL',
                recipient: { email: payment.userEmail },
                subject: `Payment Receipt: Invoice #${dto.invoiceId.substring(0, 8)}`,
                message: `Hello ${payment.userName || 'Member'},\n\nThank you for your payment! We have received LKR ${payment.payment.amount} via ${payment.payment.method} for Invoice #${dto.invoiceId.substring(0, 8)}.\n\nYour account has been updated accordingly.`,
                actionUrl: `${webappUrl}/dashboard`,
                actionText: 'View Invoices',
            }).catch(err => this.logger.error(`Failed to dispatch payment receipt email: ${err.message}`));
        }

        return payment.payment;
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

        // Check if the user wants to use a saved card (1-Click Payment)
        if (dto.cardId) {
            const savedCard = await this.prisma.savedPaymentMethod.findUnique({
                where: {id: dto.cardId, membershipId: membership.id}
            });

            if (savedCard) {
                // Background charge the card. If it throws, the controller returns a 400.
                await this.chargeTokenizedCard(tenant, invoice, savedCard);
                return {charged: true}; // Tells frontend to NOT open the PayHere modal
            }
        }

        // Fallback: If no cardId provided, return standard payload for the UI modal
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
    async generateCardSetupPayload(tenantId: string, userId: string) {
        const tenant = await this.prisma.tenant.findUnique({where: {id: tenantId}});
        const membership = await this.prisma.membership.findUnique({
            where: {userId_tenantId: {userId, tenantId}},
            include: {user: true}
        });

        if (!tenant || !membership) throw new NotFoundException('Resources not found.');

        const gatewayKeys = tenant.gatewayKeys as { payhereMerchantId?: string; payhereSecret?: string } | null;
        if (!gatewayKeys?.payhereMerchantId || !gatewayKeys?.payhereSecret) {
            throw new BadRequestException('Payment gateway not configured.');
        }

        const currency = (tenant.businessRules as any)?.defaultCurrency || 'LKR';
        const setupOrderId = `SETUP_${crypto.randomUUID().replace(/-/g, '').substring(0, 10)}`;

        // PayHere requires a dummy amount in the JSON to open the UI
        const amountStr = "10.00";

        const hashedSecret = crypto.createHash('md5').update(gatewayKeys.payhereSecret).digest('hex').toUpperCase();

        // 🚀 THE FIX: Preapproval hash does NOT include the amount!
        // Formula: md5(merchant_id + order_id + currency + md5(payhere_secret))
        const hash = crypto.createHash('md5')
            .update(gatewayKeys.payhereMerchantId + setupOrderId + currency + hashedSecret)
            .digest('hex').toUpperCase();

        return {
            sandbox: process.env.PAYHERE_SANDBOX === 'true',
            merchant_id: gatewayKeys.payhereMerchantId,
            order_id: setupOrderId,
            items: `Secure Card Setup`,
            currency,
            amount: amountStr, // Passed in JSON, but skipped in Hash
            hash,
            first_name: membership.user.firstName,
            last_name: membership.user.lastName,
            email: membership.user.email,
            phone: membership.user.phone || '0000000000',
            address: 'N/A',
            city: 'N/A',
            country: 'Sri Lanka',
            custom_1: membership.id
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

    // ====================================================================
    // 🚀 CARD MANAGEMENT LOGIC
    // ====================================================================

    async getSavedCards(tenantId: string, userId: string) {
        const membership = await this.prisma.membership.findUnique({where: {userId_tenantId: {userId, tenantId}}});
        if (!membership) return [];

        return this.prisma.savedPaymentMethod.findMany({
            where: {tenantId, membershipId: membership.id},
            select: {id: true, mask: true, brand: true, isDefault: true} // NEVER send payhereToken to frontend
        });
    }

    async removeSavedCard(tenantId: string, userId: string, cardId: string) {
        const membership = await this.prisma.membership.findUnique({where: {userId_tenantId: {userId, tenantId}}});
        if (!membership) throw new NotFoundException('Membership not found.');

        await this.prisma.savedPaymentMethod.deleteMany({
            where: {id: cardId, tenantId, membershipId: membership.id}
        });

        return {success: true};
    }

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
            sandbox: process.env.PAYHERE_SANDBOX === 'true',
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

    async handlePreapprovalWebhook(body: any) {
        const {merchant_id, order_id, status_code, md5sig, customer_token, card_no, card_brand, custom_1} = body;
        const membershipId = custom_1;

        if (status_code !== '2' || !customer_token) return;

        const membership = await this.prisma.membership.findUnique({
            where: {id: membershipId},
            include: {tenant: true}
        });

        if (!membership) return;

        const gatewayKeys = membership.tenant.gatewayKeys as { payhereSecret?: string } | null;
        if (!gatewayKeys?.payhereSecret) return;

        // Verify Signature (Preapproval webhook hash)
        const hashedSecret = crypto.createHash('md5').update(gatewayKeys.payhereSecret).digest('hex').toUpperCase();
        // Note: PayHere's preapproval webhook often sends payhere_amount as 0.00 or null. Check their exact spec.
        const localSignature = crypto.createHash('md5')
            .update(merchant_id + order_id + body.payhere_amount + body.payhere_currency + status_code + hashedSecret)
            .digest('hex').toUpperCase();

        if (localSignature !== md5sig) {
            console.error(`[Security Warning] Invalid preapproval webhook signature.`);
            return;
        }

        // Save the tokenized card
        await this.prisma.savedPaymentMethod.create({
            data: {
                tenantId: membership.tenantId,
                membershipId: membership.id,
                payhereToken: customer_token,
                mask: card_no || '****',
                brand: card_brand || 'Card',
                isDefault: true // You can add logic to make older cards non-default
            }
        });
    }

    // ====================================================================
    // 🚀 AUTOMATED 1-CLICK CHARGING
    // ====================================================================

    private async chargeTokenizedCard(tenant: any, invoice: any, savedCard: any) {
        const gatewayKeys = tenant.gatewayKeys as {
            payhereAppId?: string;
            payhereAppSecret?: string;
            payhereMerchantId?: string
        } | null;

        if (!gatewayKeys?.payhereAppId || !gatewayKeys?.payhereAppSecret) {
            throw new BadRequestException('Facility is not configured for automated charging. Missing App API Keys.');
        }

        const isSandbox = process.env.PAYHERE_SANDBOX === 'true';
        const baseUrl = isSandbox ? 'https://sandbox.payhere.lk' : 'https://app.payhere.lk';

        // 1. Get Access Token
        const authString = Buffer.from(`${gatewayKeys.payhereAppId}:${gatewayKeys.payhereAppSecret}`).toString('base64');
        const tokenRes = await fetch(`${baseUrl}/merchant/v1/oauth/token`, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${authString}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials'
        });

        if (!tokenRes.ok) throw new BadRequestException('Failed to authenticate with payment gateway.');
        const {access_token} = await tokenRes.json();

        // 2. Charge the Customer Token
        const chargeRes = await fetch(`${baseUrl}/merchant/v1/payment/charge`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                type: "PAYMENT",
                order_id: invoice.id,
                items: `Invoice - ${invoice.type}`,
                currency: "LKR",
                amount: invoice.totalAmount,
                customer_token: savedCard.payhereToken,
                custom_1: invoice.type === InvoiceType.SUBSCRIPTION ? invoice.membership.activePlanId : null,
                custom_2: invoice.type === InvoiceType.TOKEN ? invoice.items[0]?.description : null
            })
        });

        const chargeResult = await chargeRes.json();

        // 1 = Success, 2 = Pending (Requires 3DS Auth occasionally), < 0 = Failed
        if (chargeResult.status === 1 || chargeResult.status === 2) {
            // We can manually mark the invoice as paid here OR let the standard webhook handle it.
            // Best practice: Let the webhook handle it to prevent race conditions.
            return {charged: true, status: chargeResult.status};
        } else {
            throw new BadRequestException(`Charge failed: ${chargeResult.msg}`);
        }
    }
}