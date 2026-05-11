import {Injectable, OnModuleInit, OnModuleDestroy, Logger} from '@nestjs/common';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    private readonly logger = new Logger(PrismaService.name);

    constructor() {
        // 1. Initialize the native Postgres connection pool
        const pool = new Pool({
            connectionString: process.env.DATABASE_URL,
            max: 10,
        });

        pool.on('connect', (client) => {
            client.query('SET search_path TO stride, public');
        });

        // 2. Wrap it in the Prisma v7 Adapter
        const adapter = new PrismaPg(pool);

        // 3. Instantiate the client with the adapter
        super({ adapter });
    }

    async onModuleInit() {
        try {
            await this.$connect();
            this.logger.log('Successfully connected to PostgreSQL via PrismaPg Adapter (Schema: stride)');
        } catch (error) {
            this.logger.error('Failed to connect to database', error);
            throw error;
        }
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}