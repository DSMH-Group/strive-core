// src/modules/system/dto/resolve-tenant.dto.ts
import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class ResolveTenantDto {
    @IsString()
    @IsNotEmpty()
    // Basic regex to ensure it looks like a domain or subdomain
    @Matches(/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-21]{2,6}$/i, {
        message: 'Invalid domain format provided',
    })
    domain: string;
}