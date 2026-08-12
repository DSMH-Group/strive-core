// src/modules/members/members.service.ts
import {ConflictException, ForbiddenException, Injectable, Logger, NotFoundException} from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import {PrismaService} from '../../database/prisma.service';
import {AssignProgramDto, CreateMembershipDto, TransitionMembershipDto, UpdateMembershipDto} from './dto/members.dto';
import {InvitationStatus, InvoiceStatus, InvoiceType, MembershipStatus, Role} from '@prisma/client';
import {CreateInvitationDto} from "./dto/invitations.dto";

@Injectable()
export class MembersService {
    private readonly logger = new Logger(MembersService.name);

    constructor(
        private readonly prisma: PrismaService,
        @InjectQueue('comms') private readonly commsQueue: Queue,
    ) {
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

    async getMyMembership(tenantId: string, id: string) {
        const membership = await this.prisma.membership.findFirst({
            where: {
                tenantId: tenantId,
                user: {
                    id: id
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
        // 1. Fetch the target membership
        const membership = await this.prisma.membership.findUnique({
            where: {id: membershipId},
            include: {user: true, roles: true, activePlan: true, activeProgram: true}
        });

        if (!membership || membership.tenantId !== tenantId) {
            throw new NotFoundException('Membership not found in this environment.');
        }

        // 2. Is the user viewing their own profile?
        const isSelf = membership.userId === currentUser.id;

        // 3. 🚀 BULLETPROOF RBAC CHECK: Look up the requester in the database
        let isStaff = false;

        if (!isSelf && currentUser.id) {
            // Find the membership of the person making the API request
            const requesterMembership = await this.prisma.membership.findFirst({
                where: {userId: currentUser.id, tenantId: tenantId},
                include: {roles: true}
            });

            // Extract their roles safely
            const requesterRoles = requesterMembership?.roles.map(r => r.role) || [];

            // Check if any of their roles are staff roles
            isStaff = requesterRoles.some(r =>
                ([Role.ORG_ADMIN, Role.MANAGER, Role.TRAINER] as string[]).includes(r)
            );
        }

        const isGlobalAdmin = currentUser.isGlobalAdmin === true;

        // 4. Final Verdict
        if (!isSelf && !isStaff && !isGlobalAdmin) {
            throw new ForbiddenException('You do not have permission to view this profile.');
        }

        return membership;
    }

    async updateMembership(tenantId: string, membershipId: string, dto: UpdateMembershipDto) {
        // 1. Verify target context scope exists inside isolation boundaries
        const membership = await this.prisma.membership.findUnique({
            where: {id: membershipId},
            include: {user: true, tenant: true, roles: true}
        });

        if (!membership || membership.tenantId !== tenantId) {
            throw new NotFoundException('Membership context mapping not found within this tenant.');
        }

        const targetRole = dto.initialRole || dto.role;

        if (targetRole) {
            // Upsert or set the target role
            const existingRole = membership.roles.find(r => r.role === targetRole);
            if (!existingRole) {
                // Remove old roles if updating staff role, or add new role
                await this.prisma.membershipRole.deleteMany({
                    where: { membershipId }
                });
                await this.prisma.membershipRole.create({
                    data: {
                        membershipId,
                        role: targetRole
                    }
                });

                // Send notification email if user has email
                if (membership.user?.email) {
                    const roleLabelMap: Record<string, string> = {
                        'ORG_ADMIN': 'Organization Administrator',
                        'MANAGER': 'Facility Manager',
                        'TRAINER': 'Trainer / Coach',
                        'MEMBER': 'Member',
                    };
                    const roleTitle = roleLabelMap[targetRole] || targetRole;
                    const baseUrl = process.env.NEXT_PUBLIC_WEBAPP_URL || 'https://dsmhgroup.com';

                    await this.commsQueue.add('dispatch', {
                        channel: 'EMAIL',
                        recipient: { email: membership.user.email },
                        subject: `Strive Role Assignment: ${roleTitle}`,
                        message: `Hello ${membership.user.firstName || 'User'},\n\nYour permissions for ${membership.tenant?.name || 'your workspace'} have been updated. You have been assigned the role of ${roleTitle}.\n\nYou now have administrative/operational access according to your new role assignment.`,
                        actionUrl: `${baseUrl}/login`,
                        actionText: 'Access Workspace',
                    }).catch(err => this.logger.error(`Failed to dispatch role update email: ${err.message}`));
                }
            }
        }

        // 2. Map payload dynamically into target Prisma configuration
        return this.prisma.membership.update({
            where: {id: membershipId},
            data: {
                ...(dto.status && {status: dto.status}),
                ...(dto.tokensLeft !== undefined && {tokensLeft: dto.tokensLeft}),
                ...(dto.autoRenewEnabled !== undefined && {autoRenewEnabled: dto.autoRenewEnabled}),

                // Convert incoming ISO string to native Date object for Prisma
                ...(dto.expiresAt && {expiresAt: new Date(dto.expiresAt)}),

                // If the property is missing entirely (undefined), keep old state.
                // If it is explicitly passed as null, pass it to Prisma to clear the field.
                activePlanId: dto.activePlanId === undefined ? membership.activePlanId : dto.activePlanId,
                rfidTag: dto.rfidTag === undefined ? membership.rfidTag : dto.rfidTag,
            },
            include: {
                user: true,
                roles: true,
                activePlan: true // Perfect match for frontend mapping expectations
            }
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
            this.dispatchNotifications(dto.email, dto.phone, 'INVITATION_RECEIVED', tenantId, pendingInvite.id, routingDomain, dto.initialRole);
            return {
                message: 'Invitation sent to existing user. Awaiting their acceptance.',
                pendingInvite
            };
        } else {
            this.dispatchNotifications(dto.email, dto.phone, 'INVITATION_SENT', tenantId, pendingInvite.id, routingDomain, dto.initialRole);
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

        this.dispatchNotifications(invite.email, invite.phone, 'INVITATION_SENT', tenantId, invite.id, undefined, invite.role);
        return {message: 'Invitation resent successfully.'};
    }

    private async dispatchNotifications(
        email?: string | null,
        phone?: string | null,
        templateType: string = 'INVITATION_SENT',
        tenantId?: string,
        inviteId?: string,
        routingDomain?: string,
        role?: Role
    ): Promise<void> {
        const baseUrl = process.env.NEXT_PUBLIC_WEBAPP_URL || 'https://dsmhgroup.com';
        let actionUrl = `${baseUrl}/register`;

        if (inviteId && email && routingDomain) {
            actionUrl = `${baseUrl}/register?inviteToken=${inviteId}&email=${encodeURIComponent(email)}&domain=${routingDomain}`;
        }

        const roleLabelMap: Record<string, string> = {
            'ORG_ADMIN': 'Organization Administrator',
            'MANAGER': 'Facility Manager',
            'TRAINER': 'Trainer / Coach',
            'MEMBER': 'Member',
        };

        const roleTitle = role ? (roleLabelMap[role] || role) : 'Member';

        const subjectMap: Record<string, string> = {
            'ORG_ADMIN': 'Invitation: You have been added as an Administrator on Strive',
            'MANAGER': 'Invitation: You have been added as a Facility Manager on Strive',
            'TRAINER': 'Invitation: You have been added as a Trainer on Strive',
            'MEMBER': 'Activate your Strive Membership Account',
        };

        const emailSubject = role ? (subjectMap[role] || 'Activate your Strive Account') : 'Activate your Strive Account';

        const tasks: Promise<any>[] = [];

        if (email) {
            const messageText = `You have been invited to join Strive as a ${roleTitle}.\n\nPlease click the button below to complete your account registration and activate your workspace access.`;
            tasks.push(
                this.commsQueue.add('dispatch', {
                    channel: 'EMAIL',
                    recipient: { email },
                    message: messageText,
                    subject: emailSubject,
                    actionUrl: actionUrl,
                    actionText: 'Activate Account & Join',
                })
            );
        }

        if (phone) {
            const messageText = `Join Strive (${roleTitle}): ${actionUrl}`;
            tasks.push(
                this.commsQueue.add('dispatch', {
                    channel: 'SMS',
                    recipient: { phone },
                    message: messageText,
                })
            );
        }

        if (tasks.length > 0) {
            await Promise.allSettled(tasks);
        }
    }

    async assignProgram(tenantId: string, membershipId: string, dto: AssignProgramDto) {
        const membership = await this.prisma.membership.findUnique({
            where: { id: membershipId }
        });
        if (!membership || membership.tenantId !== tenantId) {
            throw new NotFoundException('Membership not found in this environment.');
        }

        return this.prisma.programAssignment.upsert({
            where: { membershipId },
            update: {
                name: dto.name,
                goal: dto.goal,
                totalWeeks: dto.totalWeeks ?? 12,
                routines: dto.routines,
            },
            create: {
                membershipId,
                name: dto.name,
                goal: dto.goal,
                totalWeeks: dto.totalWeeks ?? 12,
                routines: dto.routines,
            }
        });
    }

    async deleteProgram(tenantId: string, membershipId: string) {
        const membership = await this.prisma.membership.findUnique({
            where: { id: membershipId }
        });
        if (!membership || membership.tenantId !== tenantId) {
            throw new NotFoundException('Membership not found in this environment.');
        }

        try {
            await this.prisma.programAssignment.delete({
                where: { membershipId }
            });
        } catch {
            // ignore if not found
        }
        return { success: true };
    }
}