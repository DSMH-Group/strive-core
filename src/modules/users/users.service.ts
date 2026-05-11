// src/modules/users/users.service.ts
import { Injectable, NotFoundException, InternalServerErrorException, Logger } from '@nestjs/common';
import { SyncUserWebhookDto } from './dto/sync-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../../database/prisma.service';
import {InvitationStatus, MembershipStatus} from "@prisma/client";

@Injectable()
export class UsersService {
    private readonly logger = new Logger(UsersService.name);

    constructor(private readonly prisma: PrismaService) {}

    /**
     * Called by the Keycloak Webhook SPI when a user registers.
     * Upserts the global identity profile AND auto-links pending gym invitations.
     */
    async syncKeycloakUser(dto: SyncUserWebhookDto) {
        try {
            // We MUST use a transaction here to ensure data integrity between the user and the gym.
            return await this.prisma.$transaction(async (tx) => {
                // 1. Upsert the Global User Profile
                const user = await tx.user.upsert({
                    where: { keycloakId: dto.keycloakId },
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
                            { email: user.email },
                            { phone: user.phone ? user.phone : undefined }
                        ].filter(condition => Object.values(condition)[0] !== null)
                    }
                });

                // 3. Claim invites and generate memberships
                if (pendingInvites.length > 0) {
                    for (const invite of pendingInvites) {
                        const existingMembership = await tx.membership.findUnique({
                            where: { userId_tenantId: { userId: user.id, tenantId: invite.tenantId } }
                        });

                        if (!existingMembership) {
                            await tx.membership.create({
                                data: {
                                    tenantId: invite.tenantId,
                                    userId: user.id,
                                    status: MembershipStatus.ACTIVE,
                                    roles: {
                                        create: { role: invite.role }
                                    }
                                }
                            });
                        }

                        // Mark the invitation as claimed
                        await tx.tenantInvitation.update({
                            where: { id: invite.id },
                            data: { status: InvitationStatus.CLAIMED }
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
     * Fetch the user by their Keycloak JWT 'sub' claim.
     * Includes tenant memberships for immediate frontend routing.
     */
    async getMe(keycloakId: string) {
        const user = await this.prisma.user.findUnique({
            where: { keycloakId },
            // Eager load memberships to power the multi-tenant UI instantly
            include: {
                memberships: {
                    include: { tenant: true }
                }
            },
        });

        if (!user) {
            this.logger.warn(`Orphaned JWT token detected for Keycloak ID: ${keycloakId}`);
            throw new NotFoundException('User profile not found in Strive DB');
        }

        return user;
    }

    /**
     * Update Strive profile details.
     */
    async updateMe(keycloakId: string, dto: UpdateUserDto) {
        try {
            return await this.prisma.user.update({
                where: { keycloakId },
                data: dto,
            });
        } catch (error) {
            this.logger.error(`Failed to update user profile: ${keycloakId}`, error.stack);
            throw new InternalServerErrorException('Profile update failed.');
        }
    }
}