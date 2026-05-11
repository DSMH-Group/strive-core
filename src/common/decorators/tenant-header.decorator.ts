import { applyDecorators } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';

export function ApiTenantId() {
    return applyDecorators(
        ApiHeader({
            name: 'X-Tenant-ID',
            required: true, // It IS required for these specific routes!
            description: 'The unique UUID of the gym/tenant environment',
            schema: { type: 'string', format: 'uuid' },
        }),
    );
}