// src/modules/system/system.service.ts
import {Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from '../../database/prisma.service';
import {ResolveTenantDto} from './dto/resolve-tenant.dto';

@Injectable()
export class SystemService {
    constructor(private readonly prisma: PrismaService) {}

    async resolveTenantMetadata(dto: ResolveTenantDto) {
        // 🚀 THE FIX: Dynamic Domain Suffix Stripper
        // Input example: "test.dsmhgroup.com" -> Output: "test"
        // Input example: "gymname.localhost"   -> Output: "gymname"
        let isolatedTenantDomain = dto.domain;

        const knownSuffixes = ['.dsmhgroup.com', '.dsmhgroup.local', '.localhost'];

        for (const suffix of knownSuffixes) {
            if (dto.domain.endsWith(suffix)) {
                isolatedTenantDomain = dto.domain.replace(suffix, '');
                break;
            }
        }

        // Fallback: If it's a domain pattern we didn't explicitly map, grab the first block before the dot
        if (isolatedTenantDomain.includes('.')) {
            isolatedTenantDomain = isolatedTenantDomain.split('.')[0];
        }

        const tenant = await this.prisma.tenant.findFirst({
            where: {
                domain: isolatedTenantDomain, // 🎯 Matches strictly against your clean 'test' record!
            },
            select: {
                id: true,
                name: true,
                themeConfig: true,
            },
        });

        if (!tenant) {
            throw new NotFoundException(`Tenant environment not found for configuration path: ${isolatedTenantDomain}`);
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