// src/modules/attendance/attendance.service.ts
import {ForbiddenException, Injectable, NotFoundException} from '@nestjs/common';
import {CreateAttendanceDto, UpdateAttendanceDto} from './dto/attendance.dto';
import {MembershipStatus} from '@prisma/client';
import {TenantPrismaService} from '../../database/tenant-prisma.service';

@Injectable()
export class AttendanceService {
    constructor(private readonly tenantPrisma: TenantPrismaService) {}

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