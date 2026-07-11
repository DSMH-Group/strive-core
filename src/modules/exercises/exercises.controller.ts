// src/modules/exercises/exercises.controller.ts
import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ExercisesService } from './exercises.service';
import { SessionAuthGuard } from '../../common/guards/session-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@ApiTags('Exercise Bank')
@ApiBearerAuth('Bearer-auth')
@Controller('exercises')
@UseGuards(SessionAuthGuard, RolesGuard)
export class ExercisesController {
    constructor(private readonly exercisesService: ExercisesService) {}

    @Get()
    @Roles('TRAINER', 'MEMBER')
    @ApiOperation({ summary: 'List or search all canonical exercises in the database' })
    @ApiQuery({ name: 'search', required: false, description: 'Search term for exercise name' })
    @ApiQuery({ name: 'category', required: false, description: 'Filter by category (e.g. Strength, Archery)' })
    async getExercises(
        @Query('search') search?: string,
        @Query('category') category?: string,
    ) {
        return this.exercisesService.getExercises(search, category);
    }
}
