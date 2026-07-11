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
        return this.prisma.sessionTemplate.findMany({
            where: { tenantId },
            orderBy: { createdAt: 'desc' },
        });
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
