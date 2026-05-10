import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
// Import strictly from our explicitly generated local folder
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor() {
        // 1. Initialize the native Postgres connection pool
        const pool = new Pool({
            connectionString: process.env.DATABASE_URL
        });

        // 2. Wrap it in the Prisma v7 Adapter
        const adapter = new PrismaPg(pool);

        // 3. Instantiate the client with the adapter
        super({ adapter });
    }

    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}