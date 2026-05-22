// src/modules/users/users.controller.ts
import {Body, Controller, Get, HttpStatus, Patch, Post, UseGuards} from '@nestjs/common';
import {ApiBearerAuth, ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import {UsersService} from './users.service';
import {SyncUserWebhookDto} from './dto/sync-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {UserResponseDto} from './dto/user-response.dto';
import {SessionAuthGuard} from '../../common/guards/session-auth.guard';
import {BasicAuthGuard} from '../../common/guards/basic-auth.guard';
import {CurrentUser} from '../../common/decorators/current-user.decorator';

@ApiTags('Users & Identity')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Post('webhook')
    @UseGuards(BasicAuthGuard)
    @ApiOperation({
        summary: 'Sync User Profile',
        description: 'Keycloak webhook to upsert global user identity.'
    })
    @ApiResponse({status: HttpStatus.CREATED, description: 'User synced successfully.'})
    @ApiResponse({status: HttpStatus.UNAUTHORIZED, description: 'Basic Auth failure.'})
    async handleKeycloakWebhook(@Body() dto: SyncUserWebhookDto) {
        const user = await this.usersService.syncKeycloakUser(dto);
        return {success: true, userId: user.id};
    }

    @Get('me')
    @UseGuards(SessionAuthGuard)
    @ApiBearerAuth('Bearer-auth')
    @ApiOperation({summary: 'Get Current Profile'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Returns the global identity profile.',
        type: UserResponseDto
    })
    async getMe(@CurrentUser() user: any) {
        return this.usersService.getMe(user.id);
    }

    @Patch('me')
    @UseGuards(SessionAuthGuard)
    @ApiBearerAuth('Bearer-auth')
    @ApiOperation({summary: 'Update Current Profile'})
    @ApiResponse({status: HttpStatus.OK, description: 'Profile updated successfully.'})
    async updateMe(
        @CurrentUser() user: any,
        @Body() dto: UpdateUserDto,
    ) {
        return this.usersService.updateMe(user.id, dto);
    }
}