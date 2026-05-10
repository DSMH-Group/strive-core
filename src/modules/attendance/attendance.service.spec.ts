// src/modules/attendance/attendance.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { AttendanceService } from './attendance.service';
import { PrismaService } from '../../database/prisma.service';
import { ForbiddenException } from '@nestjs/common';
import { MembershipStatus } from '@prisma/client';

const mockPrisma = {
    membership: { findUnique: jest.fn(), findFirst: jest.fn() },
    attendance: { create: jest.fn(), findUnique: jest.fn(), update: jest.fn(), findMany: jest.fn() },
};

describe('AttendanceService', () => {
    let service: AttendanceService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AttendanceService, { provide: PrismaService, useValue: mockPrisma }],
        }).compile();
        service = module.get<AttendanceService>(AttendanceService);
    });

    it('should block check-in for suspended members', async () => {
        mockPrisma.membership.findUnique.mockResolvedValue({ status: MembershipStatus.SUSPENDED });

        await expect(service.checkIn('t-1', { membershipId: 'm-1', authMethod: 'QR' as any }))
            .rejects.toThrow(ForbiddenException);
    });
});