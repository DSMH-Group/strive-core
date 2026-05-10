// src/modules/billing/billing.controller.ts
import { Controller, Get, Post, Body, Headers, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiHeader } from '@nestjs/swagger';
import { BillingService } from './billing.service';
import { CreateInvoiceDto, ManualPaymentDto } from './dto/billing.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

@ApiTags('Billing & Ledger')
@Controller('billing')
export class BillingController {
    constructor(private readonly billingService: BillingService) {}

    @Post('invoices')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ORG_ADMIN', 'MANAGER')
    @ApiBearerAuth('JWT-auth')
    @ApiHeader({ name: 'X-Tenant-ID', required: true })
    async createInvoice(@Headers('X-Tenant-ID') tenantId: string, @Body() dto: CreateInvoiceDto) {
        return this.billingService.createInvoice(tenantId, dto);
    }

    @Get('invoices')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('JWT-auth')
    @ApiHeader({ name: 'X-Tenant-ID', required: true })
    async getInvoices(
        @Headers('X-Tenant-ID') tenantId: string,
        @CurrentUser() user: any,
        @Query('membershipId') membershipId?: string
    ) {
        // MEMBERS can only see their own invoices
        const targetId = user.globalRole !== 'SYSTEM_ADMIN' && !user.tenantRoles?.[tenantId] ? user.sub : membershipId;
        return this.billingService.getInvoices(tenantId, targetId);
    }

    @Post('payments/manual')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ORG_ADMIN', 'MANAGER')
    @ApiBearerAuth('JWT-auth')
    @ApiHeader({ name: 'X-Tenant-ID', required: true })
    async manualPayment(
        @Headers('X-Tenant-ID') tenantId: string,
        @Body() dto: ManualPaymentDto,
        @CurrentUser() user: any
    ) {
        return this.billingService.processManualPayment(tenantId, dto, user.sub);
    }

    @Post('payments/webhook')
    @ApiOperation({ summary: 'Unauthenticated gateway webhook' })
    async gatewayWebhook(@Body() payload: any) {
        return this.billingService.handleGatewayWebhook(payload);
    }
}