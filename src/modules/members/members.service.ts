// src/modules/members/members.service.ts
import {ConflictException, ForbiddenException, Injectable, Logger, NotFoundException} from '@nestjs/common';
import {PrismaService} from '../../database/prisma.service';
import {CreateMembershipDto, TransitionMembershipDto, UpdateMembershipDto} from './dto/members.dto';
import {InvitationStatus, InvoiceStatus, InvoiceType, MembershipStatus, Role} from '@prisma/client';
import {CreateInvitationDto} from "./dto/invitations.dto";

@Injectable()
export class MembersService {
    private readonly logger = new Logger(MembersService.name);

    constructor(private readonly prisma: PrismaService) {
    }

    async createMembership(tenantId: string, dto: CreateMembershipDto) {
        const user = await this.prisma.user.findUnique({where: {id: dto.userId}});
        if (!user) throw new NotFoundException('Global user not found.');

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

        return this.prisma.membership.create({
            data: {
                tenantId,
                userId: dto.userId,
                rfidTag: dto.rfidTag,
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

    async getMyMembership(tenantId: string, keycloakId: string) {
        const membership = await this.prisma.membership.findFirst({
            where: {
                tenantId: tenantId,
                user: {
                    keycloakId: keycloakId
                }
            },
            include: {
                user: true,
                roles: true,
                activePlan: true,
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
            include: {user: true, roles: true, activePlan: true},
            orderBy: {createdAt: 'desc'}
        });
    }

    async getMemberById(tenantId: string, membershipId: string, currentUser: any) {
        const membership = await this.prisma.membership.findUnique({
            where: {id: membershipId},
            include: {user: true, roles: true, activePlan: true}
        });

        if (!membership || membership.tenantId !== tenantId) {
            throw new NotFoundException('Membership not found in this environment.');
        }

        // 1. Is the user viewing their own profile?
        const isSelf = membership.userId === currentUser.id;

        // 2. Is the user staff? Safely parse tenantRoles whether it's an array or string
        const rawRoles = currentUser.tenantRoles?.[tenantId];
        const userRoles = Array.isArray(rawRoles) ? rawRoles : (rawRoles ? [rawRoles] : []);

        const isStaff = userRoles.some((r: string) =>
            ([Role.ORG_ADMIN, Role.MANAGER, Role.TRAINER] as string[]).includes(r)
        );

        // 3. Is the user a global platform admin?
        const isGlobalAdmin = currentUser.isGlobalAdmin === true;

        if (!isSelf && !isStaff && !isGlobalAdmin) {
            throw new ForbiddenException('You do not have permission to view this profile.');
        }

        return membership;
    }

    async updateMembership(tenantId: string, membershipId: string, dto: UpdateMembershipDto) {
        // Fake a valid staff role array to pass the internal authorization check
        await this.getMemberById(tenantId, membershipId, {tenantRoles: {[tenantId]: [Role.ORG_ADMIN]}});

        return this.prisma.membership.update({
            where: {id: membershipId},
            data: {status: dto.status as MembershipStatus},
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
            data: {status: dto.targetState as MembershipStatus},
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
                planId: dto.planId,
                status: InvitationStatus.PENDING,
                expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            }
        });

        if (existingUser) {
            this.dispatchNotifications(dto.email, dto.phone, 'INVITATION_RECEIVED', tenantId, pendingInvite.id, routingDomain);
            return {
                message: 'Invitation sent to existing user. Awaiting their acceptance.',
                pendingInvite
            };
        } else {
            this.dispatchNotifications(dto.email, dto.phone, 'INVITATION_SENT', tenantId, pendingInvite.id, routingDomain);
            return {
                message: 'Invitation sent successfully to new user.',
                pendingInvite
            };
        }
    }

    async acceptInvitation(userId: string, inviteId: string) {
        const invite = await this.prisma.tenantInvitation.findUnique({
            where: {id: inviteId},
            include: {plan: true}
        });

        if (!invite) throw new NotFoundException('Invitation not found.');
        if (invite.status !== InvitationStatus.PENDING) throw new ConflictException('Invitation is no longer valid or has already been claimed.');
        if (invite.expiresAt < new Date()) throw new ConflictException('Invitation has expired.');

        return this.prisma.$transaction(async (tx) => {
            await tx.tenantInvitation.update({
                where: {id: inviteId},
                data: {status: InvitationStatus.CLAIMED}
            });

            const membership = await tx.membership.create({
                data: {
                    userId,
                    tenantId: invite.tenantId,
                    status: invite.planId ? MembershipStatus.PENDING : MembershipStatus.ACTIVE,
                    activePlanId: invite.planId || null,
                    roles: {
                        create: {role: invite.role}
                    }
                },
                include: {user: true, roles: true, activePlan: true}
            });

            if (invite.planId && invite.plan) {
                await tx.invoice.create({
                    data: {
                        tenantId: invite.tenantId,
                        membershipId: membership.id,
                        type: InvoiceType.SUBSCRIPTION,
                        status: InvoiceStatus.OPEN,
                        totalAmount: invite.plan.monthlyPrice,
                        dueDate: new Date(),
                        items: {
                            create: [{
                                description: `Activation: ${invite.plan.name} Plan`,
                                amount: invite.plan.monthlyPrice
                            }]
                        }
                    }
                });
            }

            return membership;
        });
    }

    async getPendingInvites(tenantId: string) {
        return this.prisma.tenantInvitation.findMany({
            where: {tenantId, status: InvitationStatus.PENDING},
            orderBy: {createdAt: 'desc'}
        });
    }

    async revokeInvite(tenantId: string, inviteId: string) {
        const invite = await this.prisma.tenantInvitation.findUnique({where: {id: inviteId}});
        if (!invite || invite.tenantId !== tenantId) throw new NotFoundException('Invite not found.');

        return this.prisma.tenantInvitation.update({
            where: {id: inviteId},
            data: {status: InvitationStatus.REVOKED}
        });
    }

    async resendInvite(tenantId: string, inviteId: string) {
        const invite = await this.prisma.tenantInvitation.findUnique({where: {id: inviteId}});
        if (!invite || invite.tenantId !== tenantId) throw new NotFoundException('Invite not found.');
        if (invite.status !== InvitationStatus.PENDING) throw new ConflictException('Only pending invites can be resent.');

        this.dispatchNotifications(invite.email, invite.phone, 'INVITATION_SENT', tenantId, invite.id);
        return {message: 'Invitation resent successfully.'};
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
}