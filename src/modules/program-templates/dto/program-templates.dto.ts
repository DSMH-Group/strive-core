// src/modules/program-templates/dto/program-templates.dto.ts
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';

export class CreateProgramTemplateDto {
    @ApiProperty({ example: 'Push-Pull-Legs Hypertrophy' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: 'Build Lean Muscle' })
    @IsString()
    @IsNotEmpty()
    goal: string;

    @ApiPropertyOptional({ example: 12 })
    @IsInt()
    @IsOptional()
    totalWeeks?: number;

    @ApiProperty({ example: [] })
    @IsNotEmpty()
    routines: any;
}

export class UpdateProgramTemplateDto {
    @ApiPropertyOptional({ example: 'Push-Pull-Legs Hypertrophy' })
    @IsString()
    @IsOptional()
    name?: string;

    @ApiPropertyOptional({ example: 'Build Lean Muscle' })
    @IsString()
    @IsOptional()
    goal?: string;

    @ApiPropertyOptional({ example: 12 })
    @IsInt()
    @IsOptional()
    totalWeeks?: number;

    @ApiPropertyOptional({ example: [] })
    @IsOptional()
    routines?: any;
}
