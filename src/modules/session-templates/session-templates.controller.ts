// src/modules/session-templates/session-templates.controller.ts
import { Body, Controller, Delete, Get, Headers, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SessionTemplatesService } from './session-templates.service';
import { CreateSessionTemplateDto, UpdateSessionTemplateDto } from './dto/session-template.dto';
import { SessionAuthGuard } from '../../common/guards/session-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { ApiTenantId } from '../../common/decorators/tenant-header.decorator';

@ApiTags('Session Template Management')
@ApiBearerAuth('Bearer-auth')
@Controller('session-templates')
@UseGuards(SessionAuthGuard, RolesGuard)
@ApiTenantId()
export class SessionTemplatesController {
    constructor(private readonly sessionTemplatesService: SessionTemplatesService) {}

    @Post()
    @Roles('TRAINER', 'MEMBER')
    @ApiOperation({ summary: 'Create a session template' })
    @ApiResponse({ status: HttpStatus.CREATED, description: 'Template created.' })
    async createTemplate(
        @Headers('X-Tenant-ID') tenantId: string,
        @Body() dto: CreateSessionTemplateDto,
    ) {
        return this.sessionTemplatesService.createTemplate(tenantId, dto);
    }

    @Get()
    @Roles('TRAINER', 'MEMBER')
    @ApiOperation({ summary: 'List all session templates' })
    async getTemplates(
        @Headers('X-Tenant-ID') tenantId: string,
    ) {
        return this.sessionTemplatesService.getTemplates(tenantId);
    }

    @Patch(':id')
    @Roles('TRAINER', 'MEMBER')
    @ApiOperation({ summary: 'Update a session template' })
    async updateTemplate(
        @Headers('X-Tenant-ID') tenantId: string,
        @Param('id') id: string,
        @Body() dto: UpdateSessionTemplateDto,
    ) {
        return this.sessionTemplatesService.updateTemplate(tenantId, id, dto);
    }

    @Delete(':id')
    @Roles('TRAINER', 'MEMBER')
    @ApiOperation({ summary: 'Delete a session template' })
    async deleteTemplate(
        @Headers('X-Tenant-ID') tenantId: string,
        @Param('id') id: string,
    ) {
        return this.sessionTemplatesService.deleteTemplate(tenantId, id);
    }
}
