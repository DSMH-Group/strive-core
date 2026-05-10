// src/modules/tenants/dto/update-tenant.dto.ts
import { IsOptional, IsString, IsObject, ValidateNested, IsHexColor, IsUrl } from 'class-validator';
import { Type } from 'class-transformer';

class ThemeConfigDto {
    @IsOptional()
    @IsHexColor()
    primaryColor?: string;

    @IsOptional()
    @IsUrl()
    logoUrl?: string;
}

class TaxRulesDto {
    @IsOptional()
    vatPercentage?: number; // e.g., 18%

    @IsOptional()
    ssclPercentage?: number; // e.g., 2.5%
}

class GatewayKeysDto {
    @IsOptional()
    @IsString()
    payhereMerchantId?: string;

    @IsOptional()
    @IsString()
    payhereSecret?: string; // We must encrypt this in the service layer before saving to DB
}

export class UpdateTenantDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @ValidateNested()
    @Type(() => ThemeConfigDto)
    themeConfig?: ThemeConfigDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => TaxRulesDto)
    taxRules?: TaxRulesDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => GatewayKeysDto)
    gatewayKeys?: GatewayKeysDto;
}