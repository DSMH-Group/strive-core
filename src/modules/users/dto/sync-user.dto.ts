// src/modules/users/dto/sync-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';

export class SyncUserWebhookDto {
    @ApiProperty({ description: 'The sub claim from Keycloak JWT', example: 'uuid-from-keycloak' })
    @IsString()
    @IsNotEmpty()
    keycloakId: string;

    @ApiProperty({ example: 'nimal.perera@example.lk' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: 'Nimal' })
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @ApiProperty({ example: 'Perera' })
    @IsString()
    @IsNotEmpty()
    lastName: string;

    @ApiProperty({
        example: '+94771234567',
        required: false,
        description: 'SL format required for SMS gateway integration'
    })
    @IsOptional()
    @IsString()
    @Matches(/^\+94\d{9}$/, { message: 'Phone must be a valid Sri Lankan number starting with +94 followed by 9 digits' })
    phone?: string;
}