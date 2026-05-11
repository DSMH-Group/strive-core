// src/modules/comms-audit/comms-audit.controller.ts
import { Controller, Get, Post, Body, Query, Headers, UseGuards } from '@nestjs/common';
import { CommsAuditService } from './comms-audit.service';
import { BroadcastDto } from './dto/broadcast.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import {ApiTenantId} from "../../common/decorators/tenant-header.decorator";

@Controller() // Endpoints mapped via table: /api/v1/...
@ApiTenantId()
@UseGuards(JwtAuthGuard, RolesGuard)
export class CommsAuditController {
    constructor(private readonly commsService: CommsAuditService) {}

    @Post('messages/broadcast')
    @Roles('ORG_ADMIN', 'MANAGER')
    async broadcast(
        @Headers('X-Tenant-ID') tenantId: string,
        @Body() dto: BroadcastDto,
    ) {
        return this.commsService.broadcastMessage(tenantId, dto);
    }

    @Get('analytics/leaderboard')
    async getLeaderboard(
        @Headers('X-Tenant-ID') tenantId: string,
        @Query('metricType') metricType: string,
    ) {
        return this.commsService.getLeaderboard(tenantId, metricType);
    }

    @Get('audits')
    @Roles('ORG_ADMIN', 'SYSTEM_ADMIN')
    async getAudits(@Headers('X-Tenant-ID') tenantId: string) {
        return this.commsService.getAuditLogs(tenantId);
    }
}