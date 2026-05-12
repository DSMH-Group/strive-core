// src/modules/documents/documents.module.ts
import { Module } from '@nestjs/common';
import { DocumentsController } from './documents.controller';
import { DocumentsService } from './documents.service';
import { PrismaService } from '../../database/prisma.service';
import {TenantPrismaService} from "../../database/tenant-prisma.service";

@Module({
    controllers: [DocumentsController],
    providers: [DocumentsService, TenantPrismaService],
})
export class DocumentsModule {}