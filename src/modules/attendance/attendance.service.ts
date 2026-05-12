// src/modules/attendance/attendance.service.ts
import { Injectable, NotFoundException, ForbiddenException, BadRequestException } from '@nestjs/common';
import { CreateAttendanceDto, UpdateAttendanceDto, AuthMethod } from './dto/attendance.dto';
import { MembershipStatus } from '@prisma/client';
import { TenantPrismaService } from '../../database/tenant-prisma.service';

@Injectable()
export class AttendanceService {
    constructor(private readonly tenantPrisma: TenantPrismaService) {}

    // Notice: tenantId is gone from the signature. The proxy handles it.
    async checkIn(dto: CreateAttendanceDto) {
        let membershipId = dto.membershipId;

        // 1. Resolve Membership from RFID if ID isn't provided (Hardware flow)
        if (!membershipId && dto.rfidTag) {
            const membership = await this.tenantPrisma.client.membership.findFirst({
                where: {
                    rfidTag: dto.rfidTag // tenantId is injected automatically here!
                },
                select: { id: true, status: true }
            });

            if (!membership) {
                throw new NotFoundException('RFID tag not recognized at this facility.');
            }

            // 2. Revenue Protection Layer
            if (membership.status === MembershipStatus.SUSPENDED) {
                throw new ForbiddenException('Access Denied: Membership suspended.');
            }

            membershipId = membership.id;
        }

        // 3. Log the entry in the immutable Attendance table
        return this.tenantPrisma.client.attendance.create({
            data: {
                membershipId, // tenantId is injected automatically here!
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

    async getHistory(startDate?: string, endDate?: string) {
        return this.tenantPrisma.client.attendance.findMany({
            where: {
                checkInTime: {
                    ...(startDate && { gte: new Date(startDate) }),
                    ...(endDate && { lte: new Date(endDate) }),
                }
                // tenantId is injected automatically here!
            },
            include: { membership: { include: { user: true } } },
            orderBy: { checkInTime: 'desc' }
        });
    }
}