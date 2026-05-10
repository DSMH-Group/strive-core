// src/modules/scheduling/scheduling.module.ts
import { Module } from '@nestjs/common';
import { SchedulingController } from './scheduling.controller';
import { SchedulingService } from './scheduling.service';
import { PrismaService } from '../../database/prisma.service';

@Module({
    controllers: [SchedulingController],
    providers: [SchedulingService, PrismaService],
})
export class SchedulingModule {}