// src/modules/auth/strategies/jwt.strategy.ts
import {ExtractJwt, Strategy} from 'passport-jwt';
import {PassportStrategy} from '@nestjs/passport';
import {Injectable} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {passportJwtSecret} from 'jwks-rsa';
import {PrismaService} from "../../../database/prisma.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        configService: ConfigService,
        private readonly prisma: PrismaService // 💡 INJECT IT HERE
    ) {
        const keycloakBaseUrl = configService.get<string>('KEYCLOAK_BASE_URL');
        const realm = configService.get<string>('KEYCLOAK_REALM');
        const jwksUri = `${keycloakBaseUrl}/realms/${realm}/protocol/openid-connect/certs`;
        console.log("--- DEBUG: JWKS URI being used ---", jwksUri);

        super({
            secretOrKeyProvider: passportJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: `${configService.get('KEYCLOAK_BASE_URL')}/realms/${configService.get('KEYCLOAK_REALM')}/protocol/openid-connect/certs`,
            }),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            // 1. Explicitly set the expected issuer
            issuer: `${configService.get('KEYCLOAK_BASE_URL')}/realms/${configService.get('KEYCLOAK_REALM')}`,
            // 2. Explicitly set the expected audience
            audience: 'strive-api',
            algorithms: ['RS256'],
        });
    }

    async validate(payload: any) {
        console.log("--- PASSPORT JWT STRATEGY: Received Payload ---");
        console.log("Payload:", JSON.stringify(payload, null, 2));

        const { sub, email, given_name, family_name } = payload;

        // 1. Check if user exists in Strive DB
        let user = await this.prisma.user.findUnique({
            where: { keycloakId: sub }
        });

        // 2. If not, "Auto-Provision" (JIT Sync)
        if (!user) {
            user = await this.prisma.user.create({
                data: {
                    keycloakId: sub,
                    email: email,
                    firstName: given_name || '',
                    lastName: family_name || '',
                    isActive: true
                }
            });
            console.log(`🚀 New User Auto-Synced from JWT: ${email}`);
        }

        // 💡 Now 'req.user' contains the full DB user, including our internal 'id' (UUID)
        return user;
    }
}