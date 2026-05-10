// src/common/decorators/current-user.decorator.ts
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export interface JwtPayload {
    sub: string; // The Keycloak ID
    email_verified: boolean;
    name: string;
    preferred_username: string;
    given_name: string;
    family_name: string;
    email: string;
    realm_access?: { roles: string[] };
}

export const CurrentUser = createParamDecorator(
    (data: keyof JwtPayload | undefined, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        const user = request.user as JwtPayload;

        return data ? user?.[data] : user;
    },
);