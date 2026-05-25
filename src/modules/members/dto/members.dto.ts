// src/modules/members/dto/members.dto.ts
import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';
import {IsBoolean, IsDateString, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, IsUUID, Min} from 'class-validator';
import {MembershipStatus, Role} from '@prisma/client';

export class CreateMembershipDto {
    @ApiProperty({ example: 'uuid-from-global-users-table' })
    @IsUUID()
    @IsNotEmpty()
    userId: string;

    @ApiProperty({ enum: Role, example: Role.MEMBER })
    @IsEnum(Role)
    @IsNotEmpty()
    initialRole: Role;

    @ApiPropertyOptional({example: 'RFID-2344'})
    @IsString()
    @IsOptional()
    rfidTag?: string;
}

export class UpdateMembershipDto {
    @ApiPropertyOptional({ enum: MembershipStatus })
    @IsEnum(MembershipStatus)
    @IsOptional()
    status?: MembershipStatus;

    // 🚀 NEW: Expose Token Wallet for manual admin adjustments
    @ApiPropertyOptional({example: 10, description: 'Manually override token balance'})
    @IsInt()
    @Min(0)
    @IsOptional()
    tokensLeft?: number;

    // 🚀 NEW: Expose Plan Assignment for manual overrides
    @ApiPropertyOptional({example: 'uuid-plan-1234', description: 'Manually assign or change an active plan'})
    @IsUUID()
    @IsOptional()
    activePlanId?: string;

    // 🚀 NEW: Expose Auto-Renew toggle
    @ApiPropertyOptional({example: true, description: 'Toggle auto-renew status'})
    @IsBoolean()
    @IsOptional()
    autoRenewEnabled?: boolean;

    // 🚀 NEW: Expose Expiration Date for manual extensions
    @ApiPropertyOptional({example: '2026-06-15T00:00:00Z', description: 'Manually set expiration date'})
    @IsDateString()
    @IsOptional()
    expiresAt?: string;

    // 🚀 NEW: Allow updating the physical keyfob/RFID tag if lost
    @ApiPropertyOptional({example: 'RFID-9999', description: 'Assign or update hardware RFID tag'})
    @IsString()
    @IsOptional()
    rfidTag?: string;
}

export class TransitionMembershipDto {
    @ApiProperty({ enum: [MembershipStatus.SUSPENDED, MembershipStatus.GRACE_PERIOD, MembershipStatus.ACTIVE] })
    @IsEnum(MembershipStatus)
    @IsNotEmpty()
    targetState: MembershipStatus;
}

// ====================================================================
// 🚀 NEW: Swagger Response Models (For perfect API Documentation)
// ====================================================================

class MembershipRoleResponseDto {
    @ApiProperty({example: 'uuid-role-1234'})
    id: string;

    @ApiProperty({enum: Role, example: Role.MEMBER})
    role: Role;
}

export class MembershipResponseDto {
    @ApiProperty({example: 'uuid-membership-1234'})
    id: string;

    @ApiProperty({example: 'uuid-user-1234'})
    userId: string;

    @ApiProperty({example: 'uuid-tenant-1234'})
    tenantId: string;

    @ApiProperty({enum: MembershipStatus, example: MembershipStatus.ACTIVE})
    status: MembershipStatus;

    @ApiPropertyOptional({example: 'RFID-2344'})
    rfidTag?: string;

    @ApiProperty({example: 6})
    tokensLeft: number;

    @ApiPropertyOptional({example: 'uuid-plan-1234'})
    activePlanId?: string;

    @ApiProperty({example: true})
    autoRenewEnabled: boolean;

    @ApiPropertyOptional({example: '2026-06-15T00:00:00Z'})
    expiresAt?: Date;

    @ApiProperty({example: '2026-05-10T10:00:00Z'})
    createdAt: Date;

    @ApiProperty({example: '2026-05-10T10:00:00Z'})
    updatedAt: Date;

    @ApiProperty({type: [MembershipRoleResponseDto]})
    roles: MembershipRoleResponseDto[];
}