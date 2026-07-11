import {Test, TestingModule} from '@nestjs/testing';
import {TenantPrismaService} from './tenant-prisma.service';
import {PrismaService} from './prisma.service';
import {REQUEST} from '@nestjs/core';
import {UnauthorizedException} from '@nestjs/common';

describe('TenantPrismaService', () => {
    let service: TenantPrismaService;
    let mockPrisma: any;
    let mockRequest: any;
    let capturedAllOperations: any;

    beforeEach(async () => {
        capturedAllOperations = null;

        mockPrisma = {
            $extends: jest.fn().mockImplementation((config) => {
                capturedAllOperations = config?.query?.$allModels?.$allOperations;
                return {
                    membership: {
                        findMany: jest.fn(),
                    },
                };
            }),
        };

        mockRequest = {
            headers: {
                'x-tenant-id': 'test-tenant-123',
            },
        };

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                TenantPrismaService,
                {provide: PrismaService, useValue: mockPrisma},
                {provide: REQUEST, useValue: mockRequest},
            ],
        }).compile();

        service = await module.resolve<TenantPrismaService>(TenantPrismaService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
        expect(mockPrisma.$extends).toHaveBeenCalled();
        expect(capturedAllOperations).toBeInstanceOf(Function);
    });

    it('should throw UnauthorizedException if tenant context is missing', async () => {
        mockRequest.headers['x-tenant-id'] = undefined;

        await expect(
            async () =>
                new TenantPrismaService(mockRequest, mockPrisma as any)
        ).rejects.toThrow(UnauthorizedException);
    });

    describe('Query Isolation Scoping', () => {
        let querySpy: jest.Mock;

        beforeEach(() => {
            querySpy = jest.fn().mockImplementation((args) => Promise.resolve(args));
        });

        it('should append tenantId to findMany for scoped models (e.g. Membership)', async () => {
            const args = {where: {status: 'ACTIVE'}};
            const result = await capturedAllOperations({
                model: 'Membership',
                operation: 'findMany',
                args,
                query: querySpy,
            });

            expect(querySpy).toHaveBeenCalledWith({
                where: {
                    status: 'ACTIVE',
                    tenantId: 'test-tenant-123',
                },
            });
            expect(result).toEqual({
                where: {
                    status: 'ACTIVE',
                    tenantId: 'test-tenant-123',
                },
            });
        });

        it('should append tenantId to create data payload for scoped models', async () => {
            const args = {data: {activePlanId: 'plan-1'}};
            const result = await capturedAllOperations({
                model: 'Membership',
                operation: 'create',
                args,
                query: querySpy,
            });

            expect(querySpy).toHaveBeenCalledWith({
                data: {
                    activePlanId: 'plan-1',
                    tenantId: 'test-tenant-123',
                },
            });
            expect(result).toEqual({
                data: {
                    activePlanId: 'plan-1',
                    tenantId: 'test-tenant-123',
                },
            });
        });

        it('should handle createMany data array payload correctly', async () => {
            const args = {
                data: [
                    {activePlanId: 'plan-1'},
                    {activePlanId: 'plan-2'}
                ]
            };
            const result = await capturedAllOperations({
                model: 'Membership',
                operation: 'createMany',
                args,
                query: querySpy,
            });

            expect(querySpy).toHaveBeenCalledWith({
                data: [
                    {activePlanId: 'plan-1', tenantId: 'test-tenant-123'},
                    {activePlanId: 'plan-2', tenantId: 'test-tenant-123'}
                ],
            });
            expect(result.data).toHaveLength(2);
            expect(result.data[0].tenantId).toBe('test-tenant-123');
        });

        it('should not mutate query arguments for global models (e.g. User)', async () => {
            const args = {where: {email: 'admin@global.com'}};
            const result = await capturedAllOperations({
                model: 'User',
                operation: 'findFirst',
                args,
                query: querySpy,
            });

            expect(querySpy).toHaveBeenCalledWith(args);
            expect(result.where).not.toHaveProperty('tenantId');
        });

        it('should not mutate query arguments for other global models (e.g. Tenant)', async () => {
            const args = {where: {slug: 'gym-one'}};
            const result = await capturedAllOperations({
                model: 'Tenant',
                operation: 'findUnique',
                args,
                query: querySpy,
            });

            expect(querySpy).toHaveBeenCalledWith(args);
            expect(result.where).not.toHaveProperty('tenantId');
        });
    });
});
