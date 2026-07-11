// src/common/guards/iot-device.guard.ts
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import * as crypto from 'crypto';

@Injectable()
export class IoTDeviceGuard implements CanActivate {
    constructor(private readonly prisma: PrismaService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const deviceToken = request.headers['x-device-token'] as string;
        const tenantId = request.headers['x-tenant-id'] as string;

        if (!deviceToken || !tenantId) {
            throw new UnauthorizedException('Missing x-device-token or x-tenant-id header.');
        }

        const hashedToken = crypto.createHash('sha256').update(deviceToken).digest('hex');

        const device = await this.prisma.device.findFirst({
            where: {
                tenantId,
                token: hashedToken,
                status: 'ACTIVE',
            },
        });

        if (!device) {
            throw new ForbiddenException('Invalid or inactive device token.');
        }

        request.device = device;
        request.tenantId = tenantId;
        return true;
    }
}
