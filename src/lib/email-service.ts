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
      pass: smtpConfig.auth.pass
    }
  };

  console.log({ opt });
  // If in production, use the configured SMTP settings
  return nodemailer.createTransport(opt);

  // For development, log instead of sending actual emails
  console.log('Using console log transport in development mode');

  // Alternatively, use Ethereal for development testing
  // Comment out the console.log transport and uncomment this for Ethereal
  /*
  const testAccount = await nodemailer.createTestAccount();
  console.log('Created test email account:', testAccount.user);
  
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
  */

  // Console transport for development
  return {
    sendMail: async (options: EmailOptions) => {
      console.log('\n---------- EMAIL WOULD BE SENT ----------');
      console.log('To:', options.to);
      console.log('Subject:', options.subject);
      console.log('ReplyTo:', options.replyTo);
      console.log('Text Content:', options.text?.substring(0, 150) + '...');
      console.log('HTML Content:', 'HTML email template (not shown in logs)');
      console.log('Attachments:', options.attachments ? options.attachments.length : 'None');
      console.log('----------------------------------------\n');
      return { messageId: 'dev-mode-' + Date.now() };
    }
  };
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
      cc: ['t.medina@ayrgro.com', 'a.medina@ayrgro.com', 't.maldonado@ayrgro.com','consulting@thebrandbehn.com],
      subject: options.subject,
      text: options.text,
      html: options.html,
      replyTo: options.replyTo || emailConfig.replyTo,
      attachments: options.attachments
    });

    console.log('Email sent:', info.messageId);
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

