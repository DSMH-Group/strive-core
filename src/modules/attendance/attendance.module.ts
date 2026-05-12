// src/modules/attendance/attendance.module.ts
import { Module } from '@nestjs/common';
import { AttendanceController } from './attendance.controller';
import { AttendanceService } from './attendance.service';
import { PrismaService } from '../../database/prisma.service';
import {TenantPrismaService} from "../../database/tenant-prisma.service";

@Module({
    controllers: [AttendanceController],
    providers: [AttendanceService, TenantPrismaService],
    exports: [AttendanceService]
})
export class AttendanceModule {}