// src/modules/members/members.service.ts
import { Injectable, NotFoundException, ForbiddenException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateMembershipDto, UpdateMembershipDto, TransitionMembershipDto } from './dto/members.dto';
import { MembershipStatus, Role } from '@prisma/client';

@Injectable()
export class MembersService {
    constructor(private readonly prisma: PrismaService) {}

    async createMembership(tenantId: string, dto: CreateMembershipDto) {
        const user = await this.prisma.user.findUnique({ where: { id: dto.userId } });
        if (!user) throw new NotFoundException('Global user not found.');

        // FIX 1: Correct compound key order based on @@unique([userId, tenantId])
        const existing = await this.prisma.membership.findUnique({
            where: {
                userId_tenantId: { userId: dto.userId, tenantId }
            }
        });

        if (existing) throw new ConflictException('User is already a member of this tenant.');

        return this.prisma.membership.create({
            data: {
                tenantId,
                userId: dto.userId,
                status: MembershipStatus.ACTIVE,
                // FIX 2: Nested write for the one-to-many roles relationship
                roles: {
                    create: {
                        role: dto.initialRole
                    }
                }
            },
            include: {
                user: true,
                roles: true // Include roles in the response
            }
        });
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