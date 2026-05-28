// src/modules/billing/billing.controller.ts
import {Body, Controller, Get, Headers, Patch, Post, Query, UseGuards} from '@nestjs/common';
import {ApiBearerAuth, ApiOperation, ApiTags} from '@nestjs/swagger';
import {BillingService} from './billing.service';
// Ensure you create and export CheckoutInvoiceDto { @IsUUID() invoiceId: string; } in your dto file
import {CheckoutInvoiceDto, CreateInvoiceDto, ManualPaymentDto, SubscribeDto, TopUpDto} from './dto/billing.dto';
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

    // ====================================================================
    // 🚀 DEMO MODE: Dynamic Checkout & Subscription Endpoints
    // All endpoints instantly resolve as successful payments for the demo.
    // ====================================================================

    @Post('checkout/invoice')
    @UseGuards(SessionAuthGuard) // Any authenticated user can pay an invoice assigned to them
    @ApiBearerAuth('Bearer-auth')
    @ApiOperation({summary: 'DEMO: Pay an existing open invoice (e.g., Onboarding/Activation)'})
    async payExistingInvoice(
        @Headers('X-Tenant-ID') tenantId: string,
        @Body() dto: CheckoutInvoiceDto,
        @CurrentUser() user: any
    ) {
        return this.billingService.payExistingInvoiceDemo(tenantId, user.id, dto);
    }

    @Post('checkout/subscribe')
    @UseGuards(SessionAuthGuard, RolesGuard)
    @Roles('MEMBER')
    @ApiBearerAuth('Bearer-auth')
    @ApiOperation({summary: 'DEMO: Instantly purchase and activate a new subscription'})
    async subscribe(
        @Headers('X-Tenant-ID') tenantId: string,
        @Body() dto: SubscribeDto,
        @CurrentUser() user: any
    ) {
        return this.billingService.generateSubscriptionCheckoutDemo(tenantId, user.id, dto);
    }

    @Post('checkout/top-up')
    @UseGuards(SessionAuthGuard, RolesGuard)
    @Roles('MEMBER')
    @ApiBearerAuth('Bearer-auth')
    @ApiOperation({summary: 'DEMO: Instantly purchase and grant tokens'})
    async topUp(
        @Headers('X-Tenant-ID') tenantId: string,
        @Body() dto: TopUpDto,
        @CurrentUser() user: any
    ) {
        return this.billingService.generateTopUpCheckoutDemo(tenantId, user.id, dto);
    }

    @Patch('subscriptions/me/cancel')
    @UseGuards(SessionAuthGuard, RolesGuard)
    @Roles('MEMBER')
    @ApiBearerAuth('Bearer-auth')
    @ApiOperation({summary: 'Cancel active subscription auto-renewal'})
    async cancelSubscription(
        @Headers('X-Tenant-ID') tenantId: string,
        @CurrentUser() user: any
    ) {
        return this.billingService.cancelSubscription(tenantId, user.id);
    }
}