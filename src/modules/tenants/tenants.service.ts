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
     * Optionally resolves membership statuses if an active Keycloak access token is forwarded.
     */
    async exploreTenants(filters: { search?: string; vertical?: string }, token?: string) {
        const {search, vertical} = filters;

        // 1. Build a dynamic query condition array
        const whereConditions: Prisma.TenantWhereInput[] = [];

        if (search) {
            whereConditions.push({
                OR: [
                    {name: {contains: search, mode: 'insensitive'}},
                    {slug: {contains: this.generateSlug(search), mode: 'insensitive'}}
                ]
            });
        }

        if (vertical && vertical !== 'All') {
            whereConditions.push({
                name: {contains: vertical, mode: 'insensitive'}
            });
        }

        // 2. Fetch matching tenants from the ledger database
        const tenants = await this.prisma.tenant.findMany({
            where: whereConditions.length > 0 ? {AND: whereConditions} : {},
            select: {
                id: true,
                name: true,
                domain: true,
                themeConfig: true,
            },
            take: 20
        });

        // 3. User Membership Resolution Layer
        let userMemberships: Array<{ tenantId: string; status: string }> = [];

        if (token) {
            try {
                // Decode or verify token payload claims to capture the user's Keycloak ID
                // In a standard JWT, the unique sub claim maps to Keycloak's identifier
                const jwt = require('jsonwebtoken');
                const decoded = jwt.decode(token);
                const keycloakId = decoded?.sub || decoded?.keycloakId;

                if (keycloakId) {
                    const userWithMemberships = await this.prisma.user.findFirst({
                        where: {keycloakId},
                        select: {
                            memberships: {
                                select: {
                                    tenantId: true,
                                    status: true
                                }
                            }
                        }
                    });
                    if (userWithMemberships) {
                        userMemberships = userWithMemberships.memberships;
                    }
                }
            } catch (error) {
                this.logger.warn('Token context present but failed parsing or resolution checks.', error.stack);
                // Non-blocking catch so unauthenticated or expired users can still browse public listings cleanly
            }
        }

        // 4. Map database records to look exactly like our frontend's TenantDirectoryItem contract
        return tenants.map(tenant => {
            const config = (tenant.themeConfig || {}) as any;

            // Match live user membership status parameters
            const userMembership = userMemberships.find(m => m.tenantId === tenant.id);
            const resolvedMembershipStatus = userMembership ? userMembership.status : "NONE";

            return {
                id: tenant.id,
                name: tenant.name,
                subdomain: tenant.domain,
                vertical: config.vertical || "High Performance",
                location: config.location || "Sri Lanka",
                accentColor: config.primaryColor ? `from-[${config.primaryColor}]/20 to-zinc-900` : "from-orange-600/20 to-amber-600/10",
                membershipStatus: resolvedMembershipStatus // 👈 This wires live statuses straight to the UI!
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