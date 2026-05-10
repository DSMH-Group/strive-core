// src/common/guards/roles.guard.ts
import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        // 1. Get the required roles from the @Roles() decorator
        const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        // If no roles are required, allow access
        if (!requiredRoles) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const user = request.user; // Injected by JwtAuthGuard
        const tenantId = request.headers['x-tenant-id'];

        if (!user) {
            throw new ForbiddenException('User authentication payload not found.');
        }

        // 2. Global Admins override tenant checks (e.g., Strive Platform Admins)
        if (user.globalRole === 'SYSTEM_ADMIN' && requiredRoles.includes('SYSTEM_ADMIN')) {
            return true;
        }

        // 3. For tenant-specific routes, we MUST have a tenantId
        if (!tenantId) {
            throw new ForbiddenException('X-Tenant-ID header is missing for a tenant-scoped resource.');
        }

        // 4. Check if the user has the required role for THIS specific tenant.
        // Assuming your JWT payload structures memberships like:
        // user.tenantRoles = { "tenant-uuid-1": "ORG_ADMIN", "tenant-uuid-2": "TRAINER" }
        const userRoleForTenant = user.tenantRoles?.[tenantId];

        if (!userRoleForTenant || !requiredRoles.includes(userRoleForTenant)) {
            throw new ForbiddenException(`You do not have the required permissions (${requiredRoles.join(', ')}) for this gym environment.`);
        }

        return true;
    }
}