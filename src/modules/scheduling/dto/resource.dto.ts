// src/modules/scheduling/dto/resource.dto.ts
import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';
import {IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, IsUUID, Min} from 'class-validator';
import {ResourceType} from '@prisma/client';

export class CreateResourceDto {
    @ApiProperty({example: 'Squash Court 1'})
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({enum: ResourceType, example: ResourceType.PHYSICAL})
    @IsEnum(ResourceType)
    type: ResourceType;

    @ApiProperty({example: 1, description: 'Max simultaneous bookings'})
    @IsInt()
    @Min(1)
    capacity: number;

    @ApiPropertyOptional({description: 'Link to a membership ID if type is HUMAN'})
    @IsOptional()
    @IsUUID()
    linkedMemberId?: string;
}

// 🚀 NEW: The Response Model for Swagger Documentation
export class ResourceResponseDto {
    @ApiProperty({example: 'uuid-1234-5678-9012'})
    id: string;

    @ApiProperty({example: 'Squash Court 1'})
    name: string;

    @ApiProperty({enum: ResourceType, example: ResourceType.PHYSICAL})
    type: ResourceType;

    @ApiProperty({example: 1})
    capacity: number;

    @ApiPropertyOptional({example: 'uuid-member-1234'})
    linkedMemberId?: string;

    @ApiProperty({example: 'uuid-tenant-1234'})
    tenantId: string;

    @ApiProperty({example: '2026-05-10T10:00:00Z'})
    createdAt: Date;

    @ApiProperty({example: '2026-05-10T10:00:00Z'})
    updatedAt: Date;
}