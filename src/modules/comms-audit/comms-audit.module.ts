import { Module } from '@nestjs/common';
import { CommsAuditController } from './comms-audit.controller';
import { CommsAuditService } from './comms-audit.service';
import { PrismaService } from '../../database/prisma.service';
import { BullModule } from '@nestjs/bullmq';
import { CommsProcessor } from './comms.processor';

@Module({
    imports: [
        BullModule.registerQueue({
            name: 'comms',
        }),
    ],
    controllers: [CommsAuditController],
    providers: [CommsAuditService, PrismaService, CommsProcessor],
})
export class CommsAuditModule {}