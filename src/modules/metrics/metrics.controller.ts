import {Body, Controller, Get, Headers, HttpStatus, Post, Query, UseGuards} from '@nestjs/common';
import {ApiBearerAuth, ApiOperation, ApiQuery, ApiResponse, ApiTags} from '@nestjs/swagger';
import {MetricsService} from './metrics.service';
import {CreateMetricDto, HealthSyncDto} from './dto/metrics.dto';
import {SessionAuthGuard} from '../../common/guards/session-auth.guard';
import {RolesGuard} from '../../common/guards/roles.guard';
import {Roles} from '../../common/decorators/roles.decorator';
import {CurrentUser} from '../../common/decorators/current-user.decorator';
import {ApiTenantId} from "../../common/decorators/tenant-header.decorator";

@ApiTags('Metrics & Health Tracking')
@ApiBearerAuth('Bearer-auth') // 💡 Tells Swagger this controller requires the Bearer token
@Controller('metrics')
@UseGuards(SessionAuthGuard, RolesGuard)
@ApiTenantId() // 💡 Your custom decorator for the header
export class MetricsController {
    constructor(private readonly metricsService: MetricsService) {
    }

    @Post()
    @Roles('ORG_ADMIN', 'MANAGER', 'TRAINER', 'MEMBER')
    @ApiOperation({
        summary: 'Log a performance metric',
        description: 'Allows members to log personal stats (weight, PRs) or trainers to log client stats.'
    })
    @ApiResponse({status: HttpStatus.CREATED, description: 'Metric recorded successfully.'})
    @ApiResponse({status: HttpStatus.FORBIDDEN, description: 'Insufficient permissions or invalid Tenant ID.'})
    async logMetric(
        @Headers('X-Tenant-ID') tenantId: string,
        @CurrentUser('id') userId: string,
        @Body() dto: CreateMetricDto,
    ) {
        return this.metricsService.logMetric(tenantId, userId, dto);
    }

    @Get('session-types')
    @Roles('ORG_ADMIN', 'MANAGER', 'TRAINER', 'MEMBER')
    @ApiOperation({
        summary: 'Get distinct logged session types',
        description: 'Fetch all unique session types recorded in metrics for this tenant.'
    })
    async getSessionTypes(
        @Headers('X-Tenant-ID') tenantId: string,
    ) {
        return this.metricsService.getSessionTypes(tenantId);
    }

    @Get()
    @Roles('ORG_ADMIN', 'MANAGER', 'TRAINER', 'MEMBER')
    @ApiOperation({
        summary: 'Retrieve metric history',
        description: 'Fetch time-series data for specific metric types like WEIGHT or ARCHERY_SCORE.'
    })
    @ApiQuery({
        name: 'metricType',
        required: false,
        example: 'WEIGHT',
        description: 'Filter by type of metric'
    })
    @ApiResponse({status: HttpStatus.OK, description: 'Returns a list of metrics.'})
    async getMetrics(
        @Headers('X-Tenant-ID') tenantId: string,
        @CurrentUser('id') userId: string,
        @Query('metricType') metricType?: string,
    ) {
        return this.metricsService.getMetrics(tenantId, userId, metricType);
    }

    @Post('health/sync')
    @Roles('MEMBER')
    @ApiOperation({
        summary: 'Sync wearable health data',
        description: 'Bulk upload data points from Apple Health or Google Health Connect.'
    })
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: 'Wearable data synced successfully.',
        schema: {example: {processed: 150, ignored: 5}}
    })
    async syncHealth(
        @Headers('X-Tenant-ID') tenantId: string,
        @CurrentUser('id') userId: string,
        @Body() dto: HealthSyncDto,
    ) {
        return this.metricsService.syncHealthData(tenantId, userId, dto);
    }
}