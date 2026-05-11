// src/modules/documents/documents.controller.ts
import { Controller, Get, Post, Body, Headers, UseGuards, Query, ForbiddenException } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { GetUploadUrlDto } from './dto/upload-request.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import {ApiTenantId} from "../../common/decorators/tenant-header.decorator";

@Controller('files')
@ApiTenantId()
@UseGuards(JwtAuthGuard, RolesGuard)
export class DocumentsController {
    constructor(private readonly documentsService: DocumentsService) {}

    @Post('upload-url')
    @Roles('ORG_ADMIN', 'MANAGER', 'TRAINER', 'MEMBER')
    async getUploadUrl(
        @Headers('X-Tenant-ID') tenantId: string,
        @CurrentUser('sub') userId: string,
        @Body() dto: GetUploadUrlDto,
    ) {
        return this.documentsService.generateUploadUrl(tenantId, userId, dto);
    }

    @Get()
    @Roles('ORG_ADMIN', 'MANAGER', 'MEMBER')
    async getDocuments(
        @Headers('X-Tenant-ID') tenantId: string,
        @CurrentUser() user: any,
        @Query('membershipId') membershipId: string,
    ) {
        // RBAC: Members can only see their own documents
        if (user.globalRole === 'MEMBER' && !membershipId) {
            // Logic to resolve own membershipId would go here
        }

        return this.documentsService.listMemberDocuments(tenantId, membershipId);
    }
}