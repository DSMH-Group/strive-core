// src/modules/devices/devices.controller.ts
import { Controller, Get, Post, Patch, Delete, Body, Headers, Param, UseGuards, Request, Req } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { SessionAuthGuard } from '../../common/guards/session-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { IoTDeviceGuard } from '../../common/guards/iot-device.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { ApiTenantId } from '../../common/decorators/tenant-header.decorator';

@Controller() // Endpoints mapped via route prefix: /api/v1/...
@ApiTenantId()
export class DevicesController {
    constructor(private readonly devicesService: DevicesService) {}

    // Public Webhook Ingress (IoT Device Token Auth)
    @Post('devices/ingress')
    @UseGuards(IoTDeviceGuard, RolesGuard)
    async ingress(
        @Headers('x-tenant-id') tenantId: string,
        @Headers('content-type') contentType: string,
        @Body() body: any,
        @Req() req: any,
    ) {
        // If content-type is text/xml or application/xml, the body might need to be parsed
        // from raw request buffer depending on NestJS middleware. We handle string or parsed object.
        const payload = typeof body === 'string' || Buffer.isBuffer(body) ? String(body) : body;
        return this.devicesService.processIngress(tenantId, req.device, payload, contentType || 'application/json');
    }

    // Admin CRUD endpoints
    @Get('devices')
    @UseGuards(SessionAuthGuard, RolesGuard)
    @Roles('ORG_ADMIN', 'MANAGER')
    async list(@Headers('x-tenant-id') tenantId: string) {
        return this.devicesService.listDevices(tenantId);
    }

    @Post('devices')
    @UseGuards(SessionAuthGuard, RolesGuard)
    @Roles('ORG_ADMIN', 'MANAGER')
    async create(
        @Headers('x-tenant-id') tenantId: string,
        @Body() body: { name: string; location: string; direction: 'IN' | 'OUT' },
    ) {
        return this.devicesService.createDevice(tenantId, body.name, body.location, body.direction);
    }

    @Patch('devices/:id')
    @UseGuards(SessionAuthGuard, RolesGuard)
    @Roles('ORG_ADMIN', 'MANAGER')
    async update(
        @Headers('x-tenant-id') tenantId: string,
        @Param('id') id: string,
        @Body() body: { status?: 'ACTIVE' | 'INACTIVE'; name?: string; location?: string; direction?: 'IN' | 'OUT' },
    ) {
        return this.devicesService.updateDevice(tenantId, id, body);
    }

    @Delete('devices/:id')
    @UseGuards(SessionAuthGuard, RolesGuard)
    @Roles('ORG_ADMIN', 'MANAGER')
    async delete(
        @Headers('x-tenant-id') tenantId: string,
        @Param('id') id: string,
    ) {
        return this.devicesService.deleteDevice(tenantId, id);
    }
}
