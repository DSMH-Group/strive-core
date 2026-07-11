// src/modules/devices/devices.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { DevicesService } from './devices.service';
import { PrismaService } from '../../database/prisma.service';
import { NotFoundException, ForbiddenException, BadRequestException } from '@nestjs/common';

describe('DevicesService', () => {
    let service: DevicesService;
    let prisma: PrismaService;

    const mockPrisma = {
        device: {
            create: jest.fn(),
            findMany: jest.fn(),
            findFirst: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
        credential: {
            findFirst: jest.fn(),
        },
        membership: {
            findFirst: jest.fn(),
        },
        attendance: {
            create: jest.fn(),
            findFirst: jest.fn(),
            update: jest.fn(),
        },
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                DevicesService,
                { provide: PrismaService, useValue: mockPrisma },
            ],
        }).compile();

        service = module.get<DevicesService>(DevicesService);
        prisma = module.get<PrismaService>(PrismaService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('createDevice', () => {
        it('should hash token and return the plaintext token only once', async () => {
            const tenantId = 't1';
            const mockSavedDevice = {
                id: 'd123',
                name: 'Main Turnstile',
                location: 'Lobby',
                direction: 'IN',
                status: 'ACTIVE',
                token: 'hashed-placeholder',
            };
            mockPrisma.device.create.mockResolvedValue(mockSavedDevice);

            const result = await service.createDevice(tenantId, 'Main Turnstile', 'Lobby', 'IN');

            expect(mockPrisma.device.create).toHaveBeenCalledWith(expect.objectContaining({
                data: expect.objectContaining({
                    name: 'Main Turnstile',
                    location: 'Lobby',
                    direction: 'IN',
                    tenantId,
                    status: 'ACTIVE',
                    token: expect.any(String),
                }),
            }));
            expect(result.plaintextToken).toBeDefined();
            expect(result.plaintextToken).toContain('str_dev_');
        });
    });

    describe('processIngress', () => {
        const mockDevice = { id: 'd123', name: 'Turnstile', direction: 'IN' };

        it('should successfully parse Hikvision ISAPI XML and check in active member', async () => {
            const tenantId = 't1';
            const xmlPayload = `
                <EventNotificationAlert version="2.0">
                    <AccessControllerEvent>
                        <cardNo>87654321</cardNo>
                    </AccessControllerEvent>
                </EventNotificationAlert>
            `;

            const mockUser = { firstName: 'Lakshane', lastName: 'Fonseka' };
            const mockMembership = { id: 'm123', status: 'ACTIVE', rfidTag: '87654321', user: mockUser };

            mockPrisma.credential.findFirst.mockResolvedValue(null);
            mockPrisma.membership.findFirst.mockResolvedValue(mockMembership);
            mockPrisma.attendance.create.mockResolvedValue({ id: 'att-123', checkInTime: new Date() });

            const result = await service.processIngress(tenantId, mockDevice, xmlPayload, 'application/xml');

            expect(mockPrisma.membership.findFirst).toHaveBeenCalledWith({
                where: { rfidTag: '87654321', tenantId },
                include: { user: true },
            });
            expect(mockPrisma.attendance.create).toHaveBeenCalledWith({
                data: {
                    tenantId,
                    membershipId: 'm123',
                    authMethod: 'RFID',
                    rfidTag: '87654321',
                    checkInTime: expect.any(Date),
                },
            });
            expect(result.status).toBe('GRANTED');
            expect(result.direction).toBe('IN');
            expect(result.member.name).toBe('Lakshane Fonseka');
        });

        it('should reject check-in if membership is suspended', async () => {
            const tenantId = 't1';
            const payload = { credential: 'card-123' };
            const mockMembership = { id: 'm123', status: 'SUSPENDED', rfidTag: 'card-123', user: { firstName: 'Bad', lastName: 'Member' } };

            mockPrisma.credential.findFirst.mockResolvedValue(null);
            mockPrisma.membership.findFirst.mockResolvedValue(mockMembership);

            await expect(service.processIngress(tenantId, mockDevice, payload, 'application/json'))
                .rejects.toThrow(ForbiddenException);
        });

        it('should perform check-out update if device direction is OUT and active check-in exists', async () => {
            const tenantId = 't1';
            const deviceOut = { id: 'd124', name: 'Exit gate', direction: 'OUT' };
            const payload = { credential: 'card-123' };
            const mockMembership = { id: 'm123', status: 'ACTIVE', rfidTag: 'card-123', user: { firstName: 'Alice', lastName: 'Smith' } };
            const mockActiveAttendance = { id: 'att-555', checkInTime: new Date(), checkOutTime: null };

            mockPrisma.credential.findFirst.mockResolvedValue(null);
            mockPrisma.membership.findFirst.mockResolvedValue(mockMembership);
            mockPrisma.attendance.findFirst.mockResolvedValue(mockActiveAttendance);
            mockPrisma.attendance.update.mockResolvedValue({ id: 'att-555', checkOutTime: new Date() });

            const result = await service.processIngress(tenantId, deviceOut, payload, 'application/json');

            expect(mockPrisma.attendance.findFirst).toHaveBeenCalledWith({
                where: { membershipId: 'm123', checkOutTime: null },
                orderBy: { checkInTime: 'desc' },
            });
            expect(mockPrisma.attendance.update).toHaveBeenCalledWith({
                where: { id: 'att-555' },
                data: { checkOutTime: expect.any(Date) },
            });
            expect(result.status).toBe('GRANTED');
            expect(result.direction).toBe('OUT');
        });
    });
});
