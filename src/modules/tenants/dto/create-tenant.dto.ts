// src/modules/tenants/dto/create-tenant.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID, Matches } from 'class-validator';

export class CreateTenantDto {
    @ApiProperty({ example: 'Power World Gyms' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: 'powerworld', description: 'Used for dynamic routing (powerworld.stride.lk)' })
    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-z0-9-]+$/, { message: 'Subdomain can only contain lowercase letters, numbers, and hyphens' })
    subdomain: string;

    @ApiProperty({ example: 'uuid-of-the-owner', description: 'Global User ID of the initial Org Admin' })
    @IsUUID()
    @IsNotEmpty()
    ownerId: string;
}

// src/modules/tenants/dto/update-tenant.dto.ts
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsObject } from 'class-validator';

export class UpdateTenantDto {
    @ApiPropertyOptional({
        example: { primaryColor: '#FF0000', logoUrl: 'https://s3.../logo.png' },
        description: 'Public Whitelabel styling injected into Next.js'
    })
    @IsOptional()
    @IsObject()
    themeConfig?: Record<string, any>;

    @ApiPropertyOptional({
        example: { vat: 18, sscl: 2.5 },
        description: 'Dynamic tax rules for Sri Lankan compliance'
    })
    @IsOptional()
    @IsObject()
    taxRules?: Record<string, any>;

    @ApiPropertyOptional({
        example: { payhereMerchantId: '12345', payhereSecret: 'encrypted-string' },
        description: 'Encrypted payment gateway keys'
    })
    @IsOptional()
    @IsObject()
    gatewayKeys?: Record<string, any>;
}