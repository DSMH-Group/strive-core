// src/modules/session-templates/session-templates.service.ts
import { Injectable, ForbiddenException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateSessionTemplateDto, UpdateSessionTemplateDto } from './dto/session-template.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class SessionTemplatesService {
    constructor(private readonly prisma: PrismaService) {}

    async createTemplate(tenantId: string, dto: CreateSessionTemplateDto) {
        return this.prisma.sessionTemplate.create({
            data: {
                tenantId,
                name: dto.name,
                exercises: dto.exercises as Prisma.InputJsonValue,
            },
        });
    }

    async getTemplates(tenantId: string) {
        const templates = await this.prisma.sessionTemplate.findMany({
            where: { tenantId },
            orderBy: { createdAt: 'desc' },
        });

        if (templates.length === 0) {
            const defaults = [
                {
                    name: "Push Day",
                    exercises: [
                        { name: "Bench Press", sets: 4 },
                        { name: "Overhead Press", sets: 3 },
                        { name: "Incline Dumbbell Press", sets: 3 },
                        { name: "Triceps Pushdown", sets: 3 },
                    ]
                },
                {
                    name: "Pull Volume",
                    exercises: [
                        { name: "Barbell Row", sets: 4 },
                        { name: "Lat Pulldown", sets: 3 },
                        { name: "Seated Cable Row", sets: 3 },
                        { name: "Barbell Curl", sets: 3 },
                    ]
                },
                {
                    name: "Leg Conditioning",
                    exercises: [
                        { name: "Back Squat", sets: 5 },
                        { name: "Romanian Deadlift", sets: 3 },
                        { name: "Leg Press", sets: 3 },
                        { name: "Calf Raise", sets: 4 },
                    ]
                },
                {
                    name: "Cardio Mesh",
                    exercises: [
                        { name: "Rowing Erg", sets: 3 },
                        { name: "Treadmill Intervals", sets: 4 },
                        { name: "Plank", sets: 3 },
                    ]
                }
            ];

            await Promise.all(
                defaults.map(d => 
                    this.prisma.sessionTemplate.create({
                        data: {
                            tenantId,
                            name: d.name,
                            exercises: d.exercises as Prisma.InputJsonValue,
                        }
                    })
                )
            );

            return this.prisma.sessionTemplate.findMany({
                where: { tenantId },
                orderBy: { createdAt: 'desc' },
            });
        }

        return templates;
    }

    async updateTemplate(tenantId: string, id: string, dto: UpdateSessionTemplateDto) {
        const existing = await this.prisma.sessionTemplate.findFirst({
            where: { id, tenantId },
        });

        if (!existing) {
            throw new NotFoundException('Session template not found');
        }

        return this.prisma.sessionTemplate.update({
            where: { id },
            data: {
                ...(dto.name !== undefined && { name: dto.name }),
                ...(dto.exercises !== undefined && { exercises: dto.exercises as Prisma.InputJsonValue }),
            },
        });
    }

    async deleteTemplate(tenantId: string, id: string) {
        const existing = await this.prisma.sessionTemplate.findFirst({
            where: { id, tenantId },
        });

        if (!existing) {
            throw new NotFoundException('Session template not found');
        }

        await this.prisma.sessionTemplate.delete({
            where: { id },
        });

        return { success: true };
    }
}
