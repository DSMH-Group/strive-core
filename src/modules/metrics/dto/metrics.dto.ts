// src/modules/metrics/dto/metrics.dto.ts
import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';
import { IsEnum, IsJSON, IsNotEmpty, IsObject, IsOptional, IsString, IsUUID } from 'class-validator';
import { Prisma } from '@prisma/client';

export class CreateMetricDto {
    @ApiProperty({ example: 'WEIGHT' })
    @IsString()
    @IsNotEmpty()
    metricType: string;

    @ApiProperty({ example: { value: 75.5, unit: 'kg' } })
    @IsNotEmpty()
    @IsObject()
    data: Prisma.JsonValue;

    @ApiPropertyOptional({ description: 'Specific member if logged by a Trainer' })
    @IsUUID()
    @IsOptional()
    membershipId?: string;
}

export enum HealthProvider {
    APPLE_HEALTH = 'APPLE_HEALTH',
    HEALTH_CONNECT = 'HEALTH_CONNECT',
}

export class HealthSyncDto {
    @ApiProperty({ enum: HealthProvider })
    @IsEnum(HealthProvider)
    provider: HealthProvider;

    @ApiProperty({ example: [{ type: 'STEPS', value: 10000, date: '2026-05-10T10:00:00Z' }] })
    @IsNotEmpty()
    dataPoints: any[];
}