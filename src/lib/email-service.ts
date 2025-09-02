import { smtpConfig, emailConfig, sendRealEmails } from './email-config';
import { generateContactEmailTemplate, generatePlainTextEmail } from './email-template';
import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
  attachments?: Array<{
    filename: string;
    content: Buffer | string;
    contentType?: string;
  }>;
}

/**
 * Create a nodemailer transporter
 * Returns a test account in development mode if no SMTP config is provided
 */
async function createTransporter() {
  const opt = {
    service: smtpConfig.service,
    host: smtpConfig.host,
    port: smtpConfig.port,
    secure: smtpConfig.secure,
    auth: {
      user: smtpConfig.auth.user,
      pass: smtpConfig.auth.pass,
    },
  };

  // Avoid logging secrets
  console.log('Email transport config', {
    service: smtpConfig.service,
    host: smtpConfig.host,
    port: smtpConfig.port,
    secure: smtpConfig.secure,
    hasUser: Boolean(smtpConfig.auth.user),
  });

  if (sendRealEmails) {
    return nodemailer.createTransport(opt);
  }

  // Development/test: try Ethereal; fallback to console transport
  try {
    const testAccount = await nodemailer.createTestAccount();
    console.log('Using Ethereal test account for dev emails');
    return nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  } catch (e) {
    console.warn('Falling back to console email transport in development');
    return {
      sendMail: async (options: EmailOptions) => {
        console.log('\n---------- EMAIL (DEV) ----------');
        console.log('To:', options.to);
        console.log('Subject:', options.subject);
        console.log('ReplyTo:', options.replyTo);
        console.log('Text:', (options.text || '').substring(0, 150) + '...');
        console.log('HTML:', options.html ? '[HTML content omitted]' : '');
        console.log('Attachments:', options.attachments ? options.attachments.length : 'None');
        console.log('---------------------------------\n');
        return { messageId: 'dev-mode-' + Date.now() } as any;
      },
    } as any;
  }
}

/**
 * Sends an email using nodemailer
 */
export async function sendEmail(options: EmailOptions) {
  const transporter = await createTransporter();

  try {
    const info = await transporter.sendMail({
      from: `"${emailConfig.companyName}" <${emailConfig.replyTo}>`,
      to: options.to,
      cc: ['t.medina@aygro.com', 'a.medina@aygro.com', 't.maldonado@aygro.com'],
      subject: options.subject,
      text: options.text,
      html: options.html,
      replyTo: options.replyTo || emailConfig.replyTo,
      attachments: options.attachments
    });

    console.log('Email sent:', info.messageId);
    // In development with Ethereal, output a preview URL for convenience
    if (!sendRealEmails) {
      const previewUrl = nodemailer.getTestMessageUrl(info as any);
      if (previewUrl) {
        console.log('Ethereal preview URL:', previewUrl);
      }
    }
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}

/**
 * Sends a contact form submission email
 */
export async function sendContactFormEmail(data: { name: string; email: string; company?: string; phone?: string; message: string }) {
  const htmlContent = generateContactEmailTemplate(data);
  const textContent = generatePlainTextEmail(data);

  return sendEmail({
    to: emailConfig.contactRecipient,
    subject: `New Contact Form Submission from ${data.name}`,
    html: htmlContent,
    text: textContent,
    replyTo: data.email
  });
}
