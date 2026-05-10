// src/modules/comms-audit/comms-audit.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { CommsAuditService } from './comms-audit.service';
import { PrismaService } from '../../database/prisma.service';

describe('CommsAuditService', () => {
    let service: CommsAuditService;

    const mockPrisma = {
        membership: { findMany: jest.fn() },
        metric: { findMany: jest.fn() },
        auditLog: { findMany: jest.fn() },
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CommsAuditService, { provide: PrismaService, useValue: mockPrisma }],
        }).compile();

        service = module.get<CommsAuditService>(CommsAuditService);
    });

    it('should filter broadcast audience based on the provided JSON filter', async () => {
        const tenantId = 't1';
        const dto = {
            audienceFilter: { status: 'ACTIVE' },
            channel: 'SMS' as any,
            templateId: 'temp1'
        };

        mockPrisma.membership.findMany.mockResolvedValue([]);

        await service.broadcastMessage(tenantId, dto);

        expect(mockPrisma.membership.findMany).toHaveBeenCalledWith({
            where: { tenantId, status: 'ACTIVE' },
            include: { user: true },
        });
    });
});