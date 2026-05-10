// src/modules/users/users.module.ts
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
// Note: If you have a dedicated PrismaModule, import that into the imports[] array instead of providing the service directly.
import { PrismaService } from '../../database/prisma.service';

@Module({
  controllers: [UsersController], // <-- This instantly populates your Swagger UI
  providers: [UsersService, PrismaService],
  exports: [UsersService], // Essential for our Modular Monolith architecture
})
export class UsersModule {}