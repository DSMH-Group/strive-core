// src/modules/users/users.service.ts
import { Injectable, NotFoundException, InternalServerErrorException, Logger } from '@nestjs/common';
import { SyncUserWebhookDto } from './dto/sync-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class UsersService {
    private readonly logger = new Logger(UsersService.name);

    constructor(private readonly prisma: PrismaService) {}

    /**
     * Called by the Keycloak Webhook SPI when a user registers.
     * Upserts the global identity profile.
     */
    async syncKeycloakUser(dto: SyncUserWebhookDto) {
        try {
            return await this.prisma.user.upsert({
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
        } catch (error) {
            this.logger.error(`Failed to sync Keycloak user: ${dto.keycloakId}`, error.stack);
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