// src/modules/scheduling/scheduling.service.ts
import {BadRequestException, ConflictException, Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from '../../database/prisma.service';
import {CreateResourceDto} from './dto/resource.dto';
import {CreateBookingDto} from './dto/booking.dto';

@Injectable()
export class SchedulingService {
    constructor(private readonly prisma: PrismaService) {
    }

    async createResource(tenantId: string, dto: CreateResourceDto) {
        return this.prisma.resource.create({
            data: {...dto, tenantId},
        });
    }

    async getResources(tenantId: string) {
        return this.prisma.resource.findMany({
            where: {tenantId},
            include: {_count: {select: {bookings: true}}},
        });
    }

    async createBooking(tenantId: string, dto: CreateBookingDto) {
        const start = new Date(dto.startTime);
        const end = new Date(dto.endTime);

        if (start >= end) {
            throw new BadRequestException('Start time must be before end time.');
        }

        // 1. Verify Resource exists and belongs to Tenant
        const resource = await this.prisma.resource.findUnique({
            where: {id: dto.resourceId, tenantId},
        });

        if (!resource) throw new NotFoundException('Resource not found.');

        // 2. Collision Detection: Check current occupancy vs Capacity
        // Logic: Overlap exists if (RequestedStart < ExistingEnd) AND (RequestedEnd > ExistingStart)
        const overlappingBookingsCount = await this.prisma.booking.count({
            where: {
                resourceId: dto.resourceId,
                AND: [
                    {startTime: {lt: end}},
                    {endTime: {gt: start}},
                ],
            },
        });

        if (overlappingBookingsCount >= resource.capacity) {
            throw new ConflictException('Resource is fully booked for this time slot.');
        }

        // 3. Create Booking
        return this.prisma.booking.create({
            data: {
                resourceId: dto.resourceId,
                membershipId: dto.membershipId,
                startTime: start,
                endTime: end,
            },
        });
    }

    async cancelBooking(tenantId: string, bookingId: string, userId: string, isStaff: boolean) {
        const booking = await this.prisma.booking.findUnique({
            where: {id: bookingId},
            include: {resource: true, membership: true},
        });

        if (!booking || booking.resource.tenantId !== tenantId) {
            throw new NotFoundException('Booking not found.');
        }

        // Auth Check: Only staff or the owner of the booking can delete it
        if (!isStaff && booking.membership.userId !== userId) {
            throw new BadRequestException('You do not have permission to cancel this booking.');
        }

        return this.prisma.booking.delete({where: {id: bookingId}});
    }

    async getBookings(tenantId: string, membershipId?: string, upcoming?: boolean) {
        const whereClause: any = {
            // Ensure we are strictly bounded to this tenant's resources
            resource: {tenantId}
        };

        if (membershipId) {
            whereClause.membershipId = membershipId;
        }

        if (upcoming) {
            // Only fetch bookings where the end time is in the future
            whereClause.endTime = {gt: new Date()};
        }

        return this.prisma.booking.findMany({
            where: whereClause,
            include: {
                resource: true, 
                membership: {
                    include: {
                        user: true
                    }
                }
            },
            orderBy: {
                startTime: 'asc', 
            },
        });
    }
}