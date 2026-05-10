// src/modules/users/dto/sync-user.dto.ts
import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';

export class SyncUserWebhookDto {
    @IsString()
    @IsNotEmpty()
    keycloakId: string; // The 'sub' claim from Keycloak

    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsOptional()
    @IsString()
    // Optional: Regex to ensure SL phone format (e.g., +94771234567)
    @Matches(/^\+94\d{9}$/, { message: 'Phone must be a valid Sri Lankan number starting with +94' })
    phone?: string;
}