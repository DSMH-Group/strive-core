// src/modules/members/members.service.ts
import { Injectable, NotFoundException, ForbiddenException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateMembershipDto, UpdateMembershipDto, TransitionMembershipDto } from './dto/members.dto';
import { MembershipStatus, Role } from '@prisma/client';

@Injectable()
export class MembersService {
    constructor(private readonly prisma: PrismaService) {}

    async createMembership(tenantId: string, dto: CreateMembershipDto) {
        // 1. Ensure the Global User exists
        const user = await this.prisma.user.findUnique({ where: { id: dto.userId } });
        if (!user) throw new NotFoundException('Global user not found.');

        // 2. Check for existing membership
        const existing = await this.prisma.membership.findUnique({
            where: {
                userId_tenantId: { userId: dto.userId, tenantId }
            },
            include: { roles: true }
        });

        if (existing) {
            // 💡 LOGIC: If they exist, we "Upgrade" them instead of failing.
            // Check if they already have the role we are trying to add.
            const hasRole = existing.roles.some(r => r.role === dto.initialRole);

            return this.prisma.membership.update({
                where: { id: existing.id },
                data: {
                    status: MembershipStatus.ACTIVE,
                    // Only add the role if they don't have it yet
                    roles: !hasRole ? {
                        create: { role: dto.initialRole }
                    } : undefined,
                    // If an RFID tag was provided in the DTO, link it now
                    ...(dto.rfidTag && { rfidTag: dto.rfidTag })
                },
                include: { user: true, roles: true }
            });
        }

        // 3. Brand New Member Flow (No existing membership)
        return this.prisma.membership.create({
            data: {
                tenantId,
                userId: dto.userId,
                rfidTag: dto.rfidTag, // Link hardware immediately
                status: MembershipStatus.ACTIVE,
                roles: {
                    create: {
                        role: dto.initialRole
                    }
                }
            },
            include: {
                user: true,
                roles: true
            }
        });
    }

    /**
     * Returns the active user's specific membership for the current gym context.
     * Vital for the "Login with Stride" flow.
     */
    async getMyMembership(tenantId: string, userId: string) {
        const membership = await this.prisma.membership.findUnique({
            where: {
                userId_tenantId: { userId, tenantId }
            },
            include: {
                user: true,
                roles: true,
                // We include tenant info so the frontend can render branding (logo, colors)
                tenant: {
                    select: {
                        name: true,
                        themeConfig: true
                    }
                }
            }
        });

        if (!membership) {
            throw new NotFoundException('You do not have an active membership with this gym.');
        }

        return membership;
    }

    async getMembers(tenantId: string, status?: MembershipStatus, role?: Role) {
        const whereClause: any = { tenantId };

        if (status) whereClause.status = status;

        // FIX 3: Filtering by role requires a relational query ("some")
        if (role) {
            whereClause.roles = {
                some: { role: role }
            };
        }

        return this.prisma.membership.findMany({
            where: whereClause,
            include: { user: true, roles: true },
            orderBy: { createdAt: 'desc' }
        });
    }

    async getMemberById(tenantId: string, membershipId: string, currentUser: any) {
        const membership = await this.prisma.membership.findUnique({
            where: { id: membershipId },
            include: { user: true, roles: true }
        });

        if (!membership || membership.tenantId !== tenantId) {
            throw new NotFoundException('Membership not found in this environment.');
        }

        // RBAC Check (Simplified for the updated schema)
        const isSelf = membership.userId === currentUser.sub;
        const isTenantAdmin = currentUser.tenantRoles?.[tenantId] === Role.ORG_ADMIN ||
            currentUser.tenantRoles?.[tenantId] === Role.MANAGER;

        if (!isSelf && !isTenantAdmin) {
            throw new ForbiddenException('You do not have permission to view this profile.');
        }

        return membership;
    }

    async updateMembership(tenantId: string, membershipId: string, dto: UpdateMembershipDto) {
        // First ensure it exists and belongs to the tenant
        await this.getMemberById(tenantId, membershipId, { tenantRoles: { [tenantId]: Role.ORG_ADMIN } });

        return this.prisma.membership.update({
            where: { id: membershipId },
            data: { status: dto.status },
            include: { roles: true }
        });
    }

    async transitionState(tenantId: string, membershipId: string, dto: TransitionMembershipDto) {
        const membership = await this.prisma.membership.findUnique({
            where: { id: membershipId }
        });

        if (!membership || membership.tenantId !== tenantId) {
            throw new NotFoundException('Membership not found.');
        }

        // FIX 4: Removed CANCELLED check, using PENDING/SUSPENDED from schema
        if (membership.status === MembershipStatus.SUSPENDED && dto.targetState === MembershipStatus.SUSPENDED) {
            throw new ConflictException('Membership is already suspended.');
        }

        return this.prisma.membership.update({
            where: { id: membershipId },
            data: { status: dto.targetState },
            include: { roles: true }
        });
    }
}