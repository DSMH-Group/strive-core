// src/modules/users/dto/user-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';

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
}