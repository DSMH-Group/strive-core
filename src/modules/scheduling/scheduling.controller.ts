// src/modules/scheduling/scheduling.controller.ts
import {
    Body,
    Controller,
    createParamDecorator,
    Delete,
    ExecutionContext,
    Get,
    Param,
    Post,
    Query,
    Request,
    UseGuards
} from '@nestjs/common';
import {
    ApiBadRequestResponse,
    ApiBearerAuth,
    ApiConflictResponse,
    ApiCreatedResponse,
    ApiForbiddenResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiOperation,
    ApiParam,
    ApiQuery,
    ApiTags
} from '@nestjs/swagger';
import {SchedulingService} from './scheduling.service';
import {CreateResourceDto, ResourceResponseDto} from './dto/resource.dto';
import {BookingResponseDto, CreateBookingDto} from './dto/booking.dto';
import {SessionAuthGuard} from '../../common/guards/session-auth.guard';
import {RolesGuard} from '../../common/guards/roles.guard';
import {Roles} from '../../common/decorators/roles.decorator';
import {ApiTenantId} from "../../common/decorators/tenant-header.decorator";

// 🚀 STRATEGY: Custom parameter extractor.
// This cleanly grabs the header without triggering Swagger's auto-documenter, preventing duplication.
export const TenantId = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        return request.headers['x-tenant-id'];
    },
);

@ApiTags('Resources & Scheduling')
@ApiBearerAuth('Bearer-auth')
@ApiTenantId() // 🚀 Single source of truth for Swagger UI documentation
@UseGuards(SessionAuthGuard, RolesGuard)
@Controller('scheduling')
export class SchedulingController {
    constructor(private readonly schedulingService: SchedulingService) {
    }

    @Post('resources')
    @Roles('ORG_ADMIN', 'MANAGER')
    @ApiOperation({summary: 'Create a schedulable resource (Staff only)'})
    @ApiCreatedResponse({description: 'The resource has been successfully created.', type: ResourceResponseDto})
    @ApiForbiddenResponse({description: 'User does not have Staff privileges.'})
    @ApiBadRequestResponse({description: 'Invalid payload provided.'})
    async createResource(@TenantId() tenantId: string, @Body() dto: CreateResourceDto) {
        return this.schedulingService.createResource(tenantId, dto);
    }

    @Get('resources')
    @ApiOperation({summary: 'List all resources for the tenant'})
    @ApiOkResponse({
        description: 'Returns an array of resources, including booking counts.',
        type: [ResourceResponseDto]
    })
    async getResources(@TenantId() tenantId: string) {
        return this.schedulingService.getResources(tenantId);
    }

    @Post('bookings')
    @ApiOperation({summary: 'Book a resource slot'})
    @ApiCreatedResponse({description: 'The booking was successfully created.', type: BookingResponseDto})
    @ApiBadRequestResponse({description: 'Start time must be before end time.'})
    @ApiNotFoundResponse({description: 'Resource not found.'})
    @ApiConflictResponse({description: 'Resource is fully booked for this time slot (Capacity reached).'})
    async createBooking(@TenantId() tenantId: string, @Body() dto: CreateBookingDto) {
        return this.schedulingService.createBooking(tenantId, dto);
    }

    @Delete('bookings/:id')
    @ApiOperation({summary: 'Cancel a reservation'})
    @ApiParam({name: 'id', required: true, description: 'The UUID of the booking to cancel'})
    @ApiOkResponse({description: 'The booking was successfully cancelled.', type: BookingResponseDto})
    @ApiNotFoundResponse({description: 'Booking not found or does not belong to this tenant.'})
    @ApiBadRequestResponse({description: 'You do not have permission to cancel this booking.'})
    async cancelBooking(
        @TenantId() tenantId: string,
        @Param('id') id: string,
        @Request() req: any,
    ) {
        const user = req.user;
        const isStaff = ['ORG_ADMIN', 'MANAGER', 'TRAINER'].includes(user.tenantRoles?.[tenantId]);
        return this.schedulingService.cancelBooking(tenantId, id, user.id, isStaff);
    }

    @Get('bookings')
    @ApiOperation({summary: 'List bookings for the tenant'})
    @ApiQuery({name: 'membershipId', required: false, type: String, description: 'Filter by specific member UUID'})
    @ApiQuery({
        name: 'upcoming',
        required: false,
        type: Boolean,
        description: 'Only show future bookings (endTime > now)'
    })
    @ApiOkResponse({
        description: 'Returns an array of bookings with nested resource details.',
        type: [BookingResponseDto]
    })
    async getBookings(
        @TenantId() tenantId: string,
        @Query('membershipId') membershipId?: string,
        @Query('upcoming') upcoming?: string,
    ) {
        const isUpcoming = upcoming === 'true';
        return this.schedulingService.getBookings(tenantId, membershipId, isUpcoming);
    }
}