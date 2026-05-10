// src/app.module.ts
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// Core Modules
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

// Middleware
import { TenantMiddleware } from './common/middleware/tenant.middleware';
import { PrismaModule } from "./database/prisma.module";
import {TenantsModule} from "./modules/tenants/tenants.module";

@Module({
    imports: [
        // isGlobal: true makes ConfigService available everywhere without re-importing
        ConfigModule.forRoot({ isGlobal: true }),
        PrismaModule,
        AuthModule,
        UsersModule,
        TenantsModule
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(TenantMiddleware)
            .exclude(
                // Exclude the Keycloak webhook (it uses basic auth and has no tenant context)
                // Note: Ensure this matches exactly how your global prefix is applied.
                { path: 'api/v1/users/webhook', method: RequestMethod.POST },

                // ✅ NEW: Replaced 'health/(.*)' with modern named wildcard 'health/*path'
                { path: 'health/*path', method: RequestMethod.GET },
                { path: 'metrics', method: RequestMethod.GET }
            )
            // ✅ NEW: Replaced '*' with modern named wildcard '*path'
            .forRoutes({ path: '*path', method: RequestMethod.ALL });
    }
}