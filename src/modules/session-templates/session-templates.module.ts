// src/modules/session-templates/session-templates.module.ts
import { Module } from '@nestjs/common';
import { PrismaModule } from '../../database/prisma.module';
import { SessionTemplatesController } from './session-templates.controller';
import { SessionTemplatesService } from './session-templates.service';

@Module({
    imports: [PrismaModule],
    controllers: [SessionTemplatesController],
    providers: [SessionTemplatesService],
    exports: [SessionTemplatesService],
})
export class SessionTemplatesModule {}
