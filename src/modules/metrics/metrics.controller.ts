// src/modules/metrics/metrics.controller.ts
import { Controller, Get, Post, Body, Query, UseGuards, Headers } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { CreateMetricDto, HealthSyncDto } from './dto/metrics.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import {ApiTenantId} from "../../common/decorators/tenant-header.decorator";

@Controller('metrics')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTenantId()
export class MetricsController {
    constructor(private readonly metricsService: MetricsService) {}

    @Post()
    @Roles('TRAINER', 'MEMBER')
    async logMetric(
        @Headers('X-Tenant-ID') tenantId: string,
        @CurrentUser('sub') userId: string,
        @Body() dto: CreateMetricDto,
    ) {
        return this.metricsService.logMetric(tenantId, userId, dto);
    }

    @Get()
    @Roles('TRAINER', 'MEMBER')
    async getMetrics(
        @Headers('X-Tenant-ID') tenantId: string,
        @CurrentUser('sub') userId: string,
        @Query('metricType') metricType?: string,
    ) {
        return this.metricsService.getMetrics(tenantId, userId, metricType);
    }

    @Post('health/sync')
    @Roles('MEMBER')
    async syncHealth(
        @Headers('X-Tenant-ID') tenantId: string,
        @CurrentUser('sub') userId: string,
        @Body() dto: HealthSyncDto,
    ) {
        return this.metricsService.syncHealthData(tenantId, userId, dto);
    }
}