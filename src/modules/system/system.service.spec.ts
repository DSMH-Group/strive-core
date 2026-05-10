// src/modules/system/system.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { SystemService } from './system.service';
import { PrismaService } from '../../database/prisma.service';

describe('SystemService', () => {
    let service: SystemService;
    let prisma: PrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SystemService,
                {
                    provide: PrismaService,
                    useValue: { tenant: { findFirst: jest.fn() } },
                },
            ],
        }).compile();

        service = module.get<SystemService>(SystemService);
        prisma = module.get<PrismaService>(PrismaService);
    });

    it('should return metadata for a valid domain', async () => {
        const mockTenant = { id: 'uuid-1', name: 'Power Gym', themeConfig: {} };
        (prisma.tenant.findFirst as jest.Mock).mockResolvedValue(mockTenant);

        const result = await service.resolveTenantMetadata({ domain: 'power.strive.lk' });
        expect(result).toEqual(mockTenant);
    });
});