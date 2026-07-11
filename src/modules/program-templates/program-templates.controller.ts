// src/modules/program-templates/program-templates.controller.ts
import { Body, Controller, Delete, Get, Headers, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProgramTemplatesService } from './program-templates.service';
import { CreateProgramTemplateDto, UpdateProgramTemplateDto } from './dto/program-templates.dto';
import { SessionAuthGuard } from '../../common/guards/session-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@ApiTags('Workout Program Templates')
@ApiBearerAuth('Bearer-auth')
@UseGuards(SessionAuthGuard, RolesGuard)
@Controller('program-templates')
export class ProgramTemplatesController {
    constructor(private readonly templatesService: ProgramTemplatesService) {}

    @Get()
    @ApiOperation({ summary: 'Get all program templates for the current tenant' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Templates list retrieved.' })
    async getTemplates(@Headers('X-Tenant-ID') tenantId: string) {
        return this.templatesService.getTemplates(tenantId);
    }

    @Post()
    @Roles('ORG_ADMIN', 'MANAGER', 'TRAINER')
    @ApiOperation({ summary: 'Create a new program template' })
    @ApiResponse({ status: HttpStatus.CREATED, description: 'Template created successfully.' })
    async createTemplate(
        @Headers('X-Tenant-ID') tenantId: string,
        @Body() dto: CreateProgramTemplateDto
    ) {
        return this.templatesService.createTemplate(tenantId, dto);
    }

    @Patch(':id')
    @Roles('ORG_ADMIN', 'MANAGER', 'TRAINER')
    @ApiOperation({ summary: 'Update an existing program template' })
    @ApiParam({ name: 'id', type: 'string', description: 'Template ID' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Template updated successfully.' })
    async updateTemplate(
        @Headers('X-Tenant-ID') tenantId: string,
        @Param('id') id: string,
        @Body() dto: UpdateProgramTemplateDto
    ) {
        return this.templatesService.updateTemplate(tenantId, id, dto);
    }

    @Delete(':id')
    @Roles('ORG_ADMIN', 'MANAGER', 'TRAINER')
    @ApiOperation({ summary: 'Delete a program template' })
    @ApiParam({ name: 'id', type: 'string', description: 'Template ID' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Template deleted.' })
    async deleteTemplate(
        @Headers('X-Tenant-ID') tenantId: string,
        @Param('id') id: string
    ) {
        return this.templatesService.deleteTemplate(tenantId, id);
    }
}
