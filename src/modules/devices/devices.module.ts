// src/modules/devices/devices.module.ts
import { Module } from '@nestjs/common';
import { DevicesController } from './devices.controller';
import { DevicesService } from './devices.service';
import { PrismaService } from '../../database/prisma.service';

@Module({
    controllers: [DevicesController],
    providers: [DevicesService, PrismaService],
    exports: [DevicesService],
})
export class DevicesModule {}
