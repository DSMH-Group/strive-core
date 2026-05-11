// src/modules/members/members.controller.ts
import { Controller, Get, Post, Patch, Body, Param, Headers, Query, UseGuards, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiHeader, ApiQuery } from '@nestjs/swagger';
import { MembersService } from './members.service';
import { CreateMembershipDto, UpdateMembershipDto, TransitionMembershipDto } from './dto/members.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { MembershipStatus, Role } from '@prisma/client';
import {ApiTenantId} from "../../common/decorators/tenant-header.decorator"; // <-- Import strict Prisma Enums

@ApiTags('Memberships & Lifecycle')
@ApiBearerAuth('JWT-auth')

@ApiTenantId()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('members') // Routed under /api/v1/members globally
export class MembersController {
    constructor(private readonly membersService: MembersService) {}

    @Post()
    @Roles('ORG_ADMIN', 'MANAGER')
    @ApiOperation({ summary: 'Link global user to tenant' })
    @ApiResponse({ status: HttpStatus.CREATED, description: 'Membership created.' })
    async createMembership(
        @Headers('X-Tenant-ID') tenantId: string,
        @Body() dto: CreateMembershipDto
    ) {
        return this.membersService.createMembership(tenantId, dto);
    }

    @Get()
    @Roles('ORG_ADMIN', 'MANAGER', 'TRAINER')
    @ApiOperation({ summary: 'List tenant members' })
    @ApiQuery({ name: 'status', enum: MembershipStatus, required: false }) // Populates Swagger dropdown
    @ApiQuery({ name: 'role', enum: Role, required: false })               // Populates Swagger dropdown
    async getMembers(
        @Headers('X-Tenant-ID') tenantId: string,
        @Query('status') status?: MembershipStatus, // Strictly typed
        @Query('role') role?: Role,                 // Strictly typed
    ) {
        // FIX: Now correctly passes exactly 3 arguments
        return this.membersService.getMembers(tenantId, status, role);
    }

    @Get('me')
    @Roles('MEMBER', 'ORG_ADMIN', 'MANAGER')
    @ApiOperation({ summary: 'Get my specific gym membership' })
    async getMyMembership(
        @Headers('X-Tenant-ID') tenantId: string,
        @CurrentUser() currentUser: any
    ) {
        // FIX: Call a dedicated service method utilizing the user's Keycloak ID (sub)
        return this.membersService.getMyMembership(tenantId, currentUser.sub);
    }

    @Get(':id')
    @Roles('ORG_ADMIN', 'MANAGER', 'TRAINER', 'MEMBER')
    @ApiOperation({ summary: 'Get specific membership profile' })
    async getMemberById(
        @Headers('X-Tenant-ID') tenantId: string,
        @Param('id') id: string,
        @CurrentUser() currentUser: any
    ) {
        return this.membersService.getMemberById(tenantId, id, currentUser);
    }

    @Patch(':id')
    @Roles('ORG_ADMIN', 'MANAGER')
    @ApiOperation({ summary: 'Update member role or status' })
    async updateMembership(
        @Headers('X-Tenant-ID') tenantId: string,
        @Param('id') id: string,
        @Body() dto: UpdateMembershipDto
    ) {
        return this.membersService.updateMembership(tenantId, id, dto);
    }

    @Post(':id/transition')
    @Roles('ORG_ADMIN', 'MANAGER', 'SYSTEM_ADMIN')
    @ApiOperation({ summary: 'Trigger State Machine Transition' })
    async transitionState(
        @Headers('X-Tenant-ID') tenantId: string,
        @Param('id') id: string,
        @Body() dto: TransitionMembershipDto
    ) {
        return this.membersService.transitionState(tenantId, id, dto);
    }
}