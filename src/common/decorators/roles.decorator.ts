// src/common/decorators/roles.decorator.ts
import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';

// Accepts a list of roles (e.g., @Roles('SYSTEM_ADMIN', 'ORG_ADMIN'))
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);