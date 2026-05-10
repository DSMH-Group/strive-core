// src/modules/tenants/tenants.module.ts
import { Module } from '@nestjs/common';
import { TenantsController } from './tenants.controller';
import { TenantsService } from './tenants.service';
import { PrismaService } from '../../database/prisma.service';
import { EncryptionService } from '../../common/services/encryption.service';

@Module({
    controllers: [TenantsController],
    providers: [
        TenantsService,
        PrismaService,
        EncryptionService // Provided here so the service can inject it
    ],
    exports: [TenantsService], // Exported so Memberships/Billing modules can verify tenant existence
})
export class TenantsModule {}