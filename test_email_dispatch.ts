import * as dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env
dotenv.config();
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const apiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

if (!apiKey) {
    console.error('❌ RESEND_API_KEY is not defined in environment!');
    process.exit(1);
}

console.log(`🔑 Using Resend API Key: ${apiKey.substring(0, 10)}...`);
console.log(`📧 Sender Address: ${fromEmail}`);

async function sendTestEmail(subject: string, message: string, recipientEmail: string, actionUrl?: string, actionText?: string) {
    const targetUrl = actionUrl || 'https://dsmhgroup.com';
    const buttonText = actionText || 'Open Strive App';

    const htmlBody = `
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
    .btn-container { text-align: center; margin: 32px 0 24px 0; }
    .btn { display: inline-block; background-color: #6366f1; color: #ffffff !important; font-weight: 700; font-size: 14px; text-decoration: none; padding: 14px 32px; border-radius: 8px; box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4); }
    .footer { background-color: #0f172a; padding: 20px 28px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #334155; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>STRIVE</h1>
      <p>Fitness Management & Performance Platform</p>
    </div>
    <div class="content">
      <h2 style="color: #f8fafc; font-size: 18px; margin-top: 0;">${subject}</h2>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <div class="btn-container">
        <a href="${targetUrl}" class="btn" target="_blank">${buttonText}</a>
      </div>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} Strive Systems Inc. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
    `;

    const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            from: fromEmail,
            to: [recipientEmail],
            subject: subject,
            html: htmlBody,
        }),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Resend API HTTP ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    return data;
}

async function runEndToEndEmailTests() {
    console.log('🚀 Starting End-to-End Email Delivery Tests...');

    // Resend test accounts strictly allow sending to registered domain/account email or test target
    const targetEmail = process.env.TEST_RECIPIENT_EMAIL || 'delivered@resend.dev';

    const testScenarios = [
        {
            name: '1. New Account Creation / Welcome Email',
            subject: 'Welcome to Strive!',
            message: 'Hello Alex,\n\nWelcome to Strive! Your account identity profile has been successfully provisioned. You can now access your fitness memberships, schedules, and training programs.',
            actionUrl: 'https://dsmhgroup.com/login',
            actionText: 'Sign In to Strive'
        },
        {
            name: '2. User & Staff Invitation Email',
            subject: 'Invitation: You have been added as a Trainer on Strive',
            message: 'Hello Trainer Alex,\n\nYou have been invited to join Strive as a Trainer / Coach. Please click the button below to complete your account registration and activate your workspace access.',
            actionUrl: 'https://dsmhgroup.com/register?inviteToken=test-invite-123',
            actionText: 'Activate Account & Join'
        },
        {
            name: '3. Admin Addition / Role Update Email',
            subject: 'Strive Role Assignment: Organization Administrator',
            message: 'Hello Alex,\n\nYour permissions for FitForge Gym have been updated. You have been assigned the role of Organization Administrator.\n\nYou now have full administrative access to manage workspace settings, team members, and billing.',
            actionUrl: 'https://dsmhgroup.com/login',
            actionText: 'Access Admin Console'
        },
        {
            name: '4. Payment & Membership Renewal Reminder Email',
            subject: 'Strive Payment Reminder: Outstanding Invoice Balance',
            message: 'Dear Alex,\n\nThis is a friendly reminder regarding your outstanding invoice balance for membership auto-renewal. Please settle it soon via your member dashboard to avoid service disruption.',
            actionUrl: 'https://dsmhgroup.com/dashboard/billing',
            actionText: 'Settle Invoice Online'
        },
        {
            name: '5. Custom System Broadcast Email',
            subject: 'Strive System Maintenance Announcement',
            message: 'Dear Strive Member,\n\nPlease be advised that scheduled maintenance will occur this Sunday between 02:00 AM and 04:00 AM UTC. Mobile check-in and booking services will remain online.',
            actionUrl: 'https://dsmhgroup.com',
            actionText: 'View Status Page'
        }
    ];

    let passed = 0;
    let failed = 0;

    for (const test of testScenarios) {
        try {
            console.log(`\n📬 Testing: ${test.name}...`);
            const result = await sendTestEmail(test.subject, test.message, targetEmail, test.actionUrl, test.actionText);
            console.log(`✅ Success! Resend Email ID: ${result.id}`);
            passed++;
        } catch (err: any) {
            console.error(`❌ Failed: ${err.message}`);
            failed++;
        }
    }

    console.log(`\n==============================================`);
    console.log(`📊 Test Summary: ${passed} Passed, ${failed} Failed out of ${testScenarios.length} tests.`);
    console.log(`==============================================`);

    if (failed > 0) {
        process.exit(1);
    }
}

runEndToEndEmailTests().catch(console.error);
