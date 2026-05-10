// src/app.module.ts
import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';

// Core Modules
import {AuthModule} from './modules/auth/auth.module';
import {UsersModule} from './modules/users/users.module';

// Middleware
import {TenantMiddleware} from './common/middleware/tenant.middleware';
import {PrismaModule} from "./database/prisma.module";

@Module({
    imports: [
        // isGlobal: true makes ConfigService available everywhere without re-importing
        ConfigModule.forRoot({isGlobal: true}),
        PrismaModule,
        AuthModule,
        UsersModule,
        // Future modules: BillingModule, AttendanceModule, ResourcesModule...
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(TenantMiddleware)
            .exclude(
                // Exclude the Keycloak webhook (it uses basic auth and has no tenant context)
                {path: 'api/v1/users/webhook', method: RequestMethod.POST},
                // Exclude health checks for Railway/PaaS uptime monitors
                {path: 'health/(.*)', method: RequestMethod.GET},
                {path: 'metrics', method: RequestMethod.GET}
            )
            // Apply to everything else
            .forRoutes({path: '*', method: RequestMethod.ALL});
    }
}