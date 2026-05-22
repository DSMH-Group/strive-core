// src/common/guards/session-auth.guard.ts
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';

@Injectable()
export class SessionAuthGuard extends AuthGuard('bearer') { // Matches the strategy name
    handleRequest(err: any, user: any, info: any) {
        if (err || !user) {
            throw err || new UnauthorizedException('Missing or invalid session token');
        }
        return user;
    }
}