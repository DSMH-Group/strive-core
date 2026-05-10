// src/modules/documents/documents.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { DocumentsService } from './documents.service';
import { PrismaService } from '../../database/prisma.service';
import { ConfigService } from '@nestjs/config';

describe('DocumentsService', () => {
    let service: DocumentsService;

    const mockPrisma = {
        membership: { findUnique: jest.fn() },
        document: { create: jest.fn() },
    };

    const mockConfig = {
        get: jest.fn((key: string) => {
            if (key === 'AWS_REGION') return 'ap-south-1';
            return 'mock-value';
        }),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                DocumentsService,
                { provide: PrismaService, useValue: mockPrisma },
                { provide: ConfigService, useValue: mockConfig },
            ],
        }).compile();

        service = module.get<DocumentsService>(DocumentsService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});