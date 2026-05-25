// src/modules/scheduling/dto/booking.dto.ts
import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';
import {IsDateString, IsNotEmpty, IsUUID} from 'class-validator';
import {ResourceResponseDto} from './resource.dto'; // Import for nesting

export class CreateBookingDto {
    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    resourceId: string;

    @ApiProperty({description: 'The Membership ID of the member booking the slot'})
    @IsUUID()
    @IsNotEmpty()
    membershipId: string;

    @ApiProperty({example: '2026-05-10T10:00:00Z'})
    @IsDateString()
    @IsNotEmpty()
    startTime: string;

    @ApiProperty({example: '2026-05-10T11:00:00Z'})
    @IsDateString()
    @IsNotEmpty()
    endTime: string;
}

// 🚀 NEW: The Response Model for Swagger Documentation
export class BookingResponseDto {
    @ApiProperty({example: 'uuid-booking-1234'})
    id: string;

    @ApiProperty({example: 'uuid-resource-1234'})
    resourceId: string;

    @ApiProperty({example: 'uuid-membership-1234'})
    membershipId: string;

    @ApiProperty({example: '2026-05-10T10:00:00Z'})
    startTime: Date;

    @ApiProperty({example: '2026-05-10T11:00:00Z'})
    endTime: Date;

    @ApiProperty({example: '2026-05-10T09:00:00Z'})
    createdAt: Date;

    @ApiProperty({example: '2026-05-10T09:00:00Z'})
    updatedAt: Date;

    // Optional because it's only included on GET requests (via Prisma 'include')
    @ApiPropertyOptional({type: () => ResourceResponseDto})
    resource?: ResourceResponseDto;
}