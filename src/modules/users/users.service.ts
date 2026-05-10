// src/modules/users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { SyncUserWebhookDto } from './dto/sync-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {PrismaService} from "../../database/prisma.service";

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    /**
     * Called by the Keycloak Webhook SPI when a user registers.
     */
    async syncKeycloakUser(dto: SyncUserWebhookDto) {
        return this.prisma.user.upsert({
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
    }

    /**
     * Fetch the user by their Keycloak JWT 'sub' claim
     */
    async getMe(keycloakId: string) {
        const user = await this.prisma.user.findUnique({
            where: { keycloakId },
            // Optional: Include memberships if we want the frontend to know
            // which gyms this user has access to right upon login.
            include: { memberships: { include: { tenant: true } } },
        });

        if (!user) throw new NotFoundException('User profile not found in Strive DB');
        return user;
    }

    /**
     * Update Strive profile details
     */
    async updateMe(keycloakId: string, dto: UpdateUserDto) {
        return this.prisma.user.update({
            where: { keycloakId },
            data: dto,
        });
    }
}