// src/modules/tenants/tenants.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { TenantsService } from './tenants.service';
import { PrismaService } from '../../database/prisma.service';
import { EncryptionService } from '../../common/services/encryption.service';
import { ConflictException, NotFoundException } from '@nestjs/common';

// 1. Mock the Prisma Client
const mockPrismaService = {
    tenant: {
        findUnique: jest.fn(),
        findFirst: jest.fn(), // Added to match service logic
        findMany: jest.fn(),  // Added for exploration endpoint
        create: jest.fn(),
        update: jest.fn(),
    },
    $transaction: jest.fn((cb) => cb(mockPrismaService)), // Mock transaction pass-through
    membership: {
        create: jest.fn()
    }
};

// 2. Mock the Encryption Service
const mockEncryptionService = {
    encrypt: jest.fn().mockImplementation((val) => `encrypted_${val}`),
    decrypt: jest.fn().mockImplementation((val) => val.replace('encrypted_', '')),
};

describe('TenantsService', () => {
    let service: TenantsService;
    let prisma: typeof mockPrismaService;
    let encryption: typeof mockEncryptionService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                TenantsService,
                { provide: PrismaService, useValue: mockPrismaService },
                { provide: EncryptionService, useValue: mockEncryptionService },
            ],
        }).compile();

        service = module.get<TenantsService>(TenantsService);
        prisma = module.get(PrismaService);
        encryption = module.get(EncryptionService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('createTenant', () => {
        it('should create a tenant with auto-generated slug', async () => {
            // FIX: Set findFirst to return null instead of findUnique
            prisma.tenant.findFirst.mockResolvedValue(null);

            const mockCreatedTenant = { id: 'uuid-1', name: 'Power World', domain: 'powerworld', slug: 'power-world' };
            prisma.tenant.create.mockResolvedValue(mockCreatedTenant);

            const result = await service.createTenant({
                name: 'Power World',
                subdomain: 'powerworld',
                ownerId: 'owner-uuid'
            });

            expect(prisma.tenant.findFirst).toHaveBeenCalledTimes(1);
            expect(result).toEqual(mockCreatedTenant);
        });

        it('should throw ConflictException if domain is taken', async () => {
            // FIX: Use findFirst
            prisma.tenant.findFirst.mockResolvedValue({ id: 'uuid-2', domain: 'powerworld' });

            await expect(
                service.createTenant({ name: 'Power World', subdomain: 'powerworld', ownerId: 'owner-uuid' })
            ).rejects.toThrow(ConflictException);
        });
    });

    describe('exploreTenants', () => {
        it('should fetch and map active tenants cleanly', async () => {
            const mockDbTenants = [
                { id: 't-1', name: 'TASS Colombo', domain: 'tass', themeConfig: { vertical: 'CrossFit', location: 'Colombo 07' } }
            ];
            prisma.tenant.findMany.mockResolvedValue(mockDbTenants);

            const result = await service.exploreTenants({ search: 'TASS' });

            expect(prisma.tenant.findMany).toHaveBeenCalled();
            expect(result[0]).toEqual(expect.objectContaining({
                id: 't-1',
                name: 'TASS Colombo',
                subdomain: 'tass',
                vertical: 'CrossFit',
                location: 'Colombo 07'
            }));
        });
    });

    describe('getPublicConfig', () => {
        it('should return mapped public configuration', async () => {
            const mockTenant = { id: 'uuid-1', name: 'Gym', domain: 'gym', themeConfig: {} };
            prisma.tenant.findUnique.mockResolvedValue(mockTenant);

            const result = await service.getPublicConfig('uuid-1');
            expect(result.subdomain).toEqual('gym'); // Ensures mapping from domain to subdomain works
        });

        it('should throw NotFoundException if tenant does not exist', async () => {
            prisma.tenant.findUnique.mockResolvedValue(null);

            await expect(service.getPublicConfig('invalid-id')).rejects.toThrow(NotFoundException);
        });
    });

    describe('updateTenantConfig', () => {
        it('should encrypt PayHere secrets before saving', async () => {
            const dto = {
                gatewayKeys: { payhereSecret: 'my-super-secret' }
            };

            prisma.tenant.update.mockResolvedValue({ id: 'uuid-1', gatewayKeys: dto.gatewayKeys });

            await service.updateTenantConfig('uuid-1', dto);

            // Verify the encryption service was called
            expect(encryption.encrypt).toHaveBeenCalledWith('my-super-secret');

            // Verify Prisma received the encrypted payload
            expect(prisma.tenant.update).toHaveBeenCalledWith(
                expect.objectContaining({
                    data: expect.objectContaining({
                        gatewayKeys: { payhereSecret: 'encrypted_my-super-secret' }
                    })
                })
            );
        });
    });
});