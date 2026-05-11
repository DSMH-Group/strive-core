// src/app.module.ts
import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';

// Core Modules
import {AuthModule} from './modules/auth/auth.module';
import {UsersModule} from './modules/users/users.module';

// Middleware
import {TenantMiddleware} from './common/middleware/tenant.middleware';
import {PrismaModule} from "./database/prisma.module";
import {TenantsModule} from "./modules/tenants/tenants.module";
import {MembersModule} from "./modules/members/members.module";
import {BillingModule} from "./modules/billing/billing.module";
import {SchedulingModule} from "./modules/scheduling/scheduling.module";
import {AttendanceModule} from "./modules/attendance/attendance.module";
import {MetricsModule} from "./modules/metrics/metrics.module";
import {DocumentsModule} from "./modules/documents/documents.module";
import {CommsAuditModule} from "./modules/comms-audit/comms-audit.module";
import {SystemModule} from "./modules/system/system.module";

@Module({
    imports: [
        // isGlobal: true makes ConfigService available everywhere without re-importing
        ConfigModule.forRoot({isGlobal: true}),
        PrismaModule,
        AuthModule,
        UsersModule,
        TenantsModule,
        MembersModule,
        BillingModule,
        AttendanceModule,
        SchedulingModule,
        MetricsModule,
        DocumentsModule,
        CommsAuditModule,
        SystemModule
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(TenantMiddleware)
            .exclude(
                // --- GLOBAL IDENTITY ---
                // Webhook to sync Keycloak user (Basic Auth, no tenant)
                {path: 'api/v1/users/webhook', method: RequestMethod.POST},
                // Fetching/Updating Global Profile (JWT Auth, no tenant)
                {path: 'api/v1/users/me', method: RequestMethod.GET},
                {path: 'api/v1/users/me', method: RequestMethod.PATCH},

                // --- TENANT PROVISIONING ---
                // Creating a new gym environment (JWT Auth, no tenant yet)
                {path: 'api/v1/tenants', method: RequestMethod.POST},

                // --- SYSTEM & INFRASTRUCTURE ---
                {path: 'health/*path', method: RequestMethod.GET},
                {path: 'metrics', method: RequestMethod.GET}
            )
            .forRoutes({path: '*path', method: RequestMethod.ALL});
    }
}