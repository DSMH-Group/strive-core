// src/modules/attendance/attendance.service.spec.ts
import {Test, TestingModule} from '@nestjs/testing';
import {AttendanceService} from './attendance.service';
import {TenantPrismaService} from '../../database/tenant-prisma.service';
import {ForbiddenException} from '@nestjs/common';
import {MembershipStatus} from '@prisma/client';

const mockPrisma = {
    membership: { findUnique: jest.fn(), findFirst: jest.fn() },
    attendance: { create: jest.fn(), findUnique: jest.fn(), update: jest.fn(), findMany: jest.fn() },
};

const mockTenantPrisma = {
    client: mockPrisma,
    activeTenantId: 'test-tenant-id',
};

describe('AttendanceService', () => {
    let service: AttendanceService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AttendanceService,
                {provide: TenantPrismaService, useValue: mockTenantPrisma},
            ],
        }).compile();
        service = module.get<AttendanceService>(AttendanceService);
    });

    it('should block check-in for suspended members', async () => {
        mockPrisma.membership.findFirst.mockResolvedValue({id: 'm-1', status: MembershipStatus.SUSPENDED});

        await expect(service.checkIn({membershipId: 'm-1', authMethod: 'QR'}))
            .rejects.toThrow(ForbiddenException);
    });
});