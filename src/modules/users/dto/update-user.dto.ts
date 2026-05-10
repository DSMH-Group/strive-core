// src/modules/users/dto/update-user.dto.ts
import { PartialType, PickType } from '@nestjs/swagger'; // CRITICAL: Use swagger version
import { SyncUserWebhookDto } from './sync-user.dto';

export class UpdateUserDto extends PartialType(
    PickType(SyncUserWebhookDto, ['firstName', 'lastName', 'phone'] as const)
) {}