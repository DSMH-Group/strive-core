import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        private prisma: PrismaService // 💡 Inject Prisma to check real-time permissions
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        // 1. Get required roles from decorator
        const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        if (!requiredRoles) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const user = request.user;
        const tenantId = request.headers['x-tenant-id'];

        if (!user) {
            throw new ForbiddenException('User authentication payload not found.');
        }

        // 2. Global Admins override (Check user record in DB or special claim)
        // If your 'dev' user is a SYSTEM_ADMIN, we check that flag first.
        if (user.globalRole === 'SYSTEM_ADMIN' || user.isGlobalAdmin) {
            return true;
        }

        // 3. For tenant-specific routes, we MUST have a tenantId
        if (!tenantId) {
            throw new ForbiddenException('X-Tenant-ID header is missing for a tenant-scoped resource.');
        }

        // 4. REAL-TIME DB CHECK: Look up membership for this user and this tenant
        const membership = await this.prisma.membership.findUnique({
            where: {
                userId_tenantId: {
                    userId: user.id, // Ensure this matches the field name in your User entity (id or keycloakId)
                    tenantId: tenantId,
                },
            },
            include: {
                roles: true, // Includes the membership_roles table
            },
        });

        if (!membership || membership.status !== 'ACTIVE') {
            throw new ForbiddenException('You are not an active member of this gym environment.');
        }

        // 5. Extract role names and compare
        const userRoles = membership.roles.map((r) => r.role);
        const hasRole = requiredRoles.some((role) => userRoles.includes(role as any));

        if (!hasRole) {
            throw new ForbiddenException(
                `Required permissions: (${requiredRoles.join(', ')}). Your roles: (${userRoles.join(', ')})`
            );
        }

        return true;
    }
}