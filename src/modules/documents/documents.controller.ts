// src/modules/documents/documents.controller.ts
import { Controller, Get, Post, Body, UseGuards, Query, ForbiddenException } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { GetUploadUrlDto } from './dto/upload-request.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { ApiTenantId } from "../../common/decorators/tenant-header.decorator";
// Notice: We don't even need to import 'Headers' from @nestjs/common anymore!

@Controller('files')
@ApiTenantId() // Keeps our Swagger docs accurate
@UseGuards(JwtAuthGuard, RolesGuard)
export class DocumentsController {
    constructor(private readonly documentsService: DocumentsService) {}

    @Post('upload-url')
    @Roles('ORG_ADMIN', 'MANAGER', 'TRAINER', 'MEMBER')
    async getUploadUrl(
        @CurrentUser('id') userId: string,
        @Body() dto: GetUploadUrlDto,
    ) {
        // CLEAN: No more tenantId plumbing. The service grabs it securely.
        return this.documentsService.generateUploadUrl(userId, dto);
    }

    @Get()
    @Roles('ORG_ADMIN', 'MANAGER', 'MEMBER')
    async getDocuments(
        @CurrentUser() user: any,
        @Query('membershipId') requestedMembershipId?: string,
    ) {
        let targetMembershipId = requestedMembershipId;

        // RBAC Enforcement & Security
        if (user.globalRole === 'MEMBER') {
            // A member is only allowed to see their own documents.
            // Instead of trusting the query param, we should resolve their membershipId
            // directly using their user.id and the invisible tenant proxy.

            // TODO: Call a helper method like `this.membersService.getIdByUser(user.id)`
            // targetMembershipId = resolvedId;

            if (!targetMembershipId) {
                throw new ForbiddenException('Unable to resolve active gym membership.');
            }
        } else if (!targetMembershipId) {
            // Managers MUST provide an ID so they don't accidentally load
            // the entire gym's document repository at once.
            throw new ForbiddenException('Staff must provide a valid membershipId.');
        }

        // CLEAN: No more tenantId plumbing.
        return this.documentsService.listMemberDocuments(targetMembershipId);
    }
}