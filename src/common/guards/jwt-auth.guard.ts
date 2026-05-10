// src/common/guards/jwt-auth.guard.ts
import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext) {
        // Add any custom authentication logic here if needed
        return super.canActivate(context);
    }

    handleRequest(err, user, info) {
        // You can throw custom NestJS exceptions based on passport errors
        if (err || !user) {
            throw err || new UnauthorizedException('Missing or invalid Stride access token');
        }
        return user;
    }
}