// src/modules/tenants/tenants.service.ts
import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import { PrismaService } from '../../database/prisma.service';
import { EncryptionService } from '../../common/services/encryption.service';
import { Prisma } from '@prisma/client'; // <-- Crucial for JSONB typing

@Injectable()
export class TenantsService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly encryption: EncryptionService
    ) {}

    // Utility to generate a clean, URL-safe slug from the Gym Name
    private generateSlug(name: string): string {
        return name
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
            .replace(/\s+/g, '-')         // Replace spaces with hyphens
            .replace(/-+/g, '-');         // Remove consecutive hyphens
    }

    async createTenant(dto: CreateTenantDto) {
        // Enforce unique domains
        const existingDomain = await this.prisma.tenant.findUnique({
            where: { domain: dto.subdomain }
        });

        if (existingDomain) {
            throw new ConflictException('Subdomain is already taken.');
        }

        // Generate the required slug
        const generatedSlug = this.generateSlug(dto.name);

        // Optional: Check if the slug is also taken (if it's marked @unique in Prisma)
        const existingSlug = await this.prisma.tenant.findUnique({
            where: { slug: generatedSlug }
        });

        if (existingSlug) {
            throw new ConflictException('A gym with a very similar name already exists. Please modify the name slightly.');
        }

        return this.prisma.tenant.create({
            data: {
                name: dto.name,
                domain: dto.subdomain,
                slug: generatedSlug, // <-- THE FIX: Prisma is now happy
                themeConfig: {
                    primaryColor: '#000000',
                    logoUrl: null
                } as Prisma.InputJsonObject,
            }
        });
    }

    async getPublicConfig(tenantId: string) {
        const tenant = await this.prisma.tenant.findUnique({
            where: { id: tenantId },
            select: {
                id: true,
                name: true,
                domain: true, // Assuming the schema uses 'domain'
                themeConfig: true,
            }
        });

        if (!tenant) throw new NotFoundException('Tenant not found.');

        // Optionally map it back to 'subdomain' for the frontend response if Next.js expects it
        return {
            id: tenant.id,
            name: tenant.name,
            subdomain: tenant.domain,
            themeConfig: tenant.themeConfig,
        };
    }

    async updateTenantConfig(tenantId: string, dto: UpdateTenantDto) {
        let secureGatewayKeys = dto.gatewayKeys;

        if (secureGatewayKeys) {
            if (secureGatewayKeys.payhereSecret) {
                secureGatewayKeys.payhereSecret = this.encryption.encrypt(secureGatewayKeys.payhereSecret);
            }
        }

        // Fix 2: Cast the DTO class instances to Prisma.InputJsonObject
        return this.prisma.tenant.update({
            where: { id: tenantId },
            data: {
                ...(dto.themeConfig && { themeConfig: dto.themeConfig as Prisma.InputJsonObject }),
                ...(dto.taxRules && { taxRules: dto.taxRules as Prisma.InputJsonObject }),
                ...(secureGatewayKeys && { gatewayKeys: secureGatewayKeys as Prisma.InputJsonObject }),
            }
        });
    }
}