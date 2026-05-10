// src/modules/attendance/attendance.controller.ts
import { Controller, Get, Post, Patch, Body, Param, Headers, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiHeader } from '@nestjs/swagger';
import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto, UpdateAttendanceDto, AttendanceQueryDto } from './dto/attendance.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@ApiTags('Attendance & Ingress')
@Controller('attendances')
export class AttendanceController {
    constructor(private readonly attendanceService: AttendanceService) {}

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ORG_ADMIN', 'MANAGER', 'TRAINER') // Add IoT_DEVICE_TOKEN logic to your Guard
    @ApiBearerAuth('JWT-auth')
    @ApiHeader({ name: 'X-Tenant-ID', required: true })
    async checkIn(@Headers('X-Tenant-ID') tenantId: string, @Body() dto: CreateAttendanceDto) {
        return this.attendanceService.checkIn(tenantId, dto);
    }

    @Get()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ORG_ADMIN', 'MANAGER')
    @ApiBearerAuth('JWT-auth')
    @ApiHeader({ name: 'X-Tenant-ID', required: true })
    async getHistory(
        @Headers('X-Tenant-ID') tenantId: string,
        @Query() query: AttendanceQueryDto
    ) {
        return this.attendanceService.getHistory(tenantId, query.startDate, query.endDate);
    }

    @Patch(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ORG_ADMIN', 'MANAGER', 'TRAINER')
    @ApiBearerAuth('JWT-auth')
    @ApiHeader({ name: 'X-Tenant-ID', required: true })
    async checkOut(
        @Param('id') id: string,
        @Headers('X-Tenant-ID') tenantId: string,
        @Body() dto: UpdateAttendanceDto
    ) {
        return this.attendanceService.checkOut(id, tenantId, dto);
    }
}