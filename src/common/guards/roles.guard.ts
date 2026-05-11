import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { PrismaService } from '../../database/prisma.service';
import { User } from '@prisma/client';

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
        const user = request.user as User; // This is the DB User from JwtStrategy
        const tenantId = (request.headers['x-tenant-id'] as string)?.trim();

        if (!user || !tenantId) {
            throw new ForbiddenException('Missing authentication data or Tenant ID.');
        }

        console.log('--- ROLES GUARD (OPTIMIZED) ---');
        console.log(`User: ${user.email} (${user.id})`);
        console.log(`Tenant: ${tenantId}`);

        // Check the membership using the internal DB ID (faster than string lookup)
        const membership = await this.prisma.membership.findUnique({
            where: {
                userId_tenantId: {
                    userId: user.id,
                    tenantId: tenantId
                }
            },
            include: { roles: true }
        });

        if (!membership) {
            console.error(`Access Denied: No membership for User ${user.id} in Tenant ${tenantId}`);
            throw new ForbiddenException('You do not have a membership for this gym.');
        }

        const userRoles = membership.roles.map((r) => r.role);
        const hasPermission = requiredRoles.some((role) => userRoles.includes(role as any));

        if (!hasPermission) {
            console.error(`Access Denied: Required roles ${requiredRoles} not found in ${userRoles}`);
            throw new ForbiddenException('Insufficient gym permissions.');
        }

        return true;
    }
}