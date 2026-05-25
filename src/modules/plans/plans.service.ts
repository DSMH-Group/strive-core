// src/modules/plans/plans.service.ts
import {Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from '../../database/prisma.service'; // Adjust path if necessary
import {CreatePlanDto, UpdatePlanDto} from './dto/plan.dto';

@Injectable()
export class PlansService {
    constructor(private readonly prisma: PrismaService) {
    }

    async createPlan(tenantId: string, dto: CreatePlanDto) {
        return this.prisma.plan.create({
            data: {
                ...dto,
                tenantId,
            },
        });
    }

    async getPlans(tenantId: string, includeInactive: boolean = false) {
        const whereClause: any = {tenantId};

        // Only return active plans unless specifically requested (e.g., by an Admin)
        if (!includeInactive) {
            whereClause.isActive = true;
        }

        return this.prisma.plan.findMany({
            where: whereClause,
            orderBy: {monthlyPrice: 'asc'}, // Sort cheapest to most expensive
        });
    }

    async updatePlan(tenantId: string, id: string, dto: UpdatePlanDto) {
        const plan = await this.prisma.plan.findUnique({
            where: {id, tenantId},
        });

        if (!plan) throw new NotFoundException('Plan not found in this tenant.');

        return this.prisma.plan.update({
            where: {id},
            data: dto,
        });
    }

    async deletePlan(tenantId: string, id: string) {
        const plan = await this.prisma.plan.findUnique({
            where: {id, tenantId},
        });

        if (!plan) throw new NotFoundException('Plan not found.');

        // Because we set `onDelete: SetNull` in the Prisma schema for Membership -> Plan,
        // deleting this will safely detach it from members without deleting the members themselves.
        return this.prisma.plan.delete({
            where: {id},
        });
    }
}