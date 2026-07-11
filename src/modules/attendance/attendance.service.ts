// src/modules/attendance/attendance.service.ts
import {ForbiddenException, Injectable, Logger, NotFoundException, OnModuleInit} from '@nestjs/common';
import {CreateAttendanceDto, UpdateAttendanceDto} from './dto/attendance.dto';
import {MembershipStatus} from '@prisma/client';
import {TenantPrismaService} from '../../database/tenant-prisma.service';
import {PrismaService} from '../../database/prisma.service';

@Injectable()
export class AttendanceService implements OnModuleInit {
    private readonly logger = new Logger(AttendanceService.name);

    constructor(
        private readonly tenantPrisma: TenantPrismaService,
        private readonly prisma: PrismaService
    ) {
    }

    onModuleInit() {
        // Run cleanup sweep immediately on boot, then every hour
        this.autoCheckoutStaleSessions();
        setInterval(() => {
            this.autoCheckoutStaleSessions();
        }, 60 * 60 * 1000); // 1 hour sweep intervals
    }

    async autoCheckoutStaleSessions() {
        this.logger.log("Starting automated check-out cleanup sweep for yesterday's stale sessions...");

        try {
            // Find all check-ins where checkOutTime is null and checkInTime is from a previous day
            const todayMidnight = new Date();
            todayMidnight.setHours(0, 0, 0, 0);

            // Bypasses request-scoped tenant isolation using global Prisma client for sweep
            const staleRecords = await this.prisma.attendance.findMany({
                where: {
                    checkOutTime: null,
                    checkInTime: {
                        lt: todayMidnight
                    }
                },
                include: {
                    tenant: true
                }
            });

            if (staleRecords.length === 0) {
                this.logger.log('No stale check-in records detected.');
                return;
            }

            this.logger.log(`Found ${staleRecords.length} stale check-ins. Closing them now...`);

            let closedCount = 0;
            for (const record of staleRecords) {
                const checkInDate = new Date(record.checkInTime);
                const dayOfWeek = checkInDate.toLocaleDateString('en-US', {weekday: 'long'});

                let checkoutHour = 22; // default fallback
                let checkoutMinute = 0;

                const rules = (record.tenant?.businessRules as any) || {};
                const hoursConfig = rules.operatingHours as any[];
                if (hoursConfig && Array.isArray(hoursConfig)) {
                    const dayConfig = hoursConfig.find(d => d.day.toLowerCase() === dayOfWeek.toLowerCase());
                    if (dayConfig && dayConfig.active && dayConfig.close) {
                        try {
                            const [h, m] = dayConfig.close.split(':').map(Number);
                            checkoutHour = h;
                            checkoutMinute = m;
                        } catch (e) {
                            // ignore, fallback
                        }
                    }
                }

                // Construct checkout date-time on the same day as check-in
                const checkOutDate = new Date(record.checkInTime);
                checkOutDate.setHours(checkoutHour, checkoutMinute, 0, 0);

                // Safe guard against negative durations if they checked in late
                if (checkOutDate.getTime() <= checkInDate.getTime()) {
                    checkOutDate.setTime(checkInDate.getTime() + 60 * 60 * 1000); // fallback checkout checkInTime + 1hr
                }

                await this.prisma.attendance.update({
                    where: {id: record.id},
                    data: {checkOutTime: checkOutDate}
                });
                closedCount++;
            }

            this.logger.log(`Cleanup completed successfully. Auto-checked out ${closedCount} sessions.`);
        } catch (error) {
            this.logger.error('Failed to run automated checkout sweep:', error.stack);
        }
    }

    // Notice: tenantId is gone from the signature. The proxy handles it.
    async checkIn(dto: CreateAttendanceDto) {
        let membership;

        // 1. Resolve Membership (Either by RFID or direct ID)
        if (dto.rfidTag) {
            membership = await this.tenantPrisma.client.membership.findFirst({
                where: {rfidTag: dto.rfidTag},
                select: { id: true, status: true }
            });
        } else if (dto.membershipId) {
            membership = await this.tenantPrisma.client.membership.findFirst({
                where: {id: dto.membershipId},
                select: {id: true, status: true}
            });
        }

        // 2. Existence Validation
        if (!membership) {
            throw new NotFoundException(
                dto.rfidTag
                    ? 'RFID tag not recognized at this facility.'
                    : 'Membership ID not recognized.'
            );
        }

        // 3. Revenue Protection Layer
        if (membership.status === MembershipStatus.SUSPENDED) {
            throw new ForbiddenException('Access Denied: Membership suspended.');
        }

        // 4. Log the entry in the immutable Attendance table
        return this.tenantPrisma.client.attendance.create({
            data: {
                membershipId: membership.id,
                authMethod: dto.authMethod,
                rfidTag: dto.rfidTag,
                checkInTime: dto.checkInTime ? new Date(dto.checkInTime) : new Date(),
            },
            include: {
                membership: {
                    include: { user: true }
                }
            }
        });
    }

    async checkOut(id: string, dto: UpdateAttendanceDto) {
        // Changed to findFirst. The proxy will safely append `tenantId` to the where clause.
        const record = await this.tenantPrisma.client.attendance.findFirst({
            where: { id }
        });

        if (!record) throw new NotFoundException('Attendance record not found.');

        return this.tenantPrisma.client.attendance.update({
            where: { id },
            data: { checkOutTime: new Date(dto.checkoutTime) }
        });
    }

    async getHistory(tenantId: string, filter: {
        startDate?: string;
        endDate?: string;
        membershipId?: string;
        userId?: string
    }) {
        return this.tenantPrisma.client.attendance.findMany({
            where: {
                // 🏢 tenantId is injected automatically by your tenantPrisma client extension

                // 🎯 Admin filtering by a specific membership
                ...(filter.membershipId && {membershipId: filter.membershipId}),

                // 🔒 Standard member filtering (walks the relationship up to the User table)
                ...(filter.userId && {membership: {userId: filter.userId}}),

                // 📅 Date range filtering
                ...((filter.startDate || filter.endDate) ? {
                    checkInTime: {
                        ...(filter.startDate && {gte: new Date(filter.startDate)}),
                        ...(filter.endDate && {lte: new Date(filter.endDate)}),
                    }
                } : {})
            },
            include: {
                membership: {
                    include: {user: true}
                }
            },
            orderBy: { checkInTime: 'desc' }
        });
    }
}