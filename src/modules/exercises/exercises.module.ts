// src/modules/exercises/exercises.module.ts
import { Module } from '@nestjs/common';
import { PrismaModule } from '../../database/prisma.module';
import { ExercisesController } from './exercises.controller';
import { ExercisesService } from './exercises.service';

@Module({
    imports: [PrismaModule],
    controllers: [ExercisesController],
    providers: [ExercisesService],
    exports: [ExercisesService],
})
export class ExercisesModule {}
