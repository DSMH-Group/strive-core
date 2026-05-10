// src/modules/attendance/dto/attendance.dto.ts
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, IsDateString } from 'class-validator';

export enum AuthMethod {
    RFID = 'RFID',
    QR = 'QR',
    MANUAL = 'MANUAL',
}

export class CreateAttendanceDto {
    @ApiPropertyOptional({ description: 'Internal Membership UUID' })
    @IsOptional()
    @IsUUID()
    membershipId?: string;

    @ApiPropertyOptional({ description: 'Raw RFID hex/uid from scanner' })
    @IsOptional()
    @IsString()
    rfidTag?: string;

    @ApiProperty({ enum: AuthMethod, example: AuthMethod.RFID })
    @IsEnum(AuthMethod)
    @IsNotEmpty()
    authMethod: AuthMethod;

    @ApiPropertyOptional({ description: 'Required for offline sync from IoT devices' })
    @IsOptional()
    @IsDateString()
    checkInTime?: string;
}

export class UpdateAttendanceDto {
    @ApiProperty({ description: 'ISO String for checkout' })
    @IsDateString()
    @IsNotEmpty()
    checkoutTime: string;
}

export class AttendanceQueryDto {
    @ApiPropertyOptional()
    @IsOptional()
    @IsDateString()
    startDate?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsDateString()
    endDate?: string;
}