// src/modules/users/users.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from '../../database/prisma.service';

// 1. Create a Mock Factory for Prisma
const mockPrismaService = {
  user: {
    findUnique: jest.fn(),
    upsert: jest.fn(),
    update: jest.fn(),
  },
};

describe('UsersService', () => {
  let service: UsersService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        // 2. Inject the mock instead of the real database connection
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should throw NotFoundException if user is not found', async () => {
    mockPrismaService.user.findUnique.mockResolvedValue(null);

    try {
      await service.getMe('invalid-keycloak-id');
    } catch (error) {
      expect(error.status).toBe(404);
      expect(error.message).toBe('User profile not found in Strive DB');
    }
  });
});