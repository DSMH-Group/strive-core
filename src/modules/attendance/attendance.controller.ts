// src/modules/attendance/attendance.controller.ts
import {Body, Controller, Get, Headers, Param, Patch, Post, Query, UseGuards} from '@nestjs/common';
import {ApiBearerAuth, ApiTags} from '@nestjs/swagger';
import {AttendanceService} from './attendance.service';
import {AttendanceQueryDto, CreateAttendanceDto, UpdateAttendanceDto} from './dto/attendance.dto';
import {SessionAuthGuard} from '../../common/guards/session-auth.guard';
import {RolesGuard} from '../../common/guards/roles.guard';
import {Roles} from '../../common/decorators/roles.decorator';
import {ApiTenantId} from "../../common/decorators/tenant-header.decorator";

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
    @UseGuards(SessionAuthGuard, RolesGuard)
    @Roles('ORG_ADMIN', 'MANAGER')
    @ApiBearerAuth('Bearer-auth')
    
    async getHistory(
        @Headers('X-Tenant-ID') tenantId: string,
        @Query() query: AttendanceQueryDto
    ) {
        return this.attendanceService.getHistory(query.startDate, query.endDate);
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