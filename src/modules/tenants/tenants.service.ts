// src/modules/tenants/tenants.service.ts
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
            }
        }

        // 4. Map database records to look exactly like our frontend's TenantDirectoryItem contract
        return tenants.map(tenant => {
            const config = (tenant.themeConfig || {}) as any;

            const userMembership = userMemberships.find(m => m.tenantId === tenant.id);
            const resolvedMembershipStatus = userMembership ? userMembership.status : "NONE";

            return {
                id: tenant.id,
                name: tenant.name,
                subdomain: tenant.domain,
                vertical: config.vertical || "High Performance",
                location: config.location || "Sri Lanka",
                accentColor: config.primaryColor ? `from-[${config.primaryColor}]/20 to-zinc-900` : "from-orange-600/20 to-amber-600/10",
                membershipStatus: resolvedMembershipStatus
            };
        });
    }

    private generateSlug(name: string): string {
        return name
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    }

    async createTenant(dto: CreateTenantDto) {
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

        try {
            return await this.prisma.$transaction(async (tx) => {
                const tenant = await tx.tenant.create({
                    data: {
                        name: dto.name,
                        domain: dto.subdomain,
                        slug: generatedSlug,
                        themeConfig: {
                            primaryColor: '#ea580c', // Strive Orange
                            logoUrl: null,
                            themeMode: 'dark',
                            radius: 0.5,
                            fontFamily: 'sans'
                        } as Prisma.InputJsonObject,
                        // Initialize default business rules upon creation
                        businessRules: {
                            allowTokenTopUps: false,
                            defaultCurrency: 'LKR',
                            tokenPrice: 1000
                        } as Prisma.InputJsonObject
                    }
                });

                await tx.membership.create({
                    data: {
                        userId: dto.ownerId,
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
     * Updates tenant settings (Theme, Taxes, Payment Gateways, Business Rules)
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
                ...(dto.name && {name: dto.name}),
                ...(dto.themeConfig && {themeConfig: dto.themeConfig as Prisma.InputJsonObject}),
                ...(dto.taxRules && {taxRules: dto.taxRules as Prisma.InputJsonObject}),
                ...(secureGatewayKeys && {gatewayKeys: secureGatewayKeys as Prisma.InputJsonObject}),
                // 🚀 NEW: Safely cast and store business rules
                ...(dto.businessRules && {businessRules: dto.businessRules as Prisma.InputJsonObject}),
            }
        });
    }
}