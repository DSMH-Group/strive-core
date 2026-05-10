// src/common/middleware/tenant.middleware.ts
import { Injectable, NestMiddleware, BadRequestException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

// Extend the Express Request interface to include our tenantId
export interface TenantRequest extends Request {
    tenantId?: string;
}

@Injectable()
export class TenantMiddleware implements NestMiddleware {
    use(req: TenantRequest, res: Response, next: NextFunction) {
        // We typically expect the Next.js frontend to pass this header
        const tenantId = req.headers['x-tenant-id'] as string;

        if (!tenantId) {
            // Reject requests that don't specify which gym they are trying to access
            throw new BadRequestException('Tenant ID is missing from headers.');
        }

        // Attach it to the request so your Controllers and Services can use it
        req.tenantId = tenantId;
        next();
    }
}