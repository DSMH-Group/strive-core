// src/modules/members/members.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { MembersService } from './members.service';
import { PrismaService } from '../../database/prisma.service';
import { NotFoundException, ConflictException, ForbiddenException } from '@nestjs/common';
import { MembershipRole, MembershipStatus } from './dto/members.dto';

// 1. Mock Prisma Client
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
        jest.clearAllMocks(); // Prevent cross-test pollution
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('createMembership', () => {
        const tenantId = 'tenant-123';
        const dto = { userId: 'user-456', initialRole: MembershipRole.MEMBER };

        it('should successfully create a new membership', async () => {
            // Setup: Global user exists, but no membership exists yet
            prisma.user.findUnique.mockResolvedValue({ id: 'user-456' });
            prisma.membership.findUnique.mockResolvedValue(null);

            const mockCreated = { id: 'mem-789', tenantId, userId: dto.userId, role: dto.initialRole, status: 'ACTIVE' };
            prisma.membership.create.mockResolvedValue(mockCreated);

            const result = await service.createMembership(tenantId, dto);

            expect(prisma.membership.create).toHaveBeenCalledWith({
                data: {
                    tenantId,
                    userId: dto.userId,
                    role: dto.initialRole,
                    status: MembershipStatus.ACTIVE,
                },
                include: { user: true }
            });
            expect(result).toEqual(mockCreated);
        });

        it('should throw NotFoundException if global user does not exist', async () => {
            prisma.user.findUnique.mockResolvedValue(null);

            await expect(service.createMembership(tenantId, dto)).rejects.toThrow(NotFoundException);
            expect(prisma.membership.create).not.toHaveBeenCalled();
        });

        it('should throw ConflictException if membership already exists', async () => {
            prisma.user.findUnique.mockResolvedValue({ id: 'user-456' });
            prisma.membership.findUnique.mockResolvedValue({ id: 'existing-mem-id' });

            await expect(service.createMembership(tenantId, dto)).rejects.toThrow(ConflictException);
        });
    });

    describe('getMemberById (RBAC Checks)', () => {
        const tenantId = 'tenant-123';
        const membershipId = 'mem-789';

        it('should allow an ORG_ADMIN to view any member', async () => {
            const mockMembership = { id: membershipId, userId: 'user-456', tenantId };
            prisma.membership.findUnique.mockResolvedValue(mockMembership);

            // Caller is an admin, requesting someone else's profile
            const currentUser = { sub: 'admin-111', tenantRoles: { [tenantId]: MembershipRole.ORG_ADMIN } };

            const result = await service.getMemberById(tenantId, membershipId, currentUser);
            expect(result).toEqual(mockMembership);
        });

        it('should throw ForbiddenException if a regular MEMBER tries to view someone else', async () => {
            const mockMembership = { id: membershipId, userId: 'user-456', tenantId };
            prisma.membership.findUnique.mockResolvedValue(mockMembership);

            // Caller is a regular member, trying to spy on 'user-456'
            const currentUser = { sub: 'user-999', tenantRoles: { [tenantId]: MembershipRole.MEMBER } };

            await expect(service.getMemberById(tenantId, membershipId, currentUser)).rejects.toThrow(ForbiddenException);
        });
    });

    describe('transitionState', () => {
        const tenantId = 'tenant-123';
        const membershipId = 'mem-789';

        it('should successfully transition state to SUSPENDED', async () => {
            // Setup: Member is currently in GRACE_PERIOD
            prisma.membership.findUnique.mockResolvedValue({ id: membershipId, status: MembershipStatus.GRACE_PERIOD });
            prisma.membership.update.mockResolvedValue({ id: membershipId, status: MembershipStatus.SUSPENDED });

            const result = await service.transitionState(tenantId, membershipId, { targetState: MembershipStatus.SUSPENDED });

            expect(prisma.membership.update).toHaveBeenCalledWith({
                where: { id: membershipId, tenantId },
                data: { status: MembershipStatus.SUSPENDED }
            });
            expect(result.status).toEqual(MembershipStatus.SUSPENDED);
        });

        it('should throw ForbiddenException if trying to transition a CANCELLED membership', async () => {
            // Setup: Member already cancelled
            prisma.membership.findUnique.mockResolvedValue({ id: membershipId, status: MembershipStatus.CANCELLED });

            await expect(
                service.transitionState(tenantId, membershipId, { targetState: MembershipStatus.ACTIVE })
            ).rejects.toThrow(ForbiddenException);
        });
    });
});