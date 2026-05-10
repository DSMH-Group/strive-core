// src/modules/system/system.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { ResolveTenantDto } from './dto/resolve-tenant.dto';

@Injectable()
export class SystemService {
    constructor(private readonly prisma: PrismaService) {}

    async resolveTenantMetadata(dto: ResolveTenantDto) {
        // In production, this should be wrapped in a Redis cache look-up
        // to keep Next.js Middleware latency < 50ms.
        const tenant = await this.prisma.tenant.findFirst({
            where: {
                OR: [
                    { domain: dto.domain },
                    { slug: dto.domain.split('.')[0] }, // Handles gymname.strive.lk
                ],
            },
            select: {
                id: true,
                name: true,
                themeConfig: true,
            },
        });

        if (!tenant) {
            throw new NotFoundException('Tenant not found for this domain.');
        }

        return tenant;
    }

    getBasicHealth() {
        return {
            status: 'ok',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
        };
    }
}