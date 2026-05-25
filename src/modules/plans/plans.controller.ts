// src/modules/plans/plans.controller.ts
import {Body, Controller, Delete, Get, Headers, Param, Patch, Post, Query, UseGuards} from '@nestjs/common';
import {ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiQuery, ApiTags} from '@nestjs/swagger';
import {PlansService} from './plans.service';
import {CreatePlanDto, PlanResponseDto, UpdatePlanDto} from './dto/plan.dto';
import {SessionAuthGuard} from '../../common/guards/session-auth.guard';
import {RolesGuard} from '../../common/guards/roles.guard';
import {Roles} from '../../common/decorators/roles.decorator';
import {ApiTenantId} from '../../common/decorators/tenant-header.decorator';

@ApiTags('Plans & Catalog')
@ApiBearerAuth('Bearer-auth')
@ApiTenantId()
@UseGuards(SessionAuthGuard, RolesGuard)
@Controller('plans')
export class PlansController {
    constructor(private readonly plansService: PlansService) {
    }

    @Post()
    @Roles('ORG_ADMIN', 'MANAGER')
    @ApiOperation({summary: 'Create a new membership plan (Staff only)'})
    @ApiCreatedResponse({description: 'Plan created successfully.', type: PlanResponseDto})
    async createPlan(@Headers('X-Tenant-ID') tenantId: string, @Body() dto: CreatePlanDto) {
        return this.plansService.createPlan(tenantId, dto);
    }

    @Get()
    @ApiOperation({summary: 'List all plans for the tenant'})
    @ApiQuery({
        name: 'includeInactive',
        required: false,
        type: Boolean,
        description: 'Return archived plans (Admins only)'
    })
    @ApiOkResponse({description: 'Array of available plans.', type: [PlanResponseDto]})
    async getPlans(
        @Headers('X-Tenant-ID') tenantId: string,
        @Query('includeInactive') includeInactive?: string
    ) {
        const fetchAll = includeInactive === 'true';
        return this.plansService.getPlans(tenantId, fetchAll);
    }

    @Patch(':id')
    @Roles('ORG_ADMIN', 'MANAGER')
    @ApiOperation({summary: 'Update plan details or archive it'})
    @ApiOkResponse({description: 'Plan updated successfully.', type: PlanResponseDto})
    async updatePlan(
        @Headers('X-Tenant-ID') tenantId: string,
        @Param('id') id: string,
        @Body() dto: UpdatePlanDto
    ) {
        return this.plansService.updatePlan(tenantId, id, dto);
    }

    @Delete(':id')
    @Roles('ORG_ADMIN', 'MANAGER')
    @ApiOperation({summary: 'Delete a plan permanently'})
    @ApiOkResponse({description: 'Plan deleted.', type: PlanResponseDto})
    async deletePlan(
        @Headers('X-Tenant-ID') tenantId: string,
        @Param('id') id: string
    ) {
        return this.plansService.deletePlan(tenantId, id);
    }
}