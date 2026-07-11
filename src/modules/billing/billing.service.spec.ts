// src/modules/billing/billing.service.spec.ts
import {Test, TestingModule} from '@nestjs/testing';
import {BillingService} from './billing.service';
import {PrismaService} from '../../database/prisma.service';
import {BadRequestException, NotFoundException} from '@nestjs/common';
import {InvoiceStatus, InvoiceType, MembershipStatus, PaymentMethod, PaymentStatus} from '@prisma/client';
import * as crypto from 'crypto';

const mockPrisma = {
    invoice: {
        findUnique: jest.fn(),
        findFirst: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        findMany: jest.fn(),
    },
    tenant: {
        findUnique: jest.fn(),
    },
    membership: {
        findUnique: jest.fn(),
        update: jest.fn(),
    },
    plan: {
        findUnique: jest.fn(),
    },
    savedPaymentMethod: {
        findUnique: jest.fn(),
    },
    payment: {
        create: jest.fn(),
        findUnique: jest.fn(),
    },
    auditLog: {
        create: jest.fn(),
    },
    $transaction: jest.fn((callback) => callback(mockPrisma)),
};

describe('BillingService', () => {
    let service: BillingService;

    beforeEach(async () => {
        jest.clearAllMocks();

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                BillingService,
                {provide: PrismaService, useValue: mockPrisma},
            ],
        }).compile();

        service = module.get<BillingService>(BillingService);
    });

    describe('processManualPayment', () => {
        it('should block manual payment if invoice is already paid', async () => {
            mockPrisma.invoice.findUnique.mockResolvedValue({id: 'inv-1', status: 'PAID', tenantId: 't-1'});

            await expect(
                service.processManualPayment('t-1', {invoiceId: 'inv-1', amount: 100, method: 'CASH'}, 'u-1')
            ).rejects.toThrow(BadRequestException);
        });

        it('should throw NotFoundException if invoice does not exist', async () => {
            mockPrisma.invoice.findUnique.mockResolvedValue(null);

            await expect(
                service.processManualPayment('t-1', {invoiceId: 'inv-1', amount: 100, method: 'CASH'}, 'u-1')
            ).rejects.toThrow(NotFoundException);
        });

        it('should successfully reconcile manual payment', async () => {
            mockPrisma.invoice.findUnique.mockResolvedValue({
                id: 'inv-1',
                status: 'OPEN',
                tenantId: 't-1',
                totalAmount: 100
            });
            mockPrisma.payment.create.mockResolvedValue({id: 'p-1', status: 'SUCCESS'});
            mockPrisma.invoice.update.mockResolvedValue({id: 'inv-1', status: 'PAID'});
            mockPrisma.auditLog.create.mockResolvedValue({id: 'audit-1'});

            const result = await service.processManualPayment('t-1', {
                invoiceId: 'inv-1',
                amount: 100,
                method: 'CASH'
            }, 'admin-1');

            expect(mockPrisma.payment.create).toHaveBeenCalledWith({
                data: {
                    invoiceId: 'inv-1',
                    amount: 100,
                    method: PaymentMethod.CASH,
                    status: PaymentStatus.SUCCESS,
                    processedAt: expect.any(Date),
                },
            });
            expect(mockPrisma.invoice.update).toHaveBeenCalledWith({
                where: {id: 'inv-1'},
                data: {status: InvoiceStatus.PAID},
            });
            expect(mockPrisma.auditLog.create).toHaveBeenCalledWith({
                data: {
                    tenantId: 't-1',
                    userId: 'admin-1',
                    action: 'MANUAL_PAYMENT_RECONCILED',
                    entity: 'Invoice',
                    entityId: 'inv-1',
                    changes: {method: 'CASH', amount: 100},
                },
            });
            expect(result.status).toBe('SUCCESS');
        });
    });

    describe('handlePayHereWebhook', () => {
        const payhereSecret = 'super-secret-key';
        let mockInvoice: any;

        beforeEach(() => {
            mockInvoice = {
                id: 'order-123',
                tenantId: 't-1',
                membershipId: 'm-1',
                type: InvoiceType.SUBSCRIPTION,
                status: InvoiceStatus.OPEN,
                tenant: {
                    id: 't-1',
                    gatewayKeys: {payhereSecret}
                },
                membership: {
                    id: 'm-1',
                    status: MembershipStatus.PENDING
                }
            };
            mockPrisma.invoice.findUnique.mockResolvedValue(mockInvoice);
            mockPrisma.payment.findUnique.mockResolvedValue(null);
            mockPrisma.plan.findUnique.mockResolvedValue({id: 'plan-1', name: 'Standard', sessionTokens: 10});
        });

        const generateValidSignature = (
            merchantId: string,
            orderId: string,
            amount: string,
            currency: string,
            statusCode: string,
            secret: string
        ) => {
            const hashedSecret = crypto.createHash('md5').update(secret).digest('hex').toUpperCase();
            return crypto.createHash('md5')
                .update(merchantId + orderId + amount + currency + statusCode + hashedSecret)
                .digest('hex')
                .toUpperCase();
        };

        it('should bypass processing if signature verification fails', async () => {
            const webhookBody = {
                merchant_id: '12345',
                order_id: 'order-123',
                payhere_amount: '5000.00',
                payhere_currency: 'LKR',
                status_code: '2',
                md5sig: 'INVALID_SIGNATURE',
                payment_id: 'pay-tx-001',
                custom_1: 'plan-1',
            };

            const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {
            });

            await service.handlePayHereWebhook(webhookBody);

            expect(mockPrisma.payment.create).not.toHaveBeenCalled();
            expect(consoleErrorSpy).toHaveBeenCalledWith(
                expect.stringContaining('Invalid webhook signature')
            );
            consoleErrorSpy.mockRestore();
        });

        it('should process webhook, record payment, mark invoice PAID, and activate subscription on valid signature', async () => {
            const signature = generateValidSignature('12345', 'order-123', '5000.00', 'LKR', '2', payhereSecret);
            const webhookBody = {
                merchant_id: '12345',
                order_id: 'order-123',
                payhere_amount: '5000.00',
                payhere_currency: 'LKR',
                status_code: '2',
                md5sig: signature,
                payment_id: 'pay-tx-001',
                custom_1: 'plan-1',
            };

            await service.handlePayHereWebhook(webhookBody);

            // Assert payment ledger entry
            expect(mockPrisma.payment.create).toHaveBeenCalledWith({
                data: {
                    invoiceId: 'order-123',
                    amount: 5000.00,
                    method: PaymentMethod.PAYHERE,
                    gatewayTxId: 'pay-tx-001',
                    status: PaymentStatus.SUCCESS,
                }
            });

            // Assert invoice updated to PAID
            expect(mockPrisma.invoice.update).toHaveBeenCalledWith({
                where: {id: 'order-123'},
                data: {status: InvoiceStatus.PAID}
            });

            // Assert membership activated and tokens granted
            expect(mockPrisma.membership.update).toHaveBeenCalledWith({
                where: {id: 'm-1'},
                data: {
                    status: MembershipStatus.ACTIVE,
                    activePlanId: 'plan-1',
                    tokensLeft: {increment: 10},
                    expiresAt: expect.any(Date)
                }
            });
        });

        it('should successfully process token top-up webhook', async () => {
            mockInvoice.type = InvoiceType.TOKEN;
            const signature = generateValidSignature('12345', 'order-123', '2000.00', 'LKR', '2', payhereSecret);
            const webhookBody = {
                merchant_id: '12345',
                order_id: 'order-123',
                payhere_amount: '2000.00',
                payhere_currency: 'LKR',
                status_code: '2',
                md5sig: signature,
                payment_id: 'pay-tx-002',
                custom_1: '5', // 5 tokens
            };

            await service.handlePayHereWebhook(webhookBody);

            expect(mockPrisma.membership.update).toHaveBeenCalledWith({
                where: {id: 'm-1'},
                data: {
                    tokensLeft: {increment: 5}
                }
            });
        });
    });
});