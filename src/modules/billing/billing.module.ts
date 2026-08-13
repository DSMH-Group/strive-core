import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';
import { PrismaService } from '../../database/prisma.service';

@Module({
    imports: [
        BullModule.registerQueue({ name: 'comms' })
    ],
    controllers: [BillingController],
    providers: [BillingService, PrismaService],
    exports: [BillingService]
})
export class BillingModule {}