// src/modules/comms-audit/comms.processor.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { CommsProcessor } from './comms.processor';
import { ConfigService } from '@nestjs/config';
import { Job } from 'bullmq';

describe('CommsProcessor', () => {
    let processor: CommsProcessor;
    let configService: ConfigService;

    const mockConfigService = {
        get: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommsProcessor,
                { provide: ConfigService, useValue: mockConfigService },
            ],
        }).compile();

        processor = module.get<CommsProcessor>(CommsProcessor);
        configService = module.get<ConfigService>(ConfigService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should process SMS channel successfully when api key is present', async () => {
        const job = {
            id: '1',
            name: 'dispatch',
            data: {
                channel: 'SMS',
                recipient: { phone: '+94771234567', email: 'test@example.com' },
                message: 'Hello Member',
                subject: 'Gym Alert',
            },
        } as Job;

        mockConfigService.get.mockImplementation((key: string) => {
            if (key === 'TEXT_LK_API_KEY') return 'valid-sms-key';
            return null;
        });

        // Mock global fetch
        const mockResponse = {
            ok: true,
            status: 200,
            text: jest.fn().mockResolvedValue('{"status":"success"}'),
        };
        const globalFetch = jest.spyOn(global, 'fetch').mockResolvedValue(mockResponse as any);

        await processor.process(job);

        expect(globalFetch).toHaveBeenCalledWith('https://app.text.lk/api/v3/sms/send', expect.any(Object));
        const fetchArgs = globalFetch.mock.calls[0];
        expect(fetchArgs[0]).toBe('https://app.text.lk/api/v3/sms/send');
        expect(JSON.parse(fetchArgs[1].body)).toEqual({
            recipient: '+94771234567',
            sender_id: 'Sandbox',
            type: 'plain',
            message: 'Hello Member',
        });

        globalFetch.mockRestore();
    });

    it('should process EMAIL channel successfully when api key is present', async () => {
        const job = {
            id: '2',
            name: 'dispatch',
            data: {
                channel: 'EMAIL',
                recipient: { phone: '+94771234567', email: 'test@example.com' },
                message: 'Hello Email Member',
                subject: 'Gym Welcome',
            },
        } as Job;

        mockConfigService.get.mockImplementation((key: string) => {
            if (key === 'RESEND_API_KEY') return 'valid-email-key';
            return null;
        });

        // Mock global fetch
        const mockResponse = {
            ok: true,
            status: 200,
            text: jest.fn().mockResolvedValue('{"id":"email-id"}'),
        };
        const globalFetch = jest.spyOn(global, 'fetch').mockResolvedValue(mockResponse as any);

        await processor.process(job);

        expect(globalFetch).toHaveBeenCalledWith('https://api.resend.com/emails', expect.any(Object));
        const fetchArgs = globalFetch.mock.calls[0];
        expect(fetchArgs[0]).toBe('https://api.resend.com/emails');
        expect(JSON.parse(fetchArgs[1].body)).toEqual({
            from: 'onboarding@resend.dev',
            to: ['test@example.com'],
            subject: 'Gym Welcome',
            html: '<p>Hello Email Member</p>',
        });

        globalFetch.mockRestore();
    });
});
