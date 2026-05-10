// src/modules/metrics/metrics.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { MetricsService } from './metrics.service';
import { PrismaService } from '../../database/prisma.service';

describe('MetricsService', () => {
    let service: MetricsService;
    let prisma: PrismaService;

    const mockPrisma = {
        membership: { findUnique: jest.fn() },
        metric: { create: jest.fn(), findMany: jest.fn(), createMany: jest.fn() },
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [MetricsService, { provide: PrismaService, useValue: mockPrisma }],
        }).compile();

        service = module.get<MetricsService>(MetricsService);
        prisma = module.get<PrismaService>(PrismaService);
    });

    it('should prevent logging metrics for members in a different tenant', async () => {
        mockPrisma.membership.findUnique.mockResolvedValueOnce({ id: 'trainer-mem-1', tenantId: 'tenant-A' });
        mockPrisma.membership.findUnique.mockResolvedValueOnce({ id: 'target-mem-2', tenantId: 'tenant-B' });

        await expect(
            service.logMetric('tenant-A', 'user-1', { metricType: 'WEIGHT', membershipId: 'target-mem-2', data: {} }),
        ).rejects.toThrow();
    });
});