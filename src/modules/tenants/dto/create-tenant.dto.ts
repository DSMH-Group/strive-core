// src/modules/tenants/dto/create-tenant.dto.ts
import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty, IsString, IsUUID, Matches} from 'class-validator';

export class CreateTenantDto {
    @ApiProperty({ example: 'Power World Gyms' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: 'powerworld', description: 'Used for dynamic routing (powerworld.stride.lk)' })
    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-z0-9-]+$/, { message: 'Subdomain can only contain lowercase letters, numbers, and hyphens' })
    subdomain: string;

    @ApiProperty({ example: 'uuid-of-the-owner', description: 'Global User ID of the initial Org Admin' })
    @IsUUID()
    @IsNotEmpty()
    ownerId: string;
}
