// src/modules/auth/strategies/basic.strategy.ts
import { BasicStrategy as Strategy } from 'passport-http';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy) {
    constructor(private configService: ConfigService) {
        super({
            passReqToCallback: false,
        });
    }

    public validate = async (username: string, password: string): Promise<boolean> => {
        // In production, this should be a strong secret configured in both Keycloak and your Railway ENV vars
        const expectedUsername = this.configService.get<string>('WEBHOOK_USERNAME');
        const expectedPassword = this.configService.get<string>('WEBHOOK_PASSWORD');

        if (expectedUsername === username && expectedPassword === password) {
            return true;
        }
        throw new UnauthorizedException('Invalid webhook credentials');
    };
}