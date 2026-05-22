// src/modules/billing/billing.controller.ts
import {Body, Controller, Get, Headers, Post, Query, UseGuards} from '@nestjs/common';
import {ApiBearerAuth, ApiOperation, ApiTags} from '@nestjs/swagger';
import {BillingService} from './billing.service';
import {CreateInvoiceDto, ManualPaymentDto} from './dto/billing.dto';
import {SessionAuthGuard} from '../../common/guards/session-auth.guard';
import {RolesGuard} from '../../common/guards/roles.guard';
import {Roles} from '../../common/decorators/roles.decorator';
import {CurrentUser} from '../../common/decorators/current-user.decorator';

@ApiTags('Billing & Ledger')
@Controller('billing')
export class BillingController {
    constructor(private readonly billingService: BillingService) {
    }

    @Post('invoices')
    @UseGuards(SessionAuthGuard, RolesGuard)
    @Roles('ORG_ADMIN', 'MANAGER')
    @ApiBearerAuth('Bearer-auth')
    async createInvoice(@Headers('X-Tenant-ID') tenantId: string, @Body() dto: CreateInvoiceDto) {
        return this.billingService.createInvoice(tenantId, dto);
    }

    @Get('invoices')
    @UseGuards(SessionAuthGuard)
    @ApiBearerAuth('Bearer-auth')
    async getInvoices(
        @Headers('X-Tenant-ID') tenantId: string,
        @CurrentUser() user: any,
        @Query('membershipId') membershipId?: string
    ) {
        // MEMBERS can only see their own invoices
        const targetId = user.globalRole !== 'SYSTEM_ADMIN' && !user.tenantRoles?.[tenantId] ? user.id : membershipId;
        return this.billingService.getInvoices(tenantId, targetId);
    }

    @Post('payments/manual')
    @UseGuards(SessionAuthGuard, RolesGuard)
    @Roles('ORG_ADMIN', 'MANAGER')
    @ApiBearerAuth('Bearer-auth')
    async manualPayment(
        @Headers('X-Tenant-ID') tenantId: string,
        @Body() dto: ManualPaymentDto,
        @CurrentUser() user: any
    ) {
        return this.billingService.processManualPayment(tenantId, dto, user.id);
    }

    @Post('payments/webhook')
    @ApiOperation({summary: 'Unauthenticated gateway webhook'})
    async gatewayWebhook(@Body() payload: any) {
        return this.billingService.handleGatewayWebhook(payload);
    }
}