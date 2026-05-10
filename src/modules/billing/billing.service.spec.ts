// src/modules/billing/billing.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { BillingService } from './billing.service';
import { PrismaService } from '../../database/prisma.service';
import { BadRequestException } from '@nestjs/common';

const mockPrisma = {
    invoice: {
        findUnique: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
    },
    payment: { create: jest.fn() },
    auditLog: { create: jest.fn() },
    $transaction: jest.fn((callback) => callback(mockPrisma)),
};

describe('BillingService', () => {
    let service: BillingService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [BillingService, { provide: PrismaService, useValue: mockPrisma }],
        }).compile();
        service = module.get<BillingService>(BillingService);
    });

    it('should block manual payment if invoice is already paid', async () => {
        mockPrisma.invoice.findUnique.mockResolvedValue({ id: 'inv-1', status: 'PAID' });

        await expect(service.processManualPayment('t-1', { invoiceId: 'inv-1', amount: 100, method: 'CASH' }, 'u-1'))
            .rejects.toThrow(BadRequestException);
    });
});