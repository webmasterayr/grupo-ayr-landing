import { emailConfig } from './email-config';

/**
 * Generates an HTML email template for contact form submissions
 */
export function generateContactEmailTemplate(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}): string {
  // Format the date in a readable format
  const formattedDate = new Date().toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
  <style>
    /* Base styles */
    body {
      font-family: 'Manrope', Arial, sans-serif;
      line-height: 1.6;
      color: #333333;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
    }
    
    /* Container */
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      overflow: hidden;
    }
    
    /* Header */
    .email-header {
      background: linear-gradient(to right, #166534, #22c55e);
      padding: 30px;
      text-align: center;
    }
    
    .logo {
      width: 180px;
      height: auto;
      margin-bottom: 20px;
    }
    
    .header-title {
      color: white;
      font-size: 24px;
      font-weight: 700;
      margin: 0;
    }
    
    /* Content */
    .email-content {
      padding: 30px;
      background-color: #ffffff;
    }
    
    .message-intro {
      font-size: 16px;
      margin-bottom: 25px;
      color: #4b5563;
    }
    
    .message-info {
      background-color: #f5f7fa;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 25px;
    }
    
    .field-label {
      font-weight: 600;
      color: #4b5563;
      margin-bottom: 5px;
    }
    
    .field-value {
      font-size: 15px;
      margin-bottom: 15px;
      word-break: break-word;
    }
    
    .message-content {
      border-left: 3px solid #22c55e;
      padding-left: 15px;
      margin-top: 20px;
    }
    
    /* CTA Button */
    .cta-container {
      text-align: center;
      margin: 30px 0;
    }
    
    .cta-button {
      display: inline-block;
      background-color: #166534;
      color: #ffffff;
      text-decoration: none;
      padding: 12px 24px;
      border-radius: 6px;
      font-weight: 600;
      font-size: 16px;
    }
    
    /* Footer */
    .email-footer {
      background-color: #f9fafb;
      padding: 20px 30px;
      text-align: center;
      font-size: 14px;
      color: #6b7280;
    }
    
    .footer-links {
      margin: 10px 0;
    }
    
    .footer-link {
      color: #166534;
      text-decoration: none;
      margin: 0 10px;
    }
    
    /* Responsive */
    @media screen and (max-width: 600px) {
      .email-header, .email-content, .email-footer {
        padding: 20px;
      }
      
      .header-title {
        font-size: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <!-- Email Header -->
    <div class="email-header">
      <h1 class="header-title">New Contact Form Submission</h1>
    </div>
    
    <!-- Email Content -->
    <div class="email-content">
      <p class="message-intro">You have received a new message from your website's contact form.</p>
      
      <div class="message-info">
        <p class="field-label">Name:</p>
        <p class="field-value">${data.name}</p>
        
        <p class="field-label">Email:</p>
        <p class="field-value">${data.email}</p>
        
        ${data.company ? `
        <p class="field-label">Company:</p>
        <p class="field-value">${data.company}</p>
        ` : ''}
        
        ${data.phone ? `
        <p class="field-label">Phone:</p>
        <p class="field-value">${data.phone}</p>
        ` : ''}
        
        <p class="field-label">Date Submitted:</p>
        <p class="field-value">${formattedDate}</p>
        
        <p class="field-label">Message:</p>
        <div class="message-content">
          <p class="field-value">${data.message.replace(/\n/g, '<br>')}</p>
        </div>
      </div>
      
      <div class="cta-container">
        <a href="mailto:${data.email}" class="cta-button">Reply to ${data.name}</a>
      </div>
    </div>
    
    <!-- Email Footer -->
    <div class="email-footer">
      <p>&copy; ${new Date().getFullYear()} ${emailConfig.companyName}. All rights reserved.</p>
      <p>${emailConfig.companyAddress}</p>
      <div class="footer-links">
        <a href="${emailConfig.companyWebsite}" class="footer-link">Website</a>
        <a href="${emailConfig.companyWebsite}/contact" class="footer-link">Contact</a>
      </div>
    </div>
  </div>
</body>
</html>
  `;
}

/**
 * Generates a plain text version of the email for clients that don't support HTML
 */
export function generatePlainTextEmail(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}): string {
  const formattedDate = new Date().toLocaleString();
  
  return `
NEW CONTACT FORM SUBMISSION - ${emailConfig.companyName}

You have received a new message from your website's contact form.

CONTACT DETAILS:
----------------
Name: ${data.name}
Email: ${data.email}
${data.company ? `Company: ${data.company}\n` : ''}${data.phone ? `Phone: ${data.phone}\n` : ''}
Submitted: ${formattedDate}

MESSAGE:
--------
${data.message}

---
© ${new Date().getFullYear()} ${emailConfig.companyName}
${emailConfig.companyAddress}
${emailConfig.companyWebsite}
  `.trim();
}

/**
 * Generates an admin notification email template
 */
export function generateAdminNotificationTemplate(message: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Notification</title>
  <style>
    body { font-family: 'Manrope', Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
    .header { background-color: #166534; color: white; padding: 15px; text-align: center; border-radius: 5px 5px 0 0; }
    .content { padding: 20px; background-color: #f9f9f9; }
    .footer { text-align: center; padding: 10px; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>${emailConfig.companyName} - Admin Notification</h2>
    </div>
    <div class="content">
      <p>${message}</p>
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} ${emailConfig.companyName}</p>
      <p>${emailConfig.companyWebsite}</p>
    </div>
  </div>
</body>
</html>
  `;
}