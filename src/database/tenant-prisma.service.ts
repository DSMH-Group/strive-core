// src/database/tenant-prisma.service.ts
import { Inject, Injectable, Scope, UnauthorizedException } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import type { Request } from 'express';
import { PrismaService } from './prisma.service';

@Injectable({ scope: Scope.REQUEST })
export class TenantPrismaService {
    private readonly extendedClient;

    constructor(
        @Inject(REQUEST) private readonly request: Request,
        private readonly prisma: PrismaService,
    ) {
        const tenantId = this.request.headers['x-tenant-id'] as string;

        if (!tenantId) {
            throw new UnauthorizedException('Tenant context is missing.');
        }

        // ONLY models that physically possess a 'tenantId' column in schema.prisma
        const rootTenantModels = [
            'Membership',
            'Attendance',
            'Invoice',
            'Resource',
            'AuditLog',
            'TenantInvitation'
        ];

        this.extendedClient = this.prisma.$extends({
            query: {
                $allModels: {
                    async $allOperations({ model, operation, args, query }) {
                        // Apply automatic invisible scoping ONLY to Root Tenant Models
                        if (rootTenantModels.includes(model)) {
                            const mutatedArgs: Record<string, any> = args || {};

                            // Scoping for Reads & Updates
                            if (['findFirst', 'findMany', 'update', 'updateMany', 'delete', 'deleteMany', 'aggregate', 'count'].includes(operation)) {
                                mutatedArgs.where = { ...mutatedArgs.where, tenantId };
                            }

                            // Scoping for Writes
                            if (operation === 'create') {
                                mutatedArgs.data = { ...mutatedArgs.data, tenantId };
                            }

                            if (operation === 'createMany') {
                                if (Array.isArray(mutatedArgs.data)) {
                                    mutatedArgs.data = mutatedArgs.data.map((d: any) => ({ ...d, tenantId }));
                                } else {
                                    mutatedArgs.data = { ...mutatedArgs.data, tenantId };
                                }
                            }

                            return query(mutatedArgs as any);
                        }

                        // For Global models (User, Tenant) OR Child models (Document, Metric),
                        // execute the query normally.
                        return query(args);
                    },
                },
            },
        });
    }

    // Exposes the safely scoped client
    get client() {
        return this.extendedClient;
    }

    // Exposes the active tenant ID for third-party services (S3) and relation-bridging
    get activeTenantId(): string {
        return this.request.headers['x-tenant-id'] as string;
    }
}