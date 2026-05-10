// src/modules/members/members.controller.ts
import { Controller, Get, Post, Patch, Body, Param, Headers, Query, UseGuards, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiHeader, ApiQuery } from '@nestjs/swagger';
import { MembersService } from './members.service';
import { CreateMembershipDto, UpdateMembershipDto, TransitionMembershipDto } from './dto/members.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

@ApiTags('Memberships & Lifecycle')
@ApiBearerAuth('JWT-auth')
@ApiHeader({ name: 'X-Tenant-ID', required: true })
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
    @ApiQuery({ name: 'status', required: false })
    @ApiQuery({ name: 'role', required: false })
    async getMembers(
        @Headers('X-Tenant-ID') tenantId: string,
        @Query('status') status?: string,
        @Query('role') role?: string,
        @CurrentUser() currentUser?: any
    ) {
        return this.membersService.getMembers(tenantId, status, role, currentUser);
    }

    @Get('me')
    @Roles('MEMBER')
    @ApiOperation({ summary: 'Get my specific gym membership' })
    async getMyMembership(
        @Headers('X-Tenant-ID') tenantId: string,
        @CurrentUser() currentUser: any
    ) {
        // Finds the membership where userId matches the JWT subject
        // Implementation typically handled via a unique compound key lookup in the service
        return this.membersService.getMembers(tenantId, undefined, undefined, currentUser);
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