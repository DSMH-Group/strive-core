// src/common/decorators/current-user.decorator.ts
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import {User} from "@prisma/client";

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

export type UserEntity = User;

export const CurrentUser = createParamDecorator(
    (data: keyof UserEntity | 'sub' | undefined, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        const user = request.user as UserEntity;

        if (!user) return null;

        // Backward compatibility: map 'sub' request to 'keycloakId'
        if (data === 'sub') return user.keycloakId;

        return data ? user?.[data] : user;
    },
);