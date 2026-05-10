// src/modules/scheduling/dto/booking.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateBookingDto {
    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    resourceId: string;

    @ApiProperty({ description: 'The Membership ID of the member booking the slot' })
    @IsUUID()
    @IsNotEmpty()
    membershipId: string;

    @ApiProperty({ example: '2026-05-10T10:00:00Z' })
    @IsDateString()
    @IsNotEmpty()
    startTime: string;

    @ApiProperty({ example: '2026-05-10T11:00:00Z' })
    @IsDateString()
    @IsNotEmpty()
    endTime: string;
}