// src/modules/plans/plans.service.spec.ts
import {Test, TestingModule} from '@nestjs/testing';
import {PlansService} from './plans.service';
import {PrismaService} from '../../database/prisma.service';
import {NotFoundException} from '@nestjs/common';
import {CreatePlanDto, UpdatePlanDto} from './dto/plan.dto';

// --- Mock Data ---
const mockTenantId = 'tenant-123';
const mockPlanId = 'plan-123';

const mockPlan = {
    id: mockPlanId,
    tenantId: mockTenantId,
    name: 'Standard',
    monthlyPrice: 12500,
    sessionTokens: 234,
    allocationCap: null,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
};

// --- Mock Prisma Service ---
const mockPrismaService = {
    plan: {
        create: jest.fn(),
        findMany: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
    },
};

describe('PlansService', () => {
    let service: PlansService;
    let prisma: typeof mockPrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                PlansService,
                {
                    provide: PrismaService,
                    useValue: mockPrismaService,
                },
            ],
        }).compile();

        service = module.get<PlansService>(PlansService);
        prisma = module.get(PrismaService);

        // Clear all mock history before each test
        jest.clearAllMocks();
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('createPlan', () => {
        it('should create and return a new plan', async () => {
            const createDto: CreatePlanDto = {
                name: 'Premium',
                monthlyPrice: 18000,
                sessionTokens: 20,
            };

            prisma.plan.create.mockResolvedValue({...mockPlan, ...createDto});

            const result = await service.createPlan(mockTenantId, createDto);

            expect(prisma.plan.create).toHaveBeenCalledWith({
                data: {
                    ...createDto,
                    tenantId: mockTenantId,
                },
            });
            expect(result.name).toEqual('Premium');
        });
    });

    describe('getPlans', () => {
        it('should return only active plans by default', async () => {
            prisma.plan.findMany.mockResolvedValue([mockPlan]);

            const result = await service.getPlans(mockTenantId);

            expect(prisma.plan.findMany).toHaveBeenCalledWith({
                where: {tenantId: mockTenantId, isActive: true},
                orderBy: {monthlyPrice: 'asc'},
            });
            expect(result).toEqual([mockPlan]);
        });

        it('should return all plans if includeInactive is true', async () => {
            prisma.plan.findMany.mockResolvedValue([mockPlan]);

            const result = await service.getPlans(mockTenantId, true);

            expect(prisma.plan.findMany).toHaveBeenCalledWith({
                where: {tenantId: mockTenantId}, // isActive should be omitted
                orderBy: {monthlyPrice: 'asc'},
            });
            expect(result).toEqual([mockPlan]);
        });
    });

    describe('updatePlan', () => {
        it('should update and return the plan if it exists', async () => {
            const updateDto: UpdatePlanDto = {monthlyPrice: 15000};
            const updatedPlan = {...mockPlan, ...updateDto};

            prisma.plan.findUnique.mockResolvedValue(mockPlan);
            prisma.plan.update.mockResolvedValue(updatedPlan);

            const result = await service.updatePlan(mockTenantId, mockPlanId, updateDto);

            expect(prisma.plan.findUnique).toHaveBeenCalledWith({
                where: {id: mockPlanId, tenantId: mockTenantId},
            });
            expect(prisma.plan.update).toHaveBeenCalledWith({
                where: {id: mockPlanId},
                data: updateDto,
            });
            expect(result.monthlyPrice).toEqual(15000);
        });

        it('should throw a NotFoundException if the plan does not exist', async () => {
            prisma.plan.findUnique.mockResolvedValue(null); // Simulate not found

            await expect(service.updatePlan(mockTenantId, 'invalid-id', {}))
                .rejects
                .toThrow(NotFoundException);

            expect(prisma.plan.update).not.toHaveBeenCalled();
        });
    });

    describe('deletePlan', () => {
        it('should delete the plan if it exists', async () => {
            prisma.plan.findUnique.mockResolvedValue(mockPlan);
            prisma.plan.delete.mockResolvedValue(mockPlan);

            const result = await service.deletePlan(mockTenantId, mockPlanId);

            expect(prisma.plan.findUnique).toHaveBeenCalledWith({
                where: {id: mockPlanId, tenantId: mockTenantId},
            });
            expect(prisma.plan.delete).toHaveBeenCalledWith({
                where: {id: mockPlanId},
            });
            expect(result).toEqual(mockPlan);
        });

        it('should throw a NotFoundException if trying to delete a non-existent plan', async () => {
            prisma.plan.findUnique.mockResolvedValue(null); // Simulate not found

            await expect(service.deletePlan(mockTenantId, 'invalid-id'))
                .rejects
                .toThrow(NotFoundException);

            expect(prisma.plan.delete).not.toHaveBeenCalled();
        });
    });
});