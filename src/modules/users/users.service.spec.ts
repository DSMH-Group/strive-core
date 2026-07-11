// src/modules/users/users.service.spec.ts
import {Test, TestingModule} from '@nestjs/testing';
import {UsersService} from './users.service';
import {PrismaService} from '../../database/prisma.service';
import {InternalServerErrorException, NotFoundException} from '@nestjs/common';
import {InvitationStatus, MembershipStatus, Role} from '@prisma/client';

describe('UsersService', () => {
    let service: UsersService;
    let prisma: PrismaService;

    // Fully defined Mock Strategy reflecting runtime service method execution behaviors
    const mockPrismaService = {
        user: {
            findFirst: jest.fn(),
            findUnique: jest.fn(),
            upsert: jest.fn(),
            update: jest.fn(),
        },
        tenantInvitation: {
            findMany: jest.fn(),
            update: jest.fn(),
        },
        membership: {
            findFirst: jest.fn(),
            create: jest.fn(),
        },
        // Mock Transaction closure function that yields back the service model proxy
        $transaction: jest.fn((cb) => cb(mockPrismaService)),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UsersService,
                {
                    provide: PrismaService,
                    useValue: mockPrismaService,
                },
            ],
        }).compile();

        service = module.get<UsersService>(UsersService);
        prisma = module.get<PrismaService>(PrismaService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('getMe', () => {
        const mockUserRecord = {
            id: 'strive-user-uuid',
            keycloakId: 'keycloak-sub-claim-1234',
            email: 's.g.seyone@pm.me',
            firstName: 'Seyone',
            lastName: 'Sg',
            phone: '+94771234567',
            memberships: [],
        };

        it('should successfully resolve user when internalUserId is passed', async () => {
            mockPrismaService.user.findUnique.mockResolvedValue(mockUserRecord);

            const result = await service.getMe('strive-user-uuid');

            expect(mockPrismaService.user.findUnique).toHaveBeenCalledWith(
                expect.objectContaining({
                    where: {id: 'strive-user-uuid'}
                })
            );
            expect(result).toEqual(mockUserRecord);
        });

        it('should return null if user is missing', async () => {
            mockPrismaService.user.findUnique.mockResolvedValue(null);

            const result = await service.getMe('non-existent-id');
            expect(result).toBeNull();
        });
    });

    describe('syncKeycloakUser', () => {
        const mockSyncDto = {
            keycloakId: 'keycloak-sub-claim-555',
            email: 'nimal.perera@example.lk',
            firstName: 'Nimal',
            lastName: 'Perera',
            phone: '+94777654321',
        };

        const mockUpsertedUser = {
            id: 'generated-user-id',
            ...mockSyncDto,
        };

        it('should cleanly upsert user profile even when no pending invites match footprint criteria', async () => {
            mockPrismaService.user.upsert.mockResolvedValue(mockUpsertedUser);
            mockPrismaService.tenantInvitation.findMany.mockResolvedValue([]);

            const result = await service.syncKeycloakUser(mockSyncDto);

            expect(mockPrismaService.user.upsert).toHaveBeenCalled();
            expect(result).toEqual(mockUpsertedUser);
        });

        it('should execute auto-linker routine and claim pending invitations correctly within transactional context', async () => {
            const mockInvite = {
                id: 'invite-uuid-000',
                tenantId: 'tenant-gym-uuid',
                email: 'nimal.perera@example.lk',
                role: Role.MEMBER,
                status: InvitationStatus.PENDING,
            };

            mockPrismaService.user.upsert.mockResolvedValue(mockUpsertedUser);
            mockPrismaService.tenantInvitation.findMany.mockResolvedValue([mockInvite]);
            mockPrismaService.membership.findFirst.mockResolvedValue(null); // No previous duplicate membership configuration

            const result = await service.syncKeycloakUser(mockSyncDto);

            expect(mockPrismaService.membership.create).toHaveBeenCalledWith({
                data: {
                    tenantId: 'tenant-gym-uuid',
                    userId: 'generated-user-id',
                    status: MembershipStatus.ACTIVE,
                    roles: {create: {role: Role.MEMBER}},
                },
            });

            expect(mockPrismaService.tenantInvitation.update).toHaveBeenCalledWith({
                where: {id: 'invite-uuid-000'},
                data: {status: InvitationStatus.CLAIMED},
            });

            expect(result).toEqual(mockUpsertedUser);
        });

        it('should throw InternalServerErrorException if transactional runtime process breaks down', async () => {
            mockPrismaService.user.upsert.mockRejectedValue(new Error('DB operational boundary failure'));

            await expect(service.syncKeycloakUser(mockSyncDto)).rejects.toThrow(InternalServerErrorException);
        });
    });

    describe('updateMe', () => {
        const mockUpdateDto = {
            firstName: 'SeyoneUpdated',
            lastName: 'SgUpdated',
            phone: '+94771234567',
        };

        it('should smoothly execute patch operations on target model matching valid profiles', async () => {
            const mockBaseUser = {id: 'user-primary-uuid-777', keycloakId: 'sub-777'};
            mockPrismaService.user.findFirst.mockResolvedValue(mockBaseUser);
            mockPrismaService.user.update.mockResolvedValue({...mockBaseUser, ...mockUpdateDto});

            const result = await service.updateMe('sub-777', mockUpdateDto);

            expect(mockPrismaService.user.update).toHaveBeenCalledWith({
                where: {id: 'user-primary-uuid-777'},
                data: mockUpdateDto,
            });
            expect(result.firstName).toBe('SeyoneUpdated');
        });

        it('should throw NotFoundException if update target resolves to null profile matrix matching params', async () => {
            mockPrismaService.user.findFirst.mockResolvedValue(null);

            await expect(service.updateMe('non-existent', mockUpdateDto)).rejects.toThrow(NotFoundException);
        });
    });
});