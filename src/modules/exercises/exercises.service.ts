// src/modules/exercises/exercises.service.ts
import { Injectable, OnApplicationBootstrap, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { SEED_EXERCISES } from './exercises.seed-data';

@Injectable()
export class ExercisesService implements OnApplicationBootstrap {
    private readonly logger = new Logger(ExercisesService.name);

    constructor(private readonly prisma: PrismaService) {}

    // Run automatically on startup to seed exercises if they don't exist
    async onApplicationBootstrap() {
        try {
            const count = await this.prisma.exercise.count();
            if (count === 0) {
                this.logger.log('Exercise Bank is empty. Initiating automatic boot seeding...');
                await this.prisma.exercise.createMany({
                    data: SEED_EXERCISES,
                });
                this.logger.log(`Successfully seeded ${SEED_EXERCISES.length} canonical exercises into the database.`);
            } else {
                this.logger.log(`Exercise Bank database checks passed: ${count} canonical exercises detected.`);
            }
        } catch (error) {
            this.logger.error('Failed to run automatic Exercise Bank boot seeder', error);
        }
    }

    async getExercises(search?: string, category?: string) {
        return this.prisma.exercise.findMany({
            where: {
                ...(search && {
                    name: {
                        contains: search,
                        mode: 'insensitive',
                    },
                }),
                ...(category && {
                    category: {
                        equals: category,
                        mode: 'insensitive',
                    },
                }),
            },
            orderBy: { name: 'asc' },
        });
    }
}
