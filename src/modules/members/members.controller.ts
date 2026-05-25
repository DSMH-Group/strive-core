// src/modules/members/members.controller.ts
import {Body, Controller, Delete, Get, Headers, HttpStatus, Param, Patch, Post, Query, UseGuards} from '@nestjs/common';
import {ApiBearerAuth, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags} from '@nestjs/swagger';
import {MembersService} from './members.service';
import {CreateMembershipDto, TransitionMembershipDto, UpdateMembershipDto} from './dto/members.dto';
import {CreateInvitationDto} from './dto/invitations.dto';
import {SessionAuthGuard} from '../../common/guards/session-auth.guard';
import {RolesGuard} from '../../common/guards/roles.guard';
import {Roles} from '../../common/decorators/roles.decorator';
import {CurrentUser} from '../../common/decorators/current-user.decorator';
import {MembershipStatus, Role} from '@prisma/client';

@ApiTags('Memberships & Lifecycle')
@ApiBearerAuth('Bearer-auth')
@UseGuards(SessionAuthGuard, RolesGuard)
@Controller('members')
export class MembersController {
    constructor(private readonly membersService: MembersService) {
    }

    // ====================================================================
    // STATIC ROUTES (Must come before /:id routes to prevent shadowing)
    // ====================================================================

    @Post()
    @Roles('ORG_ADMIN', 'MANAGER')
    @ApiOperation({summary: 'Link global user to tenant'})
    @ApiResponse({status: HttpStatus.CREATED, description: 'Membership created successfully.'})
    @ApiResponse({status: HttpStatus.CONFLICT, description: 'User already has a membership here.'})
    async createMembership(
        @Headers('X-Tenant-ID') tenantId: string,
        @Body() dto: CreateMembershipDto
    ) {
        return this.membersService.createMembership(tenantId, dto);
    }

    @Get()
    @Roles('ORG_ADMIN', 'MANAGER', 'TRAINER')
    @ApiOperation({summary: 'List tenant members'})
    @ApiQuery({name: 'status', enum: MembershipStatus, required: false})
    @ApiQuery({name: 'role', enum: Role, required: false})
    @ApiResponse({status: HttpStatus.OK, description: 'List of members returned.'})
    async getMembers(
        @Headers('X-Tenant-ID') tenantId: string,
        @Query('status') status?: MembershipStatus,
        @Query('role') role?: Role,
    ) {
        return this.membersService.getMembers(tenantId, status, role);
    }

    @Get('me')
    @Roles('MEMBER', 'ORG_ADMIN', 'MANAGER', 'TRAINER')
    @ApiOperation({summary: 'Get my specific gym membership'})
    @ApiResponse({status: HttpStatus.OK, description: 'Current user membership data.'})
    @ApiResponse({status: HttpStatus.NOT_FOUND, description: 'No active membership found for this gym.'})
    async getMyMembership(
        @Headers('X-Tenant-ID') tenantId: string,
        @CurrentUser() currentUser: any
    ) {
        return this.membersService.getMyMembership(tenantId, currentUser.id);
    }

    @Post('invites')
    @Roles('ORG_ADMIN', 'MANAGER')
    @ApiOperation({summary: 'Send a gym invitation to a new or existing user'})
    @ApiResponse({status: HttpStatus.CREATED, description: 'Invitation dispatched (SMS/Email).'})
    async inviteUser(
        @Headers('X-Tenant-ID') tenantId: string,
        @Body() dto: CreateInvitationDto
    ) {
        return this.membersService.inviteUser(tenantId, dto);
    }

    @Get('invites')
    @Roles('ORG_ADMIN', 'MANAGER')
    @ApiOperation({summary: 'List all pending invitations for the gym'})
    @ApiResponse({status: HttpStatus.OK, description: 'List of pending invitations.'})
    async getPendingInvites(@Headers('X-Tenant-ID') tenantId: string) {
        return this.membersService.getPendingInvites(tenantId);
    }

    // ====================================================================
    // DYNAMIC ROUTES (Parameterized routes)
    // ====================================================================

    @Post('invites/:inviteId/resend')
    @Roles('ORG_ADMIN', 'MANAGER')
    @ApiOperation({summary: 'Resend an invitation notification'})
    @ApiParam({name: 'inviteId', type: 'string', description: 'UUID of the pending invitation'})
    @ApiResponse({status: HttpStatus.OK, description: 'Invitation resent successfully.'})
    @ApiResponse({status: HttpStatus.NOT_FOUND, description: 'Invitation not found.'})
    async resendInvite(
        @Headers('X-Tenant-ID') tenantId: string,
        @Param('inviteId') inviteId: string
    ) {
        return this.membersService.resendInvite(tenantId, inviteId);
    }

    @Delete('invites/:inviteId')
    @Roles('ORG_ADMIN', 'MANAGER')
    @ApiOperation({summary: 'Revoke a pending invitation'})
    @ApiParam({name: 'inviteId', type: 'string', description: 'UUID of the pending invitation'})
    @ApiResponse({status: HttpStatus.OK, description: 'Invitation revoked.'})
    async revokeInvite(
        @Headers('X-Tenant-ID') tenantId: string,
        @Param('inviteId') inviteId: string
    ) {
        return this.membersService.revokeInvite(tenantId, inviteId);
    }

    @Get(':id')
    @Roles('ORG_ADMIN', 'MANAGER', 'TRAINER', 'MEMBER')
    @ApiOperation({summary: 'Get specific membership profile'})
    @ApiParam({name: 'id', type: 'string', description: 'UUID of the membership'})
    @ApiResponse({status: HttpStatus.OK, description: 'Membership data retrieved.'})
    @ApiResponse({status: HttpStatus.FORBIDDEN, description: 'Insufficient permissions.'})
    async getMemberById(
        @Headers('X-Tenant-ID') tenantId: string,
        @Param('id') id: string,
        @CurrentUser() currentUser: any
    ) {
        return this.membersService.getMemberById(tenantId, id, currentUser);
    }

    @Patch(':id')
    @Roles('ORG_ADMIN', 'MANAGER')
    @ApiOperation({summary: 'Update member role or status'})
    @ApiParam({name: 'id', type: 'string', description: 'UUID of the membership'})
    @ApiResponse({status: HttpStatus.OK, description: 'Membership updated.'})
    async updateMembership(
        @Headers('X-Tenant-ID') tenantId: string,
        @Param('id') id: string,
        @Body() dto: UpdateMembershipDto
    ) {
        return this.membersService.updateMembership(tenantId, id, dto);
    }

    @Post(':id/transition')
    @Roles('ORG_ADMIN', 'MANAGER', 'SYSTEM_ADMIN')
    @ApiOperation({summary: 'Trigger State Machine Transition'})
    @ApiParam({name: 'id', type: 'string', description: 'UUID of the membership'})
    @ApiResponse({status: HttpStatus.OK, description: 'State transition applied.'})
    @ApiResponse({status: HttpStatus.CONFLICT, description: 'Invalid state transition.'})
    async transitionState(
        @Headers('X-Tenant-ID') tenantId: string,
        @Param('id') id: string,
        @Body() dto: TransitionMembershipDto
    ) {
        return this.membersService.transitionState(tenantId, id, dto);
    }
}