// src/modules/tenants/tenants.controller.ts
import {Body, Controller, Get, Headers, HttpStatus, Param, Patch, Post, Query, UseGuards} from '@nestjs/common';
import {ApiBearerAuth, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags} from '@nestjs/swagger';
import {TenantsService} from './tenants.service';
import {CreateTenantDto} from './dto/create-tenant.dto';
import {UpdateTenantDto} from './dto/update-tenant.dto';
import {JwtAuthGuard} from '../../common/guards/jwt-auth.guard';
import {RolesGuard} from '../../common/guards/roles.guard';
import {Roles} from '../../common/decorators/roles.decorator';
import {ApiTenantId} from "../../common/decorators/tenant-header.decorator";

@ApiTags('Tenants (B2B Config)')
@Controller('tenants') // 'api/v1' is handled by the global prefix
export class TenantsController {
    constructor(private readonly tenantsService: TenantsService) {
    }

    @Get()
    @ApiOperation({summary: 'Explore and search all partner spaces'})
    @ApiQuery({name: 'search', required: false, type: String, description: 'Search by gym name or location'})
    @ApiQuery({name: 'vertical', required: false, type: String, description: 'Filter by fitness vertical/category'})
    @ApiResponse({status: HttpStatus.OK, description: 'List of matching partner spaces returned.'})
    async exploreTenants(
        @Query('search') search?: string,
        @Query('vertical') vertical?: string,
        @Headers('Authorization') authHeader?: string, // 👈 Optional authorization context header for membership mapping
    ) {
        // Extract raw bearer token claims if present to pass down to our discovery mapping layer
        const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.substring(7) : undefined;
        return this.tenantsService.exploreTenants({search, vertical}, token);
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('JWT-auth')
    @ApiOperation({summary: 'Provision a new Gym Environment'})
    @ApiResponse({status: HttpStatus.CREATED, description: 'Tenant created successfully.'})
    async createTenant(@Body() dto: CreateTenantDto) {
        return this.tenantsService.createTenant(dto);
    }

    @Get(':tenantId')
    // No Auth Guards here! This is public so Next.js can fetch SSR themes
    @ApiTenantId()
    @ApiOperation({summary: 'Get Public Theme Config'})
    @ApiParam({name: 'tenantId', description: 'UUID of the tenant'})
    @ApiResponse({status: HttpStatus.OK, description: 'Public tenant data retrieved.'})
    async getPublicConfig(@Param('tenantId') tenantId: string) {
        return this.tenantsService.getPublicConfig(tenantId);
    }

    @Patch()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @ApiTenantId()
    @Roles('ORG_ADMIN') // Only the gym owner/admin can change billing keys
    @ApiBearerAuth('JWT-auth')
    @ApiOperation({summary: 'Update Config (Tax, Gateway, Theme)'})
    @ApiResponse({status: HttpStatus.OK, description: 'Tenant configuration updated.'})
    async updateConfig(
        @Headers('X-Tenant-ID') tenantId: string,
        @Body() dto: UpdateTenantDto
    ) {
        // Because of TenantMiddleware & AuthGuards, we guarantee that the user
        // calling this has ORG_ADMIN rights for the tenantId in the header.
        return this.tenantsService.updateTenantConfig(tenantId, dto);
    }
}