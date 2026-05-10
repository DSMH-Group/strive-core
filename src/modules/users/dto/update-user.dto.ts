// src/modules/users/dto/update-user.dto.ts
import { PartialType, PickType } from '@nestjs/mapped-types';
import { SyncUserWebhookDto } from './sync-user.dto';

// We only allow updating phone and names via the Strive App.
// Email changes should ideally be handled directly in Keycloak.
export class UpdateUserDto extends PartialType(
    PickType(SyncUserWebhookDto, ['firstName', 'lastName', 'phone'] as const)
) {}