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
        const user = request.user;
        const tenantId = (request.headers['x-tenant-id'] as string)?.trim(); // 💡 Trim whitespace

        // 💡 THE TRUTH LOGS
        const keycloakId = user?.sub || user?.keycloakId;
        console.log('--- ROLES GUARD DEBUG START ---');
        console.log('1. JWT Keycloak ID (sub):', keycloakId);
        console.log('2. Header Tenant ID:', tenantId);
        console.log('3. Required Roles:', requiredRoles);

        if (!keycloakId || !tenantId) {
            console.error('Missing ID or TenantID in request');
            throw new ForbiddenException('Missing authentication data.');
        }

        // Check if the user even exists in the DB first
        const userInDb = await this.prisma.user.findUnique({
            where: { keycloakId }
        });

        if (!userInDb) {
            console.error(`DATABASE: No user found for KeycloakID: ${keycloakId}`);
            throw new ForbiddenException('User not found in DB.');
        }
        console.log('4. User found in DB:', userInDb.email);

        // Check the membership specifically
        const membership = await this.prisma.membership.findFirst({
            where: {
                tenantId: tenantId,
                user: { keycloakId: keycloakId }
            },
            include: { roles: true }
        });

        if (!membership) {
            // 💡 THIS IS WHERE IT'S FAILING
            console.error(`DATABASE: No membership found for User ${userInDb.id} and Tenant ${tenantId}`);
            throw new ForbiddenException('You do not have an active membership for this gym.');
        }

        console.log('5. Membership Found! Roles:', membership.roles.map(r => r.role));
        console.log('--- ROLES GUARD DEBUG END ---');

        const userRoles = membership.roles.map((r) => r.role);
        return requiredRoles.some((role) => userRoles.includes(role as any));
    }
}