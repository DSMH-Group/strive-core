// src/modules/system/system.controller.ts
import { Controller, Get, Query, UseGuards, Headers, UnauthorizedException } from '@nestjs/common';
import { SystemService } from './system.service';
import { ResolveTenantDto } from './dto/resolve-tenant.dto';

@Controller() // Global prefix handled in main.ts
export class SystemController {
    constructor(private readonly systemService: SystemService) {}

    @Get('health')
    getHealth() {
        return this.systemService.getBasicHealth();
    }

    @Get('meta/resolve')
    async resolve(@Query() query: ResolveTenantDto, @Headers('x-internal-secret') secret: string) {
        // Simple infrastructure-level security
        if (secret !== process.env.INTERNAL_MIDDLEWARE_SECRET) {
            throw new UnauthorizedException('Invalid internal secret');
        }
        return this.systemService.resolveTenantMetadata(query);
    }
}