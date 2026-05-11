// src/modules/auth/auth.module.ts
import {Module} from '@nestjs/common';
import {PassportModule} from '@nestjs/passport';
import {JwtStrategy} from './strategies/jwt.strategy';
import {BasicStrategy} from './strategies/basic.strategy';
import {PrismaModule} from "../../database/prisma.module";
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [PrismaModule, ConfigModule, PassportModule.register({defaultStrategy: 'jwt'})],
    providers: [JwtStrategy, BasicStrategy],
    exports: [PassportModule],
})
export class AuthModule {
}