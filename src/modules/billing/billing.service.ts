// src/modules/billing/billing.service.ts
import { Injectable, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateInvoiceDto, ManualPaymentDto } from './dto/billing.dto';
import { InvoiceStatus, PaymentStatus } from '@prisma/client';

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
}