// src/modules/users/dto/user-response.dto.ts
import {ApiProperty} from '@nestjs/swagger';

export class TenantResponseDto {
    @ApiProperty({example: 'b0e8400-e29b-41d4-a716-446655440001'})
    id: string;

    @ApiProperty({example: 'Power World Gyms'})
    name: string;

    @ApiProperty({example: 'powerworld'})
    slug: string;

    @ApiProperty({example: 'powerworld.stride.lk', required: false, nullable: true})
    domain?: string | null;
}

export class MembershipRoleResponseDto {
    @ApiProperty({example: 'c0e8400-e29b-41d4-a716-446655440002'})
    id: string;

    @ApiProperty({
        example: 'MEMBER',
        enum: ['ORG_ADMIN', 'MANAGER', 'TRAINER', 'MEMBER']
    })
    role: string;
}

export class MembershipResponseDto {
    @ApiProperty({example: 'a0e8400-e29b-41d4-a716-446655440003'})
    id: string;

    @ApiProperty({example: 'b0e8400-e29b-41d4-a716-446655440001'})
    tenantId: string;

    @ApiProperty({
        example: 'ACTIVE',
        enum: ['PENDING', 'ACTIVE', 'GRACE_PERIOD', 'SUSPENDED', 'CANCELLED', 'REVOKED']
    })
    status: string;

    @ApiProperty({type: () => TenantResponseDto})
    tenant: TenantResponseDto;

    @ApiProperty({type: () => [MembershipRoleResponseDto]})
    roles: MembershipRoleResponseDto[];
}

export class UserResponseDto {
    @ApiProperty({ example: '750e8400-e29b-41d4-a716-446655440000' })
    id: string;

    @ApiProperty({ example: 'auth0|123456789', description: 'The unique ID from Keycloak' })
    keycloakId: string;

    @ApiProperty({ example: 'nimal.perera@example.lk' })
    email: string;

    @ApiProperty({ example: 'Nimal' })
    firstName: string;

    @ApiProperty({ example: 'Perera' })
    lastName: string;

    @ApiProperty({ example: '+94771234567', required: false })
    phone?: string;

    @ApiProperty({ example: '2026-05-10T10:00:00Z' })
    createdAt: Date;

    // This explicitly tells Swagger to expose the ecosystem matrix we fetch via Prisma
    @ApiProperty({type: () => [MembershipResponseDto], required: false})
    memberships?: MembershipResponseDto[];
}