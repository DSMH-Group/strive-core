// src/modules/tenants/dto/update-tenant.dto.ts
import {ApiPropertyOptional} from '@nestjs/swagger';
import {IsBoolean, IsHexColor, IsIn, IsNumber, IsOptional, IsString, IsUrl, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';

class ThemeConfigDto {
    @ApiPropertyOptional({example: '#ea580c'})
    @IsOptional()
    @IsHexColor()
    primaryColor?: string;

    @ApiPropertyOptional({example: 'https://s3.amazonaws.com/logo.png'})
    @IsOptional()
    @IsUrl()
    logoUrl?: string;

    // 🚀 FIXED: Expanded the validation array to accept the new theme options
    @ApiPropertyOptional({example: 'dark', description: 'Base application theme'})
    @IsOptional()
    @IsIn(['light', 'white', 'warm', 'cool', 'dark', 'midnight', 'navy', 'slate'], {message: 'Invalid themeMode selected'})
    themeMode?: 'light' | 'white' | 'warm' | 'cool' | 'dark' | 'midnight' | 'navy' | 'slate';

    @ApiPropertyOptional({example: 0.5, description: 'Base border radius for UI components (rem)'})
    @IsOptional()
    @IsNumber()
    radius?: number;

    @ApiPropertyOptional({example: 'sans', description: 'Tailwind font family token'})
    @IsOptional()
    @IsString()
    fontFamily?: string;

    // 🚀 NEW: Added the sidebarTheme property to the payload validation
    @ApiPropertyOptional({example: 'default', description: 'Sidebar coloring strategy'})
    @IsOptional()
    @IsIn(['default', 'dark', 'brand'], {message: 'sidebarTheme must be default, dark, or brand'})
    sidebarTheme?: 'default' | 'dark' | 'brand';
}

class TaxRulesDto {
    @ApiPropertyOptional({example: 18})
    @IsOptional()
    @IsNumber()
    vatPercentage?: number; // e.g., 18%

    @ApiPropertyOptional({example: 2.5})
    @IsOptional()
    @IsNumber()
    ssclPercentage?: number; // e.g., 2.5%
}

class GatewayKeysDto {
    @ApiPropertyOptional({example: '123456789'})
    @IsOptional()
    @IsString()
    payhereMerchantId?: string;

    @ApiPropertyOptional({example: 'plain-text-secret'})
    @IsOptional()
    @IsString()
    payhereSecret?: string; // Encrypted in the service layer before saving
}

class BusinessRulesDto {
    @ApiPropertyOptional({example: true, description: 'Toggle whether members can purchase manual top-ups'})
    @IsOptional()
    @IsBoolean()
    allowTokenTopUps?: boolean;

    @ApiPropertyOptional({example: 'LKR', description: 'Base currency for checkout generation'})
    @IsOptional()
    @IsString()
    defaultCurrency?: string;

    @ApiPropertyOptional({example: 1000, description: 'Price per individual token if top-ups are enabled'})
    @IsOptional()
    @IsNumber()
    tokenPrice?: number;

    @ApiPropertyOptional({
        example: false,
        description: 'If false, members cannot buy plans directly; they must be invoiced by an admin.'
    })
    @IsOptional()
    @IsBoolean()
    allowSelfService?: boolean;
}

export class UpdateTenantDto {
    @ApiPropertyOptional({example: 'Power World Gyms'})
    @IsOptional()
    @IsString()
    name?: string;

    @ApiPropertyOptional({type: ThemeConfigDto})
    @IsOptional()
    @ValidateNested()
    @Type(() => ThemeConfigDto)
    themeConfig?: ThemeConfigDto;

    @ApiPropertyOptional({type: TaxRulesDto})
    @IsOptional()
    @ValidateNested()
    @Type(() => TaxRulesDto)
    taxRules?: TaxRulesDto;

    @ApiPropertyOptional({type: GatewayKeysDto})
    @IsOptional()
    @ValidateNested()
    @Type(() => GatewayKeysDto)
    gatewayKeys?: GatewayKeysDto;

    @ApiPropertyOptional({type: BusinessRulesDto})
    @IsOptional()
    @ValidateNested()
    @Type(() => BusinessRulesDto)
    businessRules?: BusinessRulesDto;
}