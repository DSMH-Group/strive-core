import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from '../../database/prisma.service';

@Module({
  imports: [
    BullModule.registerQueue({ name: 'comms' })
  ],
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}