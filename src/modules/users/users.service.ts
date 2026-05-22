// src/modules/users/users.service.ts
import {BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException} from '@nestjs/common';
import {SyncUserWebhookDto} from './dto/sync-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {PrismaService} from '../../database/prisma.service';
import {InvitationStatus, MembershipStatus} from "@prisma/client";

@Injectable()
export class UsersService {
    private readonly logger = new Logger(UsersService.name);

    constructor(private readonly prisma: PrismaService) {
    }

    /**
     * Called by the Keycloak Webhook SPI when a user registers.
     * Upserts the global identity profile AND auto-links pending gym invitations.
     */
    async syncKeycloakUser(dto: SyncUserWebhookDto) {
        if (!dto.keycloakId) {
            throw new BadRequestException('Sync payload is missing a valid Keycloak ID reference.');
        }

        try {
            return await this.prisma.$transaction(async (tx) => {
                // 1. Upsert the Global User Profile
                const user = await tx.user.upsert({
                    where: {keycloakId: dto.keycloakId},
                    update: {
                        email: dto.email,
                        firstName: dto.firstName,
                        lastName: dto.lastName,
                        phone: dto.phone,
                    },
                    create: {
                        keycloakId: dto.keycloakId,
                        email: dto.email,
                        firstName: dto.firstName,
                        lastName: dto.lastName,
                        phone: dto.phone,
                    },
                });

                // 2. The Auto-Linker: Search for pending invites matching Email OR Phone
                const pendingInvites = await tx.tenantInvitation.findMany({
                    where: {
                        status: InvitationStatus.PENDING,
                        OR: [
                            {email: user.email},
                            ...(user.phone ? [{phone: user.phone}] : [])
                        ]
                    }
                });

                // 3. Claim invites and generate memberships
                if (pendingInvites.length > 0) {
                    for (const invite of pendingInvites) {
                        // Use findFirst if standard compound index syntax varies across deployment schemas
                        const existingMembership = await tx.membership.findFirst({
                            where: {
                                userId: user.id,
                                tenantId: invite.tenantId
                            }
                        });

                        if (!existingMembership) {
                            await tx.membership.create({
                                data: {
                                    tenantId: invite.tenantId,
                                    userId: user.id,
                                    status: MembershipStatus.ACTIVE,
                                    roles: {
                                        create: {role: invite.role}
                                    }
                                }
                            });
                        }

                        // Mark the invitation as claimed
                        await tx.tenantInvitation.update({
                            where: {id: invite.id},
                            data: {status: InvitationStatus.CLAIMED}
                        });

                        this.logger.log(`Auto-linked user ${user.id} to tenant ${invite.tenantId}`);
                    }
                }

                return user;
            });
        } catch (error) {
            this.logger.error(`Failed to sync Keycloak user or process invites: ${dto.keycloakId}`, error.stack);
            throw new InternalServerErrorException('Database synchronization failed.');
        }
    }

    /**
     * Fetch the user by handling incoming guard user contexts safely.
     * Prevents PrismaClientValidationError by intercepting extraction failures early.
     */
    async getMe(internalUserId: string) {
        return this.prisma.user.findUnique({
            where: {id: internalUserId},
            include: {
                memberships: {
                    include: {
                        tenant: true,  // Pulls the gym metadata (slug, name, domain)
                        roles: true,   // Pulls the assigned permission scopes (ORG_ADMIN, MEMBER, etc.)
                    }
                }
            }
        });
    }

    /**
     * Update Strive profile details safely.
     */
    async updateMe(userContextPayload: any, dto: UpdateUserDto) {
        const keycloakId = typeof userContextPayload === 'string'
            ? userContextPayload
            : userContextPayload?.keycloakId || userContextPayload?.sub || userContextPayload?.id;

        if (!keycloakId) {
            throw new BadRequestException('Cannot apply configuration updates without a secure identification footprint.');
        }

        try {
            // Find the database record first to ensure accurate primary identity keying
            const existingUser = await this.prisma.user.findFirst({
                where: {
                    OR: [
                        {keycloakId: keycloakId},
                        {id: keycloakId}
                    ]
                }
            });

            if (!existingUser) throw new NotFoundException('Target user matching identity matrix not found.');

            return await this.prisma.user.update({
                where: {id: existingUser.id},
                data: dto,
            });
        } catch (error) {
            if (error instanceof NotFoundException) throw error;
            this.logger.error(`Failed to update user profile: ${keycloakId}`, error.stack);
            throw new InternalServerErrorException('Profile update execution parameter fault.');
        }
    }
}