// src/modules/scheduling/scheduling.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { SchedulingService } from './scheduling.service';
import { PrismaService } from '../../database/prisma.service';
import { ConflictException } from '@nestjs/common';

const mockPrisma = {
    resource: { findUnique: jest.fn() },
    booking: { count: jest.fn(), create: jest.fn() },
};

describe('SchedulingService', () => {
    let service: SchedulingService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [SchedulingService, { provide: PrismaService, useValue: mockPrisma }],
        }).compile();
        service = module.get<SchedulingService>(SchedulingService);
    });

    it('should throw ConflictException if capacity is reached', async () => {
        mockPrisma.resource.findUnique.mockResolvedValue({ id: 'r1', capacity: 1, tenantId: 't1' });
        mockPrisma.booking.count.mockResolvedValue(1); // One booking already exists

        const dto = {
            resourceId: 'r1',
            membershipId: 'm1',
            startTime: '2026-05-10T10:00:00Z',
            endTime: '2026-05-10T11:00:00Z'
        };

        await expect(service.createBooking('t1', dto)).rejects.toThrow(ConflictException);
    });
});