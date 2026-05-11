import {ConflictException, Injectable, Logger, NotFoundException} from '@nestjs/common';
import {CreateTenantDto} from './dto/create-tenant.dto';
import {UpdateTenantDto} from './dto/update-tenant.dto';
import {PrismaService} from '../../database/prisma.service';
import {EncryptionService} from '../../common/services/encryption.service';
import {MembershipStatus, Prisma, Role} from '@prisma/client';

@Injectable()
export class TenantsService {
    private readonly logger = new Logger(TenantsService.name);

    constructor(
        private readonly prisma: PrismaService,
        private readonly encryption: EncryptionService
    ) {
    }

    /**
     * Utility to generate a clean, URL-safe slug from the Gym Name
     */
    private generateSlug(name: string): string {
        return name
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    }

    /**
     * Provisions a new Tenant and automatically assigns the creator as ORG_ADMIN.
     */
    async createTenant(dto: CreateTenantDto) {
        // 1. Validation Checks
        const generatedSlug = this.generateSlug(dto.name);

        const existingTenant = await this.prisma.tenant.findFirst({
            where: {
                OR: [
                    {domain: dto.subdomain},
                    {slug: generatedSlug}
                ]
            }
        });

        if (existingTenant) {
            throw new ConflictException(
                existingTenant.domain === dto.subdomain
                    ? 'Subdomain is already taken.'
                    : 'A gym with a similar name already exists.'
            );
        }

        // 2. Transactional Creation (Atomicity)
        try {
            return await this.prisma.$transaction(async (tx) => {
                // Create the Tenant record
                const tenant = await tx.tenant.create({
                    data: {
                        name: dto.name,
                        domain: dto.subdomain,
                        slug: generatedSlug,
                        themeConfig: {
                            primaryColor: '#000000',
                            logoUrl: null
                        } as Prisma.InputJsonObject,
                    }
                });

                // Create the Membership for the creator and assign ORG_ADMIN role
                // This allows the user to immediately pass the RolesGuard for this tenant.
                await tx.membership.create({
                    data: {
                        userId: dto.ownerId, // The ID from your Keycloak Webhook sync
                        tenantId: tenant.id,
                        status: MembershipStatus.ACTIVE,
                        roles: {
                            create: [
                                {role: Role.ORG_ADMIN}
                            ]
                        }
                    }
                });

                this.logger.log(`Tenant created: ${tenant.name} (ID: ${tenant.id}) by User: ${dto.ownerId}`);
                return tenant;
            });
        } catch (error) {
            this.logger.error('Failed to provision tenant and membership', error.stack);
            throw error;
        }
    }

    /**
     * Fetch public configuration for a tenant (used by frontend for branding)
     */
    async getPublicConfig(tenantId: string) {
        const tenant = await this.prisma.tenant.findUnique({
            where: {id: tenantId},
            select: {
                id: true,
                name: true,
                domain: true,
                themeConfig: true,
            }
        });

        if (!tenant) throw new NotFoundException('Tenant not found.');

        return {
            id: tenant.id,
            name: tenant.name,
            subdomain: tenant.domain,
            themeConfig: tenant.themeConfig,
        };
    }

    /**
     * Updates tenant settings (Theme, Taxes, Payment Gateways)
     */
    async updateTenantConfig(tenantId: string, dto: UpdateTenantDto) {
        let secureGatewayKeys = dto.gatewayKeys as any;

        // Encrypt sensitive payment credentials before storing
        if (secureGatewayKeys?.payhereSecret) {
            secureGatewayKeys.payhereSecret = this.encryption.encrypt(secureGatewayKeys.payhereSecret);
        }

        return this.prisma.tenant.update({
            where: {id: tenantId},
            data: {
                ...(dto.themeConfig && {themeConfig: dto.themeConfig as Prisma.InputJsonObject}),
                ...(dto.taxRules && {taxRules: dto.taxRules as Prisma.InputJsonObject}),
                ...(secureGatewayKeys && {gatewayKeys: secureGatewayKeys as Prisma.InputJsonObject}),
            }
        });
    }
}