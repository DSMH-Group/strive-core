// src/modules/plans/dto/plan.dto.ts
import {ApiProperty, ApiPropertyOptional, PartialType} from '@nestjs/swagger';
import {IsBoolean, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min} from 'class-validator';

export class CreatePlanDto {
    @ApiProperty({example: 'Standard', description: 'The display name of the tier'})
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({example: 12500, description: 'Monthly recurring price in the tenant base currency'})
    @IsNumber()
    @Min(0)
    monthlyPrice: number;

    @ApiProperty({example: 234, description: 'Number of check-in tokens granted per billing cycle'})
    @IsInt()
    @Min(0)
    sessionTokens: number;

    @ApiPropertyOptional({example: 234, description: 'Maximum tokens a user can hold (prevents rollover hoarding)'})
    @IsOptional()
    @IsInt()
    @Min(0)
    allocationCap?: number;
}

export class UpdatePlanDto extends PartialType(CreatePlanDto) {
    @ApiPropertyOptional({example: false, description: 'Set to false to archive the plan'})
    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
}

export class PlanResponseDto {
    @ApiProperty({example: 'uuid-plan-1234'})
    id: string;

    @ApiProperty({example: 'uuid-tenant-1234'})
    tenantId: string;

    @ApiProperty({example: 'Standard'})
    name: string;

    @ApiProperty({example: 12500})
    monthlyPrice: number;

    @ApiProperty({example: 234})
    sessionTokens: number;

    @ApiPropertyOptional({example: 234})
    allocationCap?: number;

    @ApiProperty({example: true})
    isActive: boolean;

    @ApiProperty({example: '2026-05-10T10:00:00Z'})
    createdAt: Date;

    @ApiProperty({example: '2026-05-10T10:00:00Z'})
    updatedAt: Date;
}