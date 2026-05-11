// src/modules/members/dto/members.dto.ts
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID} from 'class-validator';
import { Role, MembershipStatus } from '@prisma/client'; // <-- Import directly from Prisma

export class CreateMembershipDto {
    @ApiProperty({ example: 'uuid-from-global-users-table' })
    @IsUUID()
    @IsNotEmpty()
    userId: string;

    @ApiProperty({ enum: Role, example: Role.MEMBER })
    @IsEnum(Role)
    @IsNotEmpty()
    initialRole: Role;

    @ApiProperty( { example: 'RFID-2344' })
    @IsString()
    @IsOptional()
    rfidTag: string;
}

export class UpdateMembershipDto {
    // If updating roles, we'd typically need a different array structure,
    // but for now we'll focus on status updates.
    @ApiPropertyOptional({ enum: MembershipStatus })
    @IsEnum(MembershipStatus)
    @IsOptional()
    status?: MembershipStatus;
}

export class TransitionMembershipDto {
    @ApiProperty({ enum: [MembershipStatus.SUSPENDED, MembershipStatus.GRACE_PERIOD, MembershipStatus.ACTIVE] })
    @IsEnum(MembershipStatus)
    @IsNotEmpty()
    targetState: MembershipStatus;
}