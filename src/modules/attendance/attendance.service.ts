// src/modules/attendance/attendance.service.ts
import { Injectable, NotFoundException, ForbiddenException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateAttendanceDto, UpdateAttendanceDto, AuthMethod } from './dto/attendance.dto';
import { MembershipStatus } from '@prisma/client';

@Injectable()
export class AttendanceService {
    constructor(private readonly prisma: PrismaService) {}

    async checkIn(tenantId: string, dto: CreateAttendanceDto) {
        let membershipId = dto.membershipId;

        // 1. Resolve Membership from RFID if ID isn't provided (Hardware flow)
        if (!membershipId && dto.rfidTag) {
            const membership = await this.prisma.membership.findFirst({
                where: {
                    tenantId,
                    rfidTag: dto.rfidTag // Now valid thanks to schema update
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
        return this.prisma.attendance.create({
            data: {
                tenantId,
                membershipId,
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

    async checkOut(id: string, tenantId: string, dto: UpdateAttendanceDto) {
        const record = await this.prisma.attendance.findUnique({ where: { id, tenantId } });
        if (!record) throw new NotFoundException('Attendance record not found.');

        return this.prisma.attendance.update({
            where: { id },
            data: { checkOutTime: new Date(dto.checkoutTime) }
        });
    }

    async getHistory(tenantId: string, startDate?: string, endDate?: string) {
        return this.prisma.attendance.findMany({
            where: {
                tenantId,
                checkInTime: {
                    ...(startDate && { gte: new Date(startDate) }),
                    ...(endDate && { lte: new Date(endDate) }),
                }
            },
            include: { membership: { include: { user: true } } },
            orderBy: { checkInTime: 'desc' }
        });
    }
}