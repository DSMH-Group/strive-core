// src/modules/auth/strategies/jwt.strategy.ts
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { passportJwtSecret } from 'jwks-rsa';
import { JwtPayload } from '../../../common/decorators/current-user.decorator';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(configService: ConfigService) {
        // Construct the Keycloak JWKS URL
        const keycloakBaseUrl = configService.get<string>('KEYCLOAK_BASE_URL'); // e.g., https://auth.strive.lk
        const realm = configService.get<string>('KEYCLOAK_REALM'); // e.g., strive-production
        const jwksUri = `${keycloakBaseUrl}/realms/${realm}/protocol/openid-connect/certs`;

        super({
            secretOrKeyProvider: passportJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: jwksUri,
            }),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            // Keycloak signs with RS256 by default
            algorithms: ['RS256'],
            // We don't pass audience validation here unless strictly configured in Keycloak
            ignoreExpiration: false,
        });
    }

    // Whatever is returned here is injected into req.user
    async validate(payload: JwtPayload) {
        return payload;
    }
}