// src/modules/scheduling/scheduling.controller.ts
import {Body, Controller, Delete, Get, Headers, Param, Post, Request, UseGuards} from '@nestjs/common';
import {ApiBearerAuth, ApiOperation, ApiTags} from '@nestjs/swagger';
import {SchedulingService} from './scheduling.service';
import {CreateResourceDto} from './dto/resource.dto';
import {CreateBookingDto} from './dto/booking.dto';
import {SessionAuthGuard} from '../../common/guards/session-auth.guard';
import {RolesGuard} from '../../common/guards/roles.guard';
import {Roles} from '../../common/decorators/roles.decorator';
import {ApiTenantId} from "../../common/decorators/tenant-header.decorator";

@ApiTags('Resources & Scheduling')
@ApiBearerAuth('Bearer-auth')
@ApiTenantId()

@UseGuards(SessionAuthGuard, RolesGuard)
@Controller('scheduling')
export class SchedulingController {
    constructor(private readonly schedulingService: SchedulingService) {}

    @Post('resources')
    @Roles('ORG_ADMIN', 'MANAGER')
    @ApiOperation({ summary: 'Create a schedulable resource (Staff only)' })
    async createResource(@Headers('X-Tenant-ID') tenantId: string, @Body() dto: CreateResourceDto) {
        return this.schedulingService.createResource(tenantId, dto);
    }

    @Get('resources')
    @ApiOperation({ summary: 'List all resources for the tenant' })
    async getResources(@Headers('X-Tenant-ID') tenantId: string) {
        return this.schedulingService.getResources(tenantId);
    }

    @Post('bookings')
    @ApiOperation({ summary: 'Book a resource slot' })
    async createBooking(@Headers('X-Tenant-ID') tenantId: string, @Body() dto: CreateBookingDto) {
        return this.schedulingService.createBooking(tenantId, dto);
    }

    @Delete('bookings/:id')
    @ApiOperation({ summary: 'Cancel a reservation' })
    async cancelBooking(
        @Headers('X-Tenant-ID') tenantId: string,
        @Param('id') id: string,
        @Request() req: any,
    ) {
        const user = req.user;
        // Check if user is Staff for the specific tenant
        const isStaff = ['ORG_ADMIN', 'MANAGER', 'TRAINER'].includes(user.tenantRoles?.[tenantId]);
        return this.schedulingService.cancelBooking(tenantId, id, user.id, isStaff);
    }
}