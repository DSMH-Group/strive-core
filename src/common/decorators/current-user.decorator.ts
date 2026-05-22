// src/common/decorators/current-user.decorator.ts
import {createParamDecorator, ExecutionContext} from '@nestjs/common';
import {User} from "@prisma/client";

export type UserEntity = User;

export const CurrentUser = createParamDecorator(
    (data: keyof UserEntity | undefined, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        const user = request.user as UserEntity;

        if (!user) return null;

        // 2. Remove the 'sub' mapping logic
        // If your code relies on 'sub', it's better to update those specific
        // places to use 'user.id' directly rather than keeping this mapper.
        return data ? user?.[data] : user;
    },
);