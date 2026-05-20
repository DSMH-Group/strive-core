// src/common/middleware/tenant.middleware.ts
import {Injectable, NestMiddleware} from '@nestjs/common';
import {NextFunction, Request, Response} from 'express';

// Extend the Express Request interface to include our tenantId
export interface TenantRequest extends Request {
    tenantId?: string;
}

@Injectable()
export class TenantMiddleware implements NestMiddleware {
    use(req: TenantRequest, res: Response, next: NextFunction) {
        // Just extract the header if it exists.
        // Let the Guard or Controller logic enforce presence if needed.
        const tenantId = req.headers['x-tenant-id'] as string;
        if (tenantId) {
            req.tenantId = tenantId;
        }
        next();
    }
}