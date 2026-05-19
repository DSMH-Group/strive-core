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
     * Public discovery engine allowing users to find partner spaces.
     */
    async exploreTenants(filters: { search?: string; vertical?: string }) {
        const {search, vertical} = filters;

        // Build a dynamic query condition array
        const whereConditions: Prisma.TenantWhereInput[] = [];

        if (search) {
            whereConditions.push({
                OR: [
                    {name: {contains: search, mode: 'insensitive'}},
                    // If you decide to store a physical address text field inside tenant or config:
                    {slug: {contains: this.generateSlug(search), mode: 'insensitive'}}
                ]
            });
        }

        if (vertical && vertical !== 'All') {
            // Because vertical configuration maps cleanly to your frontend taxonomy,
            // we can match against partial text or properties depending on schemas.
            whereConditions.push({
                name: {contains: vertical, mode: 'insensitive'}
            });
        }

        const tenants = await this.prisma.tenant.findMany({
            where: whereConditions.length > 0 ? {AND: whereConditions} : {},
            select: {
                id: true,
                name: true,
                domain: true,
                themeConfig: true,
                // Avoid extracting secureGatewayKeys or taxRules here to maintain absolute data safety!
            },
            take: 20 // Sensible default limit to protect performance on 4G networks
        });

        // Map database entities to output structure matching our frontend TenantDirectoryItem interface
        return tenants.map(tenant => {
            const config = (tenant.themeConfig || {}) as any;
            return {
                id: tenant.id,
                name: tenant.name,
                subdomain: tenant.domain,
                // Fallback to high performance if no specific type is initialized yet
                vertical: config.vertical || "High Performance",
                location: config.location || "Sri Lanka",
                accentColor: config.primaryColor ? `from-[${config.primaryColor}]/20 to-zinc-900` : "from-orange-600/20 to-amber-600/10"
            };
        });
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