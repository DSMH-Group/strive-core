// src/modules/session-templates/dto/session-template.dto.ts
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSessionTemplateDto {
    @ApiProperty({ example: 'Push Day' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: [{ name: 'Bench Press', sets: 4 }] })
    @IsArray()
    @IsNotEmpty()
    exercises: any[];
}

export class UpdateSessionTemplateDto {
    @ApiPropertyOptional({ example: 'Push Day Extra' })
    @IsString()
    @IsOptional()
    name?: string;

    @ApiPropertyOptional({ example: [{ name: 'Bench Press', sets: 5 }] })
    @IsArray()
    @IsOptional()
    exercises?: any[];
}
