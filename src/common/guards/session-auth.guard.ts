// src/common/guards/session-auth.guard.ts
import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from '@nestjs/common';
import {PrismaService} from "../../database/prisma.service";

@Injectable()
export class SessionAuthGuard implements CanActivate {
    constructor(private prisma: PrismaService) {
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;

        // 1. Sniff out the Authorization Header
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            console.error('[SessionAuthGuard] Missing or malformed Authorization header');
            throw new UnauthorizedException('Missing or invalid session token');
        }

        // 2. Safely parse and URL-decode the incoming session token string
        let token = authHeader.split(' ')[1];
        try {
            token = decodeURIComponent(token);
        } catch (e) {
            console.error('[SessionAuthGuard] Failed to decode token string');
        }

        // 3. Match against your pristine authSession database table records
        const session = await this.prisma.authSession.findUnique({
            where: {id: token},
            include: {user: true},
        });

        if (!session) {
            console.error('[SessionAuthGuard] Database miss: No session found matching token');
            throw new UnauthorizedException('Missing or invalid session token');
        }

        if (new Date(session.expiresAt) < new Date()) {
            console.error('[SessionAuthGuard] Token expired. Expiry:', session.expiresAt);
            throw new UnauthorizedException('Missing or invalid session token');
        }

        // 4. Run your exact same cross-schema data sync logic directly here!
        const strideUser = await this.prisma.user.upsert({
            where: {id: session.userId},
            update: {},
            create: {
                id: session.userId,
                email: session.user.email,
                firstName: session.user.name?.split(' ')[0] || 'User',
                lastName: session.user.name?.split(' ')[1] || '',
            },
            // 🚀 Traverse the nested relation: User -> Memberships -> Roles
            include: {
                memberships: {
                    include: {
                        roles: true
                    }
                }
            }
        });

        // 5. Safely map the deeply nested roles into the dictionary your controller expects
        // Converts to: { "tenant-uuid": ["ORG_ADMIN", "TRAINER"], "another-tenant": ["MEMBER"] }
        const formattedTenantRoles = strideUser.memberships?.reduce((acc: any, membership: any) => {
            // Extract just the enum strings from the MembershipRole array
            acc[membership.tenantId] = membership.roles.map((r: any) => r.role);
            return acc;
        }, {}) || {};

        request.user = {
            ...strideUser,
            tenantRoles: formattedTenantRoles
        };

        return true;
    }
}