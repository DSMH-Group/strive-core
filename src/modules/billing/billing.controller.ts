// src/modules/billing/billing.controller.ts
import {
    Body,
    Controller,
    Delete,
    Get,
    Headers,
    HttpCode,
    HttpStatus,
    Param,
    Patch,
    Post,
    Query,
    Res,
    UseGuards
} from '@nestjs/common';
import {ApiBearerAuth, ApiOperation, ApiTags} from '@nestjs/swagger';
import type {Response} from 'express';
import {BillingService} from './billing.service';
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
        @Query('membershipId') requestedMembershipId?: string
    ) {
        const isAdmin = user.globalRole === 'SYSTEM_ADMIN' || !!user.tenantRoles?.[tenantId];

        if (isAdmin) {
            // Admins can see all tenant invoices, or filter by a specific member's invoice ledger
            return this.billingService.getInvoices(tenantId, {membershipId: requestedMembershipId});
        } else {
            // Standard members can ONLY see their own invoices
            return this.billingService.getInvoices(tenantId, {userId: user.id});
        }
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
    // 🚀 PAYHERE CHECKOUT INITIALIZATION ENDPOINTS
    // ====================================================================

    @Post('checkout/invoice')
    @UseGuards(SessionAuthGuard)
    @ApiBearerAuth('Bearer-auth')
    @ApiOperation({summary: 'Generate PayHere payload for an existing open invoice'})
    async payExistingInvoice(
        @Headers('X-Tenant-ID') tenantId: string,
        @Body() dto: CheckoutInvoiceDto,
        @CurrentUser() user: any
    ) {
        return this.billingService.generateExistingInvoiceCheckout(tenantId, user.id, dto);
    }

    @Post('checkout/subscribe')
    @UseGuards(SessionAuthGuard, RolesGuard)
    @Roles('MEMBER')
    @ApiBearerAuth('Bearer-auth')
    @ApiOperation({summary: 'Generate PayHere payload for a new subscription'})
    async subscribe(
        @Headers('X-Tenant-ID') tenantId: string,
        @Body() dto: SubscribeDto,
        @CurrentUser() user: any
    ) {
        return this.billingService.generateSubscriptionCheckout(tenantId, user.id, dto);
    }

    @Post('checkout/top-up')
    @UseGuards(SessionAuthGuard, RolesGuard)
    @Roles('MEMBER')
    @ApiBearerAuth('Bearer-auth')
    @ApiOperation({summary: 'Generate PayHere payload for token purchases'})
    async topUp(
        @Headers('X-Tenant-ID') tenantId: string,
        @Body() dto: TopUpDto,
        @CurrentUser() user: any
    ) {
        return this.billingService.generateTopUpCheckout(tenantId, user.id, dto);
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

    // ====================================================================
    // 🚀 PAYHERE WEBHOOK LISTENER
    // ====================================================================

    @Post('webhook/payhere')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({summary: 'PayHere Server-to-Server Webhook Listener'})
    async handlePayHereWebhook(@Body() body: any, @Res() res: Response) {
        // Run asynchronously to immediately return 200 OK to PayHere to prevent retries
        this.billingService.handlePayHereWebhook(body).catch((err) => {
            console.error('Error processing PayHere webhook:', err);
        });

        return res.status(HttpStatus.OK).send();
    }

    // ====================================================================
    // 🚀 SAVED CARDS (TOKENIZATION) ENDPOINTS
    // ====================================================================

    @Get('cards')
    @UseGuards(SessionAuthGuard, RolesGuard)
    @Roles('MEMBER')
    @ApiBearerAuth('Bearer-auth')
    @ApiOperation({summary: 'Get saved payment methods'})
    async getSavedCards(
        @Headers('X-Tenant-ID') tenantId: string,
        @CurrentUser() user: any
    ) {
        return this.billingService.getSavedCards(tenantId, user.id);
    }

    @Post('cards/setup')
    @UseGuards(SessionAuthGuard, RolesGuard)
    @Roles('MEMBER')
    @ApiBearerAuth('Bearer-auth')
    @ApiOperation({summary: 'Generate PayHere Preapproval payload for saving a card'})
    async setupCard(
        @Headers('X-Tenant-ID') tenantId: string,
        @CurrentUser() user: any
    ) {
        return this.billingService.generateCardSetupPayload(tenantId, user.id);
    }

    @Delete('cards/:id')
    @UseGuards(SessionAuthGuard, RolesGuard)
    @Roles('MEMBER')
    @ApiBearerAuth('Bearer-auth')
    @ApiOperation({summary: 'Remove a saved payment method'})
    async removeCard(
        @Headers('X-Tenant-ID') tenantId: string,
        @CurrentUser() user: any,
        @Param('id') cardId: string
    ) {
        return this.billingService.removeSavedCard(tenantId, user.id, cardId);
    }

    @Post('webhook/payhere-preapproval')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({summary: 'PayHere Server-to-Server Webhook for Preapproval (Card Saving)'})
    async handlePayHerePreapprovalWebhook(@Body() body: any, @Res() res: Response) {
        this.billingService.handlePreapprovalWebhook(body).catch((err) => {
            console.error('Error processing Preapproval webhook:', err);
        });
        return res.status(HttpStatus.OK).send();
    }
}