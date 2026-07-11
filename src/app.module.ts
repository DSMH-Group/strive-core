// src/app.module.ts
import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';

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
import {PlansModule} from "./modules/plans/plans.module";
import {BullModule} from '@nestjs/bullmq';
import {DevicesModule} from './modules/devices/devices.module';

@Module({
    imports: [
        // isGlobal: true makes ConfigService available everywhere without re-importing
        ConfigModule.forRoot({isGlobal: true}),
        BullModule.forRootAsync({
            useFactory: async (configService: ConfigService) => {
                const redisUrl = configService.get<string>('REDIS_URL');
                if (redisUrl) {
                    return {
                        connection: {
                            url: redisUrl,
                        },
                    };
                }
                return {
                    connection: {
                        host: configService.get<string>('REDISHOST', 'localhost'),
                        port: Number(configService.get<string>('REDISPORT', '6379')),
                        password: configService.get<string>('REDISPASSWORD'),
                    },
                };
            },
            inject: [ConfigService],
        }),
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
        SystemModule,
        PlansModule,
        DevicesModule
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(TenantMiddleware)
            .exclude(
                // --- GLOBAL IDENTITY ---
                {path: 'users/webhook', method: RequestMethod.POST},
                {path: 'users/me', method: RequestMethod.GET},
                {path: 'users/me', method: RequestMethod.PATCH},

                // --- TENANT PROVISIONING ---
                {path: 'tenants', method: RequestMethod.POST},

                // --- SYSTEM & INFRASTRUCTURE ---
                // Keep these as is, since health/metrics were excluded from the global prefix in main.ts
                {path: '/health/*path', method: RequestMethod.GET},
                {path: '/metrics', method: RequestMethod.GET},

                {path: '/users/webhook', method: RequestMethod.POST},
                {path: '/users/me', method: RequestMethod.GET},
                {path: '/users/me', method: RequestMethod.PATCH},

                // --- TENANT PROVISIONING ---
                {path: '/tenants', method: RequestMethod.POST},
                {path: '/tenants', method: RequestMethod.GET},

                // --- SYSTEM & INFRASTRUCTURE ---
                // Keep these as is, since health/metrics were excluded from the global prefix in main.ts
                {path: '/health/*path', method: RequestMethod.GET},
                {path: '/metrics', method: RequestMethod.GET}
            )
            .forRoutes({path: '*path', method: RequestMethod.ALL});
    }
}