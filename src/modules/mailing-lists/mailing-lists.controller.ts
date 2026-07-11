import { Body, Controller, Delete, Get, Headers, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { MailingListsService } from './mailing-lists.service';
import { CreateMailingListDto, UpdateMailingListDto } from './dto/mailing-lists.dto';
import { SessionAuthGuard } from '../../common/guards/session-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { ApiTenantId } from '../../common/decorators/tenant-header.decorator';

@Controller('mailing-lists')
@ApiTenantId()
@UseGuards(SessionAuthGuard, RolesGuard)
export class MailingListsController {
    constructor(private readonly mailingListsService: MailingListsService) {}

    @Post()
    @Roles('ORG_ADMIN', 'MANAGER')
    async create(
        @Headers('X-Tenant-ID') tenantId: string,
        @Body() dto: CreateMailingListDto
    ) {
        return this.mailingListsService.create(tenantId, dto);
    }

    @Get()
    @Roles('ORG_ADMIN', 'MANAGER', 'TRAINER')
    async findAll(@Headers('X-Tenant-ID') tenantId: string) {
        return this.mailingListsService.findAll(tenantId);
    }

    @Get(':id')
    @Roles('ORG_ADMIN', 'MANAGER', 'TRAINER')
    async findOne(
        @Headers('X-Tenant-ID') tenantId: string,
        @Param('id') id: string
    ) {
        return this.mailingListsService.findOne(tenantId, id);
    }

    @Patch(':id')
    @Roles('ORG_ADMIN', 'MANAGER')
    async update(
        @Headers('X-Tenant-ID') tenantId: string,
        @Param('id') id: string,
        @Body() dto: UpdateMailingListDto
    ) {
        return this.mailingListsService.update(tenantId, id, dto);
    }

    @Delete(':id')
    @Roles('ORG_ADMIN', 'MANAGER')
    async remove(
        @Headers('X-Tenant-ID') tenantId: string,
        @Param('id') id: string
    ) {
        return this.mailingListsService.remove(tenantId, id);
    }
}
