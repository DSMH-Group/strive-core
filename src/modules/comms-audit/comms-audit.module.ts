// src/modules/comms-audit/comms-audit.module.ts
import { Module } from '@nestjs/common';
import { CommsAuditController } from './comms-audit.controller';
import { CommsAuditService } from './comms-audit.service';
import { PrismaService } from '../../database/prisma.service';

@Module({
    controllers: [CommsAuditController],
    providers: [CommsAuditService, PrismaService],
})
export class CommsAuditModule {}