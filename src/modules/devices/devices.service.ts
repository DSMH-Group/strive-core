// src/modules/devices/devices.service.ts
import { Injectable, NotFoundException, ForbiddenException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import * as crypto from 'crypto';

@Injectable()
export class DevicesService {
    constructor(private readonly prisma: PrismaService) {}

    async createDevice(tenantId: string, name: string, location: string, direction: 'IN' | 'OUT') {
        const plaintextToken = 'str_dev_' + crypto.randomBytes(16).toString('hex');
        const hashedToken = crypto.createHash('sha256').update(plaintextToken).digest('hex');

        const device = await this.prisma.device.create({
            data: {
                name,
                location,
                direction,
                token: hashedToken,
                tenantId,
                status: 'ACTIVE',
            },
        });

        return {
            ...device,
            plaintextToken, // Return this only on creation
        };
    }

    async listDevices(tenantId: string) {
        return this.prisma.device.findMany({
            where: { tenantId },
            orderBy: { createdAt: 'desc' },
        });
    }

    async updateDevice(tenantId: string, deviceId: string, data: { status?: 'ACTIVE' | 'INACTIVE'; name?: string; location?: string; direction?: 'IN' | 'OUT' }) {
        const device = await this.prisma.device.findFirst({
            where: { id: deviceId, tenantId },
        });

        if (!device) {
            throw new NotFoundException('Device not found.');
        }

        return this.prisma.device.update({
            where: { id: deviceId },
            data,
        });
    }

    async deleteDevice(tenantId: string, deviceId: string) {
        const device = await this.prisma.device.findFirst({
            where: { id: deviceId, tenantId },
        });

        if (!device) {
            throw new NotFoundException('Device not found.');
        }

        return this.prisma.device.delete({
            where: { id: deviceId },
        });
    }

    async processIngress(tenantId: string, device: any, payload: any, contentType: string) {
        let scannedValue = '';
        let credentialType = 'QR';

        // 1. Parse Payload based on Content-Type
        if (contentType.includes('application/xml') || contentType.includes('text/xml')) {
            const xmlStr = String(payload);
            // Hikvision ISAPI XML: look for cardNo or employeeNoString
            const cardNo = this.getXmlTag(xmlStr, 'cardNo');
            const employeeNo = this.getXmlTag(xmlStr, 'employeeNoString') || this.getXmlTag(xmlStr, 'employeeNo');
            
            scannedValue = cardNo || employeeNo || '';
            credentialType = cardNo ? 'RFID' : 'QR';
        } else if (typeof payload === 'object') {
            // JSON format (generic HTTP reader or HikCentral webhook)
            scannedValue = payload.cardNo || payload.credential || payload.membershipId || payload.employeeNo || '';
            credentialType = payload.cardNo ? 'RFID' : 'QR';
        } else {
            // Plaintext barcode string
            scannedValue = String(payload).trim();
        }

        if (!scannedValue) {
            throw new BadRequestException('Could not parse any credential value from access payload.');
        }

        // 2. Resolve Membership (Credential Table -> RFID -> ID)
        let membership = null;

        const cred = await this.prisma.credential.findFirst({
            where: { tokenValue: scannedValue },
            include: { membership: { include: { user: true } } },
        });

        if (cred) {
            membership = cred.membership;
            credentialType = cred.type;
        } else {
            // Fallback 1: check rfidTag directly
            const mByRfid = await this.prisma.membership.findFirst({
                where: { rfidTag: scannedValue, tenantId },
                include: { user: true },
            });
            if (mByRfid) {
                membership = mByRfid;
                credentialType = 'RFID';
            } else {
                // Fallback 2: check UUID directly
                const mById = await this.prisma.membership.findFirst({
                    where: { id: scannedValue, tenantId },
                    include: { user: true },
                });
                if (mById) {
                    membership = mById;
                }
            }
        }

        if (!membership) {
            throw new NotFoundException(`Access credential '${scannedValue}' is not recognized.`);
        }

        if (membership.status === 'SUSPENDED') {
            throw new ForbiddenException('Access Denied: Membership is suspended.');
        }

        // 3. Log Attendance In/Out
        if (device.direction === 'IN') {
            const attendance = await this.prisma.attendance.create({
                data: {
                    tenantId,
                    membershipId: membership.id,
                    authMethod: credentialType,
                    rfidTag: membership.rfidTag || null,
                    checkInTime: new Date(),
                },
            });

            return {
                status: 'GRANTED',
                direction: 'IN',
                member: {
                    name: `${membership.user.firstName} ${membership.user.lastName}`,
                    status: membership.status,
                },
                attendance,
            };
        } else {
            // Check-out Flow: Find most recent active check-in
            const activeCheckIn = await this.prisma.attendance.findFirst({
                where: { membershipId: membership.id, checkOutTime: null },
                orderBy: { checkInTime: 'desc' },
            });

            if (activeCheckIn) {
                const attendance = await this.prisma.attendance.update({
                    where: { id: activeCheckIn.id },
                    data: { checkOutTime: new Date() },
                });
                return {
                    status: 'GRANTED',
                    direction: 'OUT',
                    member: {
                        name: `${membership.user.firstName} ${membership.user.lastName}`,
                        status: membership.status,
                    },
                    attendance,
                };
            } else {
                // Return checked out status with same checkIn/checkOut
                const attendance = await this.prisma.attendance.create({
                    data: {
                        tenantId,
                        membershipId: membership.id,
                        authMethod: credentialType,
                        rfidTag: membership.rfidTag || null,
                        checkInTime: new Date(),
                        checkOutTime: new Date(),
                    },
                });
                return {
                    status: 'GRANTED',
                    direction: 'OUT',
                    member: {
                        name: `${membership.user.firstName} ${membership.user.lastName}`,
                        status: membership.status,
                    },
                    attendance,
                };
            }
        }
    }

    private getXmlTag(xml: string, tag: string): string | null {
        const regex = new RegExp(`<${tag}[^>]*>([^<]*)</${tag}>`, 'i');
        const match = xml.match(regex);
        return match ? match[1].trim() : null;
    }
}
