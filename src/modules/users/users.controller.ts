// src/modules/users/users.controller.ts
import { Controller, Get, Post, Patch, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { SyncUserWebhookDto } from './dto/sync-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { BasicAuthGuard } from '../../common/guards/basic-auth.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

@Controller('api/v1/users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('webhook')
    @UseGuards(BasicAuthGuard) // Protects against unauthorized webhook triggers
    async handleKeycloakWebhook(@Body() dto: SyncUserWebhookDto) {
        const user = await this.usersService.syncKeycloakUser(dto);
        return { success: true, userId: user.id };
    }

    @Get('me')
    @UseGuards(JwtAuthGuard) // Requires a valid Keycloak JWT
    async getMe(@CurrentUser() user: any) {
        // user.sub is standard for Keycloak JWTs representing the user ID
        return this.usersService.getMe(user.sub);
    }

    @Patch('me')
    @UseGuards(JwtAuthGuard)
    async updateMe(
        @CurrentUser() user: any,
        @Body() dto: UpdateUserDto,
    ) {
        return this.usersService.updateMe(user.sub, dto);
    }
}