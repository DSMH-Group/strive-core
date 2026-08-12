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
        const { channel, recipient, message, subject, html, actionUrl, actionText } = job.data;

        if (channel === 'SMS') {
            await this.sendSms(recipient.phone, message);
        } else if (channel === 'EMAIL') {
            await this.sendEmail(recipient.email, message, subject, html, actionUrl, actionText);
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

    private async sendEmail(
        email: string,
        message: string,
        subject: string = 'Strive Gym Notification',
        customHtml?: string,
        actionUrl?: string,
        actionText?: string,
    ) {
        const apiKey = this.configService.get<string>('RESEND_API_KEY');
        if (!apiKey || apiKey === 're_your_resend_token') {
            this.logger.warn(`Email dispatch bypassed. Resend API key is stubbed or missing.`);
            return;
        }

        const fromSender = this.configService.get<string>('RESEND_FROM_EMAIL', 'onboarding@resend.dev');

        const finalHtml = customHtml || this.generateEmailTemplate(subject, message, actionUrl, actionText);

        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: fromSender,
                to: [email],
                subject: subject,
                html: finalHtml,
            }),
        });

        if (!response.ok) {
            const errText = await response.text();
            throw new Error(`Resend API returned status ${response.status}: ${errText}`);
        }

        const data = await response.json();
        this.logger.log(`Email successfully dispatched to ${email} (Resend ID: ${data?.id})`);
        return data;
    }

    private generateEmailTemplate(
        subject: string,
        message: string,
        actionUrl?: string,
        actionText?: string,
    ): string {
        // Extract URL from message if actionUrl is not explicitly passed
        let targetUrl = actionUrl;
        if (!targetUrl) {
            const urlMatch = message.match(/https?:\/\/[^\s]+/);
            if (urlMatch) {
                targetUrl = urlMatch[0];
            }
        }

        const buttonText = actionText || 'Open Strive App';

        return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0f172a; color: #f8fafc; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 40px auto; background-color: #1e293b; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.5); border: 1px solid #334155; }
    .header { background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); padding: 32px 24px; text-align: center; }
    .header h1 { margin: 0; font-size: 26px; font-weight: 800; letter-spacing: -0.5px; color: #ffffff; text-transform: uppercase; }
    .header p { margin: 6px 0 0 0; font-size: 13px; color: #e0e7ff; opacity: 0.9; }
    .content { padding: 32px 28px; font-size: 15px; line-height: 1.6; color: #cbd5e1; }
    .content p { margin-top: 0; margin-bottom: 20px; }
    .btn-container { text-align: center; margin: 32px 0 24px 0; }
    .btn { display: inline-block; background-color: #6366f1; color: #ffffff !important; font-weight: 700; font-size: 14px; text-decoration: none; padding: 14px 32px; border-radius: 8px; box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4); transition: background-color 0.2s ease; }
    .footer { background-color: #0f172a; padding: 20px 28px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #334155; }
    .footer a { color: #818cf8; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>STRIVE</h1>
      <p>Fitness Management & Performance Platform</p>
    </div>
    <div class="content">
      <h2 style="color: #f8fafc; font-size: 18px; margin-top: 0; margin-bottom: 16px;">${subject}</h2>
      <p>${message.replace(/\n/g, '<br>')}</p>
      ${targetUrl ? `
      <div class="btn-container">
        <a href="${targetUrl}" class="btn" target="_blank">${buttonText}</a>
      </div>
      ` : ''}
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} Strive Systems Inc. All rights reserved.</p>
      <p>Automated communication routed via Strive Communication Gateway.</p>
    </div>
  </div>
</body>
</html>
        `;
    }
}
