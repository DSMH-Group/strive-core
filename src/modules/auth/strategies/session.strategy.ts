import {Injectable, UnauthorizedException} from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport';
import {Strategy} from 'passport-http-bearer';
import {PrismaService} from '../../../database/prisma.service';

@Injectable()
export class SessionStrategy extends PassportStrategy(Strategy, 'bearer') {
    constructor(private prisma: PrismaService) {
        super();
    }

    async validate(token: string) {
        // 1. Look up the session in the 'auth' schema
        const session = await this.prisma.authSession.findUnique({
            where: {token},
            include: {user: true},
        });

        if (!session || new Date(session.expiresAt) < new Date()) {
            throw new UnauthorizedException('Invalid or expired session');
        }

        // 2. Sync to 'stride' schema user record (Auto-provisioning)
        // This maintains the bridge between better-auth and your domain models
        const strideUser = await this.prisma.user.upsert({
            where: {id: session.userId}, // Assuming session.userId maps to user.id
            update: {},
            create: {
                id: session.userId,
                email: session.user.email,
                firstName: session.user.name?.split(' ')[0] || 'User',
                lastName: session.user.name?.split(' ')[1] || '',
            },
        });

        return strideUser; // This populates request.user
    }
}