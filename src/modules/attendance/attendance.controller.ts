// src/modules/attendance/attendance.controller.ts
import {Body, Controller, Get, Headers, Param, Patch, Post, Query, UseGuards} from '@nestjs/common';
import {ApiBearerAuth, ApiTags} from '@nestjs/swagger';
import {AttendanceService} from './attendance.service';
import {CreateAttendanceDto, UpdateAttendanceDto} from './dto/attendance.dto';
import {SessionAuthGuard} from '../../common/guards/session-auth.guard';
import {RolesGuard} from '../../common/guards/roles.guard';
import {Roles} from '../../common/decorators/roles.decorator';
import {ApiTenantId} from "../../common/decorators/tenant-header.decorator";
import {CurrentUser} from "../../common/decorators/current-user.decorator";

@ApiTags('Attendance & Ingress')
@ApiTenantId()
@Controller('attendances')
export class AttendanceController {
    constructor(private readonly attendanceService: AttendanceService) {}

    @Post()
    @UseGuards(SessionAuthGuard, RolesGuard)
    @Roles('ORG_ADMIN', 'MANAGER', 'TRAINER') // Add IoT_DEVICE_TOKEN logic to your Guard
    @ApiBearerAuth('Bearer-auth')
    
    async checkIn(@Headers('X-Tenant-ID') tenantId: string, @Body() dto: CreateAttendanceDto) {
        return this.attendanceService.checkIn(dto);
    }

    @Get()
    @UseGuards(SessionAuthGuard) // 🚀 Removed RolesGuard so Members can enter
    @ApiBearerAuth('Bearer-auth')
    async getHistory(
        @Headers('X-Tenant-ID') tenantId: string,
        @CurrentUser() user: any,
        @Query() query: any // Replace 'any' with your AttendanceQueryDto
    ) {
        // 1. Check if the user has Admin/Manager privileges for this specific gym
        const isAdmin = user.globalRole === 'SYSTEM_ADMIN' ||
            ['ORG_ADMIN', 'MANAGER'].includes(user.tenantRoles?.[tenantId]);

        // 2. Build the secure filter
        const filter = {
            startDate: query.startDate,
            endDate: query.endDate,
            // If Admin and they asked for a specific member, grant it
            ...(isAdmin && query.membershipId ? {membershipId: query.membershipId} : {}),
            // If NOT an admin, completely ignore their query requests and force their own User ID
            ...(!isAdmin ? {userId: user.id} : {})
        };

        return this.attendanceService.getHistory(tenantId, filter);
    }

    @Patch(':id')
    @UseGuards(SessionAuthGuard, RolesGuard)
    @Roles('ORG_ADMIN', 'MANAGER', 'TRAINER')
    @ApiBearerAuth('Bearer-auth')
    
    async checkOut(
        @Param('id') id: string,
        @Headers('X-Tenant-ID') tenantId: string,
        @Body() dto: UpdateAttendanceDto
    ) {
        return this.attendanceService.checkOut(id, dto);
    }
}