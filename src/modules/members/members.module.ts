// src/modules/members/members.module.ts
import { Module } from '@nestjs/common';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';
import { PrismaService } from '../../database/prisma.service';

import { BullModule } from '@nestjs/bullmq';

@Module({
    imports: [
        BullModule.registerQueue({ name: 'comms' }),
    ],
    controllers: [MembersController],
    providers: [
        MembersService,
        PrismaService
    ],
    exports: [MembersService], // CRITICAL: Makes this service available to Billing and Attendance modules later
})
export class MembersModule {}