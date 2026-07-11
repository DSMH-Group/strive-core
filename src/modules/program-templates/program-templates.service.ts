// src/modules/program-templates/program-templates.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateProgramTemplateDto, UpdateProgramTemplateDto } from './dto/program-templates.dto';

const DEFAULT_BLUEPRINTS = [
    {
        name: "Push-Pull-Legs Hypertrophy",
        goal: "Build Lean Muscle",
        totalWeeks: 12,
        routines: [
            {
                dayName: "Day A: Push",
                exercises: [
                    { name: "Bench Press", sets: 4, reps: 8, muscleGroup: "Chest" },
                    { name: "Overhead Press", sets: 3, reps: 10, muscleGroup: "Shoulders" },
                    { name: "Cable Fly", sets: 3, reps: 12, muscleGroup: "Chest" },
                    { name: "Triceps Pushdown", sets: 3, reps: 12, muscleGroup: "Triceps" },
                ]
            },
            {
                dayName: "Day B: Pull",
                exercises: [
                    { name: "Pull-up", sets: 4, reps: 8, muscleGroup: "Back" },
                    { name: "Barbell Row", sets: 3, reps: 8, muscleGroup: "Back" },
                    { name: "Face Pull", sets: 3, reps: 15, muscleGroup: "Shoulders" },
                    { name: "Barbell Curl", sets: 3, reps: 12, muscleGroup: "Biceps" },
                ]
            },
            {
                dayName: "Day C: Legs",
                exercises: [
                    { name: "Back Squat", sets: 4, reps: 8, muscleGroup: "Legs" },
                    { name: "Romanian Deadlift", sets: 3, reps: 10, muscleGroup: "Legs" },
                    { name: "Leg Press", sets: 3, reps: 12, muscleGroup: "Legs" },
                    { name: "Calf Raise", sets: 4, reps: 15, muscleGroup: "Legs" },
                ]
            }
        ]
    },
    {
        name: "Powerlifting 5x5 Strength",
        goal: "Increase Absolute Strength",
        totalWeeks: 8,
        routines: [
            {
                dayName: "Workout A",
                exercises: [
                    { name: "Back Squat", sets: 5, reps: 5, muscleGroup: "Legs" },
                    { name: "Bench Press", sets: 5, reps: 5, muscleGroup: "Chest" },
                    { name: "Barbell Row", sets: 5, reps: 5, muscleGroup: "Back" },
                ]
            },
            {
                dayName: "Workout B",
                exercises: [
                    { name: "Back Squat", sets: 5, reps: 5, muscleGroup: "Legs" },
                    { name: "Overhead Press", sets: 5, reps: 5, muscleGroup: "Shoulders" },
                    { name: "Deadlift", sets: 1, reps: 5, muscleGroup: "Back" },
                ]
            }
        ]
    },
    {
        name: "Cardio Conditioning & Core",
        goal: "Fat Loss & Endurance",
        totalWeeks: 6,
        routines: [
            {
                dayName: "Interval Training",
                exercises: [
                    { name: "Treadmill Intervals", sets: 4, reps: 5, muscleGroup: "Cardio" },
                    { name: "Rowing Erg", sets: 3, reps: 10, muscleGroup: "Cardio" },
                ]
            },
            {
                dayName: "Core Strength",
                exercises: [
                    { name: "Plank", sets: 3, reps: 60, muscleGroup: "Core" },
                    { name: "Hanging Leg Raise", sets: 3, reps: 12, muscleGroup: "Core" },
                ]
            }
        ]
    }
];

@Injectable()
export class ProgramTemplatesService {
    constructor(private readonly prisma: PrismaService) {}

    async getTemplates(tenantId: string) {
        const templates = await this.prisma.programTemplate.findMany({
            where: { tenantId },
            orderBy: { createdAt: 'asc' }
        });

        if (templates.length === 0) {
            // Seed defaults
            await Promise.all(
                DEFAULT_BLUEPRINTS.map(bp =>
                    this.prisma.programTemplate.create({
                        data: {
                            tenantId,
                            name: bp.name,
                            goal: bp.goal,
                            totalWeeks: bp.totalWeeks,
                            routines: bp.routines,
                        }
                    })
                )
            );
            return this.prisma.programTemplate.findMany({
                where: { tenantId },
                orderBy: { createdAt: 'asc' }
            });
        }

        return templates;
    }

    async createTemplate(tenantId: string, dto: CreateProgramTemplateDto) {
        return this.prisma.programTemplate.create({
            data: {
                tenantId,
                name: dto.name,
                goal: dto.goal,
                totalWeeks: dto.totalWeeks ?? 12,
                routines: dto.routines,
            }
        });
    }

    async updateTemplate(tenantId: string, id: string, dto: UpdateProgramTemplateDto) {
        const template = await this.prisma.programTemplate.findUnique({
            where: { id }
        });
        if (!template || template.tenantId !== tenantId) {
            throw new NotFoundException('Template not found or access denied.');
        }

        return this.prisma.programTemplate.update({
            where: { id },
            data: {
                name: dto.name,
                goal: dto.goal,
                totalWeeks: dto.totalWeeks,
                routines: dto.routines,
            }
        });
    }

    async deleteTemplate(tenantId: string, id: string) {
        const template = await this.prisma.programTemplate.findUnique({
            where: { id }
        });
        if (!template || template.tenantId !== tenantId) {
            throw new NotFoundException('Template not found or access denied.');
        }

        await this.prisma.programTemplate.delete({
            where: { id }
        });
        return { success: true };
    }
}
