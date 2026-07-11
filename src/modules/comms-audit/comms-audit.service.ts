// src/modules/comms-audit/comms-audit.service.ts
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { BroadcastDto } from './dto/broadcast.dto';
import {JsonObject} from "@prisma/client/runtime/client";
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

@Injectable()
export class CommsAuditService {
    constructor(
        private readonly prisma: PrismaService,
        @InjectQueue('comms') private readonly commsQueue: Queue,
    ) {}

    /**
     * Broadcast logic: Fetches users based on filter and prepares for dispatch.
     * Integration point for Text.lk (SMS) and Resend (Email).
     */
    async broadcastMessage(tenantId: string, dto: BroadcastDto) {
        const members = await this.prisma.membership.findMany({
            where: {
                tenantId,
                ...dto.audienceFilter,
            },
            include: { user: true },
        });

        const TEMPLATES: Record<string, string> = {
            'sub_expiry': 'Dear {name}, your Strive subscription is expiring soon. Please renew at your earliest convenience.',
            'payment_reminder': 'Dear {name}, this is a reminder regarding your outstanding invoice balance. Please settle it soon.',
            'welcome': 'Welcome {name} to Strive! Your active membership plan has been provisioned.',
        };

        const jobs = members.map(async (m) => {
            if (!m.user) return;
            const templateText = TEMPLATES[dto.templateId] || 'Notification from Strive: Hello {name}.';
            const messageText = templateText.replace('{name}', m.user.firstName || 'Member');

            await this.commsQueue.add('dispatch', {
                channel: dto.channel,
                recipient: {
                    phone: m.user.phone,
                    email: m.user.email,
                },
                message: messageText,
                subject: dto.templateId === 'payment_reminder' ? 'Payment Reminder' : 'Strive Gym Notification',
            });
        });
        await Promise.all(jobs);

        return {
            count: members.length,
            status: 'QUEUED',
            channel: dto.channel,
        };
    }

    /**
     * Leaderboard logic: Sorts members by values inside the Metric JSONB column.
     */
    async getLeaderboard(tenantId: string, metricType: string) {
        const metrics = await this.prisma.metric.findMany({
            where: {
                metricType: metricType.toUpperCase(),
                membership: { tenantId },
            },
            include: {
                membership: { include: { user: true } },
            },
            orderBy: { recordedAt: 'desc' },
            take: 10,
        });

        return metrics.map((m) => {
            // FIX: Safely cast the JsonValue to a JsonObject to access keys
            const metricData = m.data as JsonObject;

            return {
                name: `${m.membership.user.firstName} ${m.membership.user.lastName}`,
                // Access 'value' safely using optional chaining and nullish coalescing
                value: metricData?.['value'] ?? 0,
                recordedAt: m.recordedAt,
            };
        });
    }

    /**
     * Audit Log: Read-only access to system changes.
     */
    async getAuditLogs(tenantId: string) {
        return this.prisma.auditLog.findMany({
            where: { tenantId },
            include: { user: { select: { firstName: true, lastName: true, email: true } } },
            orderBy: { createdAt: 'desc' },
            take: 100,
        });
    }
}