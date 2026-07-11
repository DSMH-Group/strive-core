// src/modules/comms-audit/comms.processor.ts
import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Processor('comms')
@Injectable()
export class CommsProcessor extends WorkerHost {
    private readonly logger = new Logger(CommsProcessor.name);

    constructor(private readonly configService: ConfigService) {
        super();
    }

    async process(job: Job<any, any, string>): Promise<any> {
        this.logger.log(`Processing job ${job.id} of type ${job.name}`);
        const { channel, recipient, message, subject } = job.data;

        if (channel === 'SMS') {
            await this.sendSms(recipient.phone, message);
        } else if (channel === 'EMAIL') {
            await this.sendEmail(recipient.email, message, subject);
        }
    }

    private async sendSms(phone: string, message: string) {
        const apiKey = this.configService.get<string>('TEXT_LK_API_KEY');
        if (!apiKey || apiKey === 'your_text_lk_token') {
            this.logger.warn(`SMS dispatch bypassed. Text.lk API key is stubbed or missing.`);
            return;
        }

        const response = await fetch('https://app.text.lk/api/v3/sms/send', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                recipient: phone,
                sender_id: 'Sandbox',
                type: 'plain',
                message: message,
            }),
        });

        if (!response.ok) {
            const errText = await response.text();
            throw new Error(`Text.lk API returned status ${response.status}: ${errText}`);
        }
        this.logger.log(`SMS successfully dispatched to ${phone}`);
    }

    private async sendEmail(email: string, message: string, subject: string = 'Gym Notification') {
        const apiKey = this.configService.get<string>('RESEND_API_KEY');
        if (!apiKey || apiKey === 're_your_resend_token') {
            this.logger.warn(`Email dispatch bypassed. Resend API key is stubbed or missing.`);
            return;
        }

        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'onboarding@resend.dev',
                to: [email],
                subject: subject,
                html: `<p>${message}</p>`,
            }),
        });

        if (!response.ok) {
            const errText = await response.text();
            throw new Error(`Resend API returned status ${response.status}: ${errText}`);
        }
        this.logger.log(`Email successfully dispatched to ${email}`);
    }
}
