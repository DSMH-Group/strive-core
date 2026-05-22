// src/modules/auth/auth.module.ts
import {Module} from '@nestjs/common';
import {PassportModule} from '@nestjs/passport';
import {BasicStrategy} from './strategies/basic.strategy';
import {PrismaModule} from "../../database/prisma.module";
import {ConfigModule} from "@nestjs/config";
import {SessionStrategy} from "./strategies/session.strategy";

@Module({
    imports: [PrismaModule, ConfigModule, PassportModule.register({defaultStrategy: 'bearer'})],
    providers: [SessionStrategy, BasicStrategy],
    exports: [PassportModule],
})
export class AuthModule {
}