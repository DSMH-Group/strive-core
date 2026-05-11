// src/modules/members/dto/invitations.dto.ts
import { IsEmail, IsEnum, Matches, ValidateIf, IsOptional } from 'class-validator';
import { Role } from '@prisma/client';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateInvitationDto {
    @ApiPropertyOptional({ example: 'nimal@example.lk' })
    @ValidateIf(o => !o.phone) // Require email ONLY if phone is missing
    @IsEmail()
    email?: string;

    @ApiPropertyOptional({ example: '+94771234567', description: 'Sri Lankan format required' })
    @ValidateIf(o => !o.email) // Require phone ONLY if email is missing
    @Matches(/^\+94\d{9}$/, { message: 'Phone must be a valid Sri Lankan number (+94...)' })
    phone?: string;

    @ApiProperty({ enum: Role, example: Role.MEMBER })
    @IsEnum(Role)
    initialRole: Role;
}