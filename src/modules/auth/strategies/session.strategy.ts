// src/common/guards/session-auth.guard.ts
import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from '@nestjs/common';
import {PrismaService} from '../../../database/prisma.service'; // Adjust path if needed

@Injectable()
export class SessionAuthGuard implements CanActivate {
    constructor(private prisma: PrismaService) {
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;

        // 1. Sniff out the Authorization Header
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            console.error('[SessionAuthGuard] Missing or malformed Authorization header');
            throw new UnauthorizedException('Missing or invalid session token');
        }

        // 2. Safely parse and URL-decode the incoming session token string
        let token = authHeader.split(' ')[1];
        try {
            token = decodeURIComponent(token);
        } catch (e) {
            console.error('[SessionAuthGuard] Failed to decode token string');
        }

        console.log('[SessionAuthGuard] Processing Token Lookup:', token);

        // 3. Match against your pristine authSession database table records
        const session = await this.prisma.authSession.findUnique({
            where: {token: token},
            include: {user: true},
        });

        if (!session) {
            console.error('[SessionAuthGuard] Database miss: No session found matching token');
            throw new UnauthorizedException('Missing or invalid session token');
        }

        if (new Date(session.expiresAt) < new Date()) {
            console.error('[SessionAuthGuard] Token expired. Expiry:', session.expiresAt);
            throw new UnauthorizedException('Missing or invalid session token');
        }

        // 4. Run your exact same cross-schema data sync logic directly here!
        console.log('[SessionAuthGuard] Session valid. Syncing user profile:', session.userId);
        const strideUser = await this.prisma.user.upsert({
            where: {id: session.userId},
            update: {},
            create: {
                id: session.userId,
                email: session.user.email,
                firstName: session.user.name?.split(' ')[0] || 'User',
                lastName: session.user.name?.split(' ')[1] || '',
            },
        });

        // 5. Populate request.user natively
        request.user = strideUser;
        return true;
    }
}