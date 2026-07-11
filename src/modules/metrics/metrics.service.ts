// src/modules/metrics/metrics.service.ts
import { Injectable, ForbiddenException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateMetricDto, HealthSyncDto } from './dto/metrics.dto';
import {InputJsonValue} from "@prisma/client/runtime/client";

@Injectable()
export class MetricsService {
    constructor(private readonly prisma: PrismaService) {}

    async logMetric(tenantId: string, userId: string, dto: CreateMetricDto) {
        // 1. Identify the membership context
        const targetMembershipId = await this.resolveMembershipId(tenantId, userId, dto.membershipId);

        let metricData = dto.data;
        if (dto.metricType.toUpperCase() === "TRAINER_NOTE") {
            const caller = await this.prisma.user.findUnique({
                where: { id: userId }
            });
            if (caller) {
                metricData = {
                    ...(dto.data as any),
                    author: `${caller.firstName} ${caller.lastName}`,
                    authorId: userId,
                };
            }
        }

        return this.prisma.metric.create({
            data: {
                membershipId: targetMembershipId,
                metricType: dto.metricType.toUpperCase(),
                data: metricData as InputJsonValue,
            },
        });
    }

    async getMetrics(tenantId: string, userId: string, metricType?: string, targetMembershipId?: string) {
        const callerMembership = await this.prisma.membership.findUnique({
            where: { userId_tenantId: { userId, tenantId } },
            include: { roles: true }
        });

        if (!callerMembership) throw new NotFoundException('Caller membership not found');

        let queryMembershipId = callerMembership.id;

        if (targetMembershipId) {
            const isStaff = callerMembership.roles.some(r => ['ORG_ADMIN', 'MANAGER', 'TRAINER'].includes(r.role));
            if (!isStaff && targetMembershipId !== callerMembership.id) {
                throw new ForbiddenException('You do not have permission to view this member\'s metrics');
            }
            queryMembershipId = targetMembershipId;
        }

        return this.prisma.metric.findMany({
            where: {
                membershipId: queryMembershipId,
                ...(metricType && { metricType: metricType.toUpperCase() }),
            },
            orderBy: { recordedAt: 'desc' },
        });
    }

    async syncHealthData(tenantId: string, userId: string, dto: HealthSyncDto) {
        const membership = await this.prisma.membership.findUnique({
            where: { userId_tenantId: { userId, tenantId } },
        });

        if (!membership) throw new ForbiddenException('No membership in this tenant');

        // Efficient bulk insert for wearable data
        const metrics = dto.dataPoints.map((point) => ({
            membershipId: membership.id,
            metricType: `WEARABLE_${point.type}`.toUpperCase(),
            data: { provider: dto.provider, ...point } as InputJsonValue,
            recordedAt: new Date(point.date),
        }));

        return this.prisma.metric.createMany({ data: metrics });
    }

    private async resolveMembershipId(tenantId: string, userId: string, requestedId?: string): Promise<string> {
        const ownMembership = await this.prisma.membership.findUnique({
            where: { userId_tenantId: { userId, tenantId } },
        });

        if (!ownMembership) throw new ForbiddenException('Invalid session context');

        // If a trainer is logging for someone else, verify ID existence in the same tenant
        if (requestedId && requestedId !== ownMembership.id) {
            const target = await this.prisma.membership.findUnique({ where: { id: requestedId } });
            if (!target || target.tenantId !== tenantId) {
                throw new ForbiddenException('Target member does not belong to this organization');
            }
            return requestedId;
        }

        return ownMembership.id;
    }

    async getSessionTypes(tenantId: string): Promise<string[]> {
        const metrics = await this.prisma.metric.findMany({
            where: {
                metricType: "WORKOUT_LOG",
                membership: { tenantId }
            },
            select: {
                data: true
            }
        });

        const types = new Set<string>();
        types.add("Fat Loss");
        types.add("Hypertrophy");
        types.add("Strength");
        types.add("Conditioning");

        for (const m of metrics) {
            try {
                const dataObj = m.data as any;
                if (dataObj && typeof dataObj.sessionType === 'string' && dataObj.sessionType.trim()) {
                    types.add(dataObj.sessionType.trim());
                }
            } catch (err) {
                // ignore
            }
        }

        return Array.from(types);
    }
}