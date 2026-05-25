// src/modules/members/members.service.ts
import {ConflictException, ForbiddenException, Injectable, Logger, NotFoundException} from '@nestjs/common';
import {PrismaService} from '../../database/prisma.service';
import {CreateMembershipDto, TransitionMembershipDto, UpdateMembershipDto} from './dto/members.dto';
import {MembershipStatus, Role} from '@prisma/client';
import {CreateInvitationDto} from "./dto/invitations.dto";

@Injectable()
export class MembersService {
    private readonly logger = new Logger(MembersService.name);

    constructor(private readonly prisma: PrismaService) {
    }

    async createMembership(tenantId: string, dto: CreateMembershipDto) {
        // 1. Ensure the Global User exists
        const user = await this.prisma.user.findUnique({where: {id: dto.userId}});
        if (!user) throw new NotFoundException('Global user not found.');

        // 2. Check for existing membership
        const existing = await this.prisma.membership.findUnique({
            where: {
                userId_tenantId: {userId: dto.userId, tenantId}
            },
            include: {roles: true}
        });

        if (existing) {
            const hasRole = existing.roles.some(r => r.role === dto.initialRole);

            return this.prisma.membership.update({
                where: {id: existing.id},
                data: {
                    status: MembershipStatus.PENDING,
                    roles: !hasRole ? {
                        create: {role: dto.initialRole}
                    } : undefined,
                    ...(dto.rfidTag && {rfidTag: dto.rfidTag})
                },
                include: {user: true, roles: true}
            });
        }

        // 3. Brand New Member Flow (No existing membership)
        return this.prisma.membership.create({
            data: {
                tenantId,
                userId: dto.userId,
                rfidTag: dto.rfidTag, // Link hardware immediately
                status: MembershipStatus.PENDING,
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
    async getMyMembership(tenantId: string, keycloakId: string) {
        const membership = await this.prisma.membership.findFirst({
            where: {
                tenantId: tenantId,
                user: {
                    keycloakId: keycloakId // Use the Keycloak 'sub' to find the internal user
                }
            },
            include: {
                user: true,
                roles: true,
                activePlan: true, // 🚀 NEW: This includes the full Plan object (name, price)
                tenant: {
                    select: {
                        name: true,
                        themeConfig: true
                    }
                }
            }
        });

        if (!membership) {
            throw new NotFoundException('No active membership found for this gym context.');
        }

        // 💡 Note: tokensLeft, autoRenewEnabled, expiresAt, and activePlanId
        // are scalar fields and are now returned automatically in this object!
        return membership;
    }

    async getMembers(tenantId: string, status?: MembershipStatus, role?: Role) {
        const whereClause: any = {tenantId};

        if (status) whereClause.status = status;

        if (role) {
            whereClause.roles = {
                some: {role: role}
            };
        }

        return this.prisma.membership.findMany({
            where: whereClause,
            // 🚀 Optional Bonus: You might want to include the activePlan here too
            // so the Admin table can display which plan everyone is on!
            include: {user: true, roles: true, activePlan: true},
            orderBy: {createdAt: 'desc'}
        });
    }

    async getMemberById(tenantId: string, membershipId: string, currentUser: any) {
        const membership = await this.prisma.membership.findUnique({
            where: {id: membershipId},
            include: {user: true, roles: true, activePlan: true} // Added activePlan here as well
        });

        if (!membership || membership.tenantId !== tenantId) {
            throw new NotFoundException('Membership not found in this environment.');
        }

        // RBAC Check
        const isSelf = membership.userId === currentUser.id;
        const isTenantAdmin = currentUser.tenantRoles?.[tenantId] === Role.ORG_ADMIN ||
            currentUser.tenantRoles?.[tenantId] === Role.MANAGER;

        if (!isSelf && !isTenantAdmin) {
            throw new ForbiddenException('You do not have permission to view this profile.');
        }

        return membership;
    }

    async updateMembership(tenantId: string, membershipId: string, dto: UpdateMembershipDto) {
        // First ensure it exists and belongs to the tenant
        await this.getMemberById(tenantId, membershipId, {tenantRoles: {[tenantId]: Role.ORG_ADMIN}});

        return this.prisma.membership.update({
            where: {id: membershipId},
            data: {status: dto.status},
            include: {roles: true, activePlan: true}
        });
    }

    async transitionState(tenantId: string, membershipId: string, dto: TransitionMembershipDto) {
        const membership = await this.prisma.membership.findUnique({
            where: {id: membershipId}
        });

        if (!membership || membership.tenantId !== tenantId) {
            throw new NotFoundException('Membership not found.');
        }

        if (membership.status === MembershipStatus.SUSPENDED && dto.targetState === MembershipStatus.SUSPENDED) {
            throw new ConflictException('Membership is already suspended.');
        }

        return this.prisma.membership.update({
            where: {id: membershipId},
            data: {status: dto.targetState},
            include: {roles: true}
        });
    }

    async inviteUser(tenantId: string, dto: CreateInvitationDto) {
        const existingUser = await this.prisma.user.findFirst({
            where: {
                OR: [
                    { email: dto.email || undefined },
                    { phone: dto.phone || undefined }
                ]
            }
        });

        if (existingUser) {
            const membership = await this.createMembership(tenantId, {
                userId: existingUser.id,
                initialRole: dto.initialRole,
                rfidTag: ''
            });
            this.dispatchNotifications(dto.email, dto.phone, 'ADDED_TO_TENANT', tenantId);
            return { message: 'User already existed globally and was linked automatically.', membership };
        }

        const tenant = await this.prisma.tenant.findUnique({
            where: {id: tenantId},
            select: {domain: true, slug: true}
        });

        const routingDomain = tenant?.domain && tenant.domain.includes('.')
            ? tenant.domain
            : `${tenant?.slug || tenant?.domain}.dsmhgroup.com`;

        const pendingInvite = await this.prisma.tenantInvitation.create({
            data: {
                tenantId,
                email: dto.email,
                phone: dto.phone,
                role: dto.initialRole,
                status: 'PENDING',
                expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
            }
        });

        this.dispatchNotifications(dto.email, dto.phone, 'INVITATION_SENT', tenantId, pendingInvite.id, routingDomain);

        return { message: 'Invitation sent successfully.', pendingInvite };
    }

    private async dispatchNotifications(
        email?: string | null,
        phone?: string | null,
        templateType: string = 'INVITATION_SENT',
        tenantId?: string,
        inviteId?: string,
        routingDomain?: string
    ): Promise<void> {
        const tasks: Promise<void | any>[] = [];
        const baseUrl = process.env.NEXT_PUBLIC_WEBAPP_URL || 'https://dsmhgroup.com';
        let actionUrl = `${baseUrl}/register`;

        if (inviteId && email && routingDomain) {
            actionUrl = `${baseUrl}/register?inviteToken=${inviteId}&email=${encodeURIComponent(email)}&domain=${routingDomain}`;
        }

        if (email) {
            const emailTask = async () => {
                this.logger.log(`[EMAIL] Dispatching ${templateType} to ${email}`);
                this.logger.log(`[EMAIL PAYLOAD] Click here to activate your account: ${actionUrl}`);
            };
            tasks.push(emailTask());
        }

        if (phone) {
            const smsTask = async () => {
                this.logger.log(`[SMS] Dispatching ${templateType} to ${phone}`);
                this.logger.log(`[SMS PAYLOAD] Join Stride: ${actionUrl}`);
            };
            tasks.push(smsTask());
        }

        if (tasks.length > 0) {
            Promise.allSettled(tasks).then(results => {
                results.forEach((result, index) => {
                    if (result.status === 'rejected') {
                        this.logger.error(`[Notification Dispatch Error] Task ${index} failed:`, result.reason);
                    }
                });
            });
        }
    }

    async getPendingInvites(tenantId: string) {
        return this.prisma.tenantInvitation.findMany({
            where: { tenantId, status: 'PENDING' },
            orderBy: { createdAt: 'desc' }
        });
    }

    async revokeInvite(tenantId: string, inviteId: string) {
        const invite = await this.prisma.tenantInvitation.findUnique({ where: { id: inviteId } });
        if (!invite || invite.tenantId !== tenantId) throw new NotFoundException('Invite not found.');

        return this.prisma.tenantInvitation.delete({ where: { id: inviteId } });
    }

    async resendInvite(tenantId: string, inviteId: string) {
        const invite = await this.prisma.tenantInvitation.findUnique({ where: { id: inviteId } });
        if (!invite || invite.tenantId !== tenantId) throw new NotFoundException('Invite not found.');

        this.dispatchNotifications(invite.email, invite.phone, 'INVITATION_SENT', tenantId);
        return { message: 'Invitation resent successfully.' };
    }
}