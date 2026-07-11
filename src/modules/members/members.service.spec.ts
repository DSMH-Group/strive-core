// src/modules/members/members.service.spec.ts
import {Test, TestingModule} from '@nestjs/testing';
import {MembersService} from './members.service';
import {PrismaService} from '../../database/prisma.service';
import {ForbiddenException} from '@nestjs/common';
import {MembershipStatus, Role} from '@prisma/client';
import {getQueueToken} from '@nestjs/bullmq';

// 1. Mock Prisma Client reflecting the relational schema
const mockPrismaService = {
    user: {
        findUnique: jest.fn(),
    },
    membership: {
        findUnique: jest.fn(),
        findFirst: jest.fn(),
        findMany: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
    },
};

describe('MembersService', () => {
    let service: MembersService;
    let prisma: typeof mockPrismaService;

    beforeEach(async () => {
        const mockCommsQueue = {
            add: jest.fn(),
        };

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MembersService,
                { provide: PrismaService, useValue: mockPrismaService },
                { provide: getQueueToken('comms'), useValue: mockCommsQueue },
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
                status: MembershipStatus.PENDING,
                roles: [{ role: Role.MEMBER }]
            };
            prisma.membership.create.mockResolvedValue(mockCreated);

            const result = await service.createMembership(tenantId, dto);

            expect(prisma.membership.create).toHaveBeenCalledWith({
                data: {
                    tenantId,
                    userId: dto.userId,
                    status: MembershipStatus.PENDING,
                    roles: {
                        create: { role: dto.initialRole }
                    }
                },
                include: { user: true, roles: true }
            });
            expect(result).toEqual(mockCreated);
        });

        it('should update existing membership status to PENDING and add role if not present', async () => {
            prisma.user.findUnique.mockResolvedValue({ id: 'user-456' });
            // Simulate existing membership without the initial role
            prisma.membership.findUnique.mockResolvedValue({
                id: 'existing-mem-id',
                userId: dto.userId,
                tenantId,
                status: MembershipStatus.ACTIVE,
                roles: []
            });

            const mockUpdated = {
                id: 'existing-mem-id',
                tenantId,
                userId: dto.userId,
                status: MembershipStatus.PENDING,
                roles: [{role: Role.MEMBER}]
            };
            prisma.membership.update.mockResolvedValue(mockUpdated);

            const result = await service.createMembership(tenantId, dto);

            expect(prisma.membership.update).toHaveBeenCalledWith({
                where: {id: 'existing-mem-id'},
                data: {
                    status: MembershipStatus.PENDING,
                    roles: {
                        create: {role: dto.initialRole}
                    },
                    rfidTag: undefined
                },
                include: {user: true, roles: true}
            });
            expect(result).toEqual(mockUpdated);
        });
    });

    describe('getMemberById (Multi-tenant RBAC)', () => {
        const tenantId = 'tenant-123';
        const membershipId = 'mem-789';

        it('should allow ORG_ADMIN of the specific tenant to view profile', async () => {
            const mockMembership = { id: membershipId, userId: 'user-456', tenantId };
            prisma.membership.findUnique.mockResolvedValue(mockMembership);

            // requester has ORG_ADMIN role
            prisma.membership.findFirst.mockResolvedValue({
                id: 'requester-mem-id',
                userId: 'admin-111',
                tenantId,
                roles: [{role: Role.ORG_ADMIN}]
            });

            const currentUser = {id: 'admin-111', isGlobalAdmin: false};

            const result = await service.getMemberById(tenantId, membershipId, currentUser);
            expect(result).toEqual(mockMembership);
        });

        it('should throw ForbiddenException if user belongs to tenant but has insufficient role', async () => {
            const mockMembership = { id: membershipId, userId: 'user-456', tenantId };
            prisma.membership.findUnique.mockResolvedValue(mockMembership);

            // requester only has MEMBER role
            prisma.membership.findFirst.mockResolvedValue({
                id: 'requester-mem-id',
                userId: 'user-999',
                tenantId,
                roles: [{role: Role.MEMBER}]
            });

            const currentUser = {id: 'user-999', isGlobalAdmin: false};

            await expect(service.getMemberById(tenantId, membershipId, currentUser)).rejects.toThrow(ForbiddenException);
        });
    });

    describe('getMyMembership', () => {
        it('should fetch own membership using unique compound index', async () => {
            const tenantId = 'gym-1';
            const userId = 'user-1';
            const mockMembership = { id: 'mem-1', userId, tenantId };

            prisma.membership.findFirst.mockResolvedValue(mockMembership);

            const result = await service.getMyMembership(tenantId, userId);

            expect(prisma.membership.findFirst).toHaveBeenCalledWith({
                where: {
                    tenantId: tenantId,
                    user: {id: userId}
                },
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