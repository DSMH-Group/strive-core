// src/modules/members/members.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { MembersService } from './members.service';
import { PrismaService } from '../../database/prisma.service';
import { NotFoundException, ConflictException, ForbiddenException } from '@nestjs/common';
import { Role, MembershipStatus } from '@prisma/client';

// 1. Mock Prisma Client reflecting the relational schema
const mockPrismaService = {
    user: {
        findUnique: jest.fn(),
    },
    membership: {
        findUnique: jest.fn(),
        findMany: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
    },
};

describe('MembersService', () => {
    let service: MembersService;
    let prisma: typeof mockPrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MembersService,
                { provide: PrismaService, useValue: mockPrismaService },
            ],
        }).compile();

        service = module.get<MembersService>(MembersService);
        prisma = module.get(PrismaService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('createMembership', () => {
        const tenantId = 'tenant-123';
        const dto = { userId: 'user-456', initialRole: Role.MEMBER };

        it('should successfully create a new membership with nested roles', async () => {
            prisma.user.findUnique.mockResolvedValue({ id: 'user-456' });
            prisma.membership.findUnique.mockResolvedValue(null);

            const mockCreated = {
                id: 'mem-789',
                tenantId,
                userId: dto.userId,
                status: MembershipStatus.ACTIVE,
                roles: [{ role: Role.MEMBER }]
            };
            prisma.membership.create.mockResolvedValue(mockCreated);

            const result = await service.createMembership(tenantId, dto);

            // FIX: Check for correct userId_tenantId compound key and nested roles create
            expect(prisma.membership.create).toHaveBeenCalledWith({
                data: {
                    tenantId,
                    userId: dto.userId,
                    status: MembershipStatus.ACTIVE,
                    roles: {
                        create: { role: dto.initialRole }
                    }
                },
                include: { user: true, roles: true }
            });
            expect(result).toEqual(mockCreated);
        });

        it('should throw ConflictException using the correct compound key', async () => {
            prisma.user.findUnique.mockResolvedValue({ id: 'user-456' });
            // Simulate existing membership
            prisma.membership.findUnique.mockResolvedValue({ id: 'existing' });

            await expect(service.createMembership(tenantId, dto)).rejects.toThrow(ConflictException);

            // Verify findUnique was called with the correct index name from schema
            expect(prisma.membership.findUnique).toHaveBeenCalledWith({
                where: {
                    userId_tenantId: { userId: dto.userId, tenantId }
                }
            });
        });
    });

    describe('getMemberById (Multi-tenant RBAC)', () => {
        const tenantId = 'tenant-123';
        const membershipId = 'mem-789';

        it('should allow ORG_ADMIN of the specific tenant to view profile', async () => {
            const mockMembership = { id: membershipId, userId: 'user-456', tenantId };
            prisma.membership.findUnique.mockResolvedValue(mockMembership);

            const currentUser = { sub: 'admin-111', tenantRoles: { [tenantId]: Role.ORG_ADMIN } };

            const result = await service.getMemberById(tenantId, membershipId, currentUser);
            expect(result).toEqual(mockMembership);
        });

        it('should throw ForbiddenException if user belongs to tenant but has insufficient role', async () => {
            const mockMembership = { id: membershipId, userId: 'user-456', tenantId };
            prisma.membership.findUnique.mockResolvedValue(mockMembership);

            // User is a MEMBER, not staff
            const currentUser = { sub: 'user-999', tenantRoles: { [tenantId]: Role.MEMBER } };

            await expect(service.getMemberById(tenantId, membershipId, currentUser)).rejects.toThrow(ForbiddenException);
        });
    });

    describe('getMyMembership', () => {
        it('should fetch own membership using unique compound index', async () => {
            const tenantId = 'gym-1';
            const userId = 'user-1';
            const mockMembership = { id: 'mem-1', userId, tenantId };

            prisma.membership.findUnique.mockResolvedValue(mockMembership);

            const result = await service.getMyMembership(tenantId, userId);

            expect(prisma.membership.findUnique).toHaveBeenCalledWith({
                where: { userId_tenantId: { userId, tenantId } },
                include: expect.anything()
            });
            expect(result).toEqual(mockMembership);
        });
    });

    describe('transitionState', () => {
        const tenantId = 'tenant-123';
        const membershipId = 'mem-789';

        it('should update status and prevent redundant transitions', async () => {
            prisma.membership.findUnique.mockResolvedValue({ id: membershipId, tenantId, status: MembershipStatus.ACTIVE });
            prisma.membership.update.mockResolvedValue({ id: membershipId, status: MembershipStatus.GRACE_PERIOD });

            const result = await service.transitionState(tenantId, membershipId, { targetState: MembershipStatus.GRACE_PERIOD });

            expect(prisma.membership.update).toHaveBeenCalledWith({
                where: { id: membershipId },
                data: { status: MembershipStatus.GRACE_PERIOD },
                include: { roles: true }
            });
            expect(result.status).toEqual(MembershipStatus.GRACE_PERIOD);
        });
    });
});