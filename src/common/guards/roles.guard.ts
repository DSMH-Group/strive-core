import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        private prisma: PrismaService
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        if (!requiredRoles) return true;

        const request = context.switchToHttp().getRequest();
        const user = request.user; // This is the decoded JWT payload
        const tenantId = request.headers['x-tenant-id'] as string;

        if (!user) {
            throw new ForbiddenException('User authentication payload not found.');
        }

        // 💡 THE FIX: Use the 'sub' claim from Keycloak to find the membership
        // through the User relationship, since we don't have the internal DB UUID yet.
        const keycloakId = user.sub || user.keycloakId;

        // 1. Check for Global Admin status first
        // We query the DB here because JWTs can be stale
        const dbUser = await this.prisma.user.findUnique({
            where: { keycloakId }
        });

        if (!dbUser) throw new ForbiddenException('User not synchronized in Strive database.');
        if (dbUser.isGlobalAdmin) return true;

        // 2. Tenant-specific route check
        if (!tenantId) {
            throw new ForbiddenException('X-Tenant-ID header is missing for a tenant-scoped resource.');
        }

        // 3. Find Membership using the relation
        // Using findFirst because we are querying via the related user's keycloakId
        const membership = await this.prisma.membership.findFirst({
            where: {
                tenantId: tenantId,
                user: {
                    keycloakId: keycloakId
                }
            },
            include: {
                roles: true,
            },
        });

        if (!membership || membership.status !== 'ACTIVE') {
            throw new ForbiddenException('You do not have an active membership for this gym.');
        }

        // 4. Verify Roles
        const userRoles = membership.roles.map((r) => r.role);
        const hasRole = requiredRoles.some((role) => userRoles.includes(role as any));

        if (!hasRole) {
            throw new ForbiddenException(
                `Permission Denied. Required: (${requiredRoles.join(', ')}). Your roles: (${userRoles.join(', ')})`
            );
        }

        return true;
    }
}