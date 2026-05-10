// src/modules/scheduling/dto/resource.dto.ts
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, IsUUID, Min } from 'class-validator';
import { ResourceType } from '@prisma/client';

export class CreateResourceDto {
    @ApiProperty({ example: 'Squash Court 1' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ enum: ResourceType, example: ResourceType.PHYSICAL })
    @IsEnum(ResourceType)
    type: ResourceType;

    @ApiProperty({ example: 1, description: 'Max simultaneous bookings' })
    @IsInt()
    @Min(1)
    capacity: number;

    @ApiPropertyOptional({ description: 'Link to a membership ID if type is HUMAN' })
    @IsOptional()
    @IsUUID()
    linkedMemberId?: string;
}