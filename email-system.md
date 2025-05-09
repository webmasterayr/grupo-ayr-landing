# Email System Documentation

## Overview

This document explains how to set up and use the email system for handling contact form submissions and other notifications in the Grupo AYR website.

## Setup Instructions

### 1. Email Provider Configuration

The system is designed to work with most SMTP email providers including:

- Gmail
- Outlook/Office 365
- SendGrid
- Mailgun
- Amazon SES
- And any custom SMTP server

### 2. Environment Variables

Create a `.env.local` file in the root of your project with the following variables:

```
EMAIL_SERVICE=gmail
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_SECURE=false
```

**Notes:**
- For Gmail, you'll need to use an App Password instead of your regular password. See [Google's documentation](https://support.google.com/accounts/answer/185833?hl=en) for instructions.
- If you leave EMAIL_SERVICE empty, you must provide valid EMAIL_HOST and EMAIL_PORT values.
- Set EMAIL_SECURE to "true" if using port 465, otherwise "false".

### 3. Customize Email Settings

The email settings are configured in `src/lib/email-config.ts`:

```typescript
// Modify these settings to change where emails are sent
export const emailConfig = {
  // Email address that will receive contact form submissions
  contactRecipient: "contacto@grupoayr.hn",
  
  // Reply-to address shown to recipients
  replyTo: "no-reply@grupoayr.hn",
  
  // Company details for the email footer
  companyName: "Grupo AYR",
  companyAddress: "Comayagua Valley, Honduras",
  companyWebsite: "https://www.grupoayr.hn"
};
```

### 4. Email Templates

Email templates are defined in `src/lib/email-templates.ts`. You can modify the HTML and styling to match your brand.

## Usage

### Sending Contact Form Emails

```typescript
import { sendContactFormEmail } from '@/lib/email-service';

// Example: Send a contact form email
await sendContactFormEmail({
  name: "John Doe",
  email: "john@example.com",
  company: "Example Corp",  // Optional
  phone: "123-456-7890",    // Optional
  message: "Hello, I would like to inquire about your products..."
});
```

### Sending Custom Emails

```typescript
import { sendEmail } from '@/lib/email-service';

// Example: Send a custom email
await sendEmail({
  to: "recipient@example.com",
  subject: "Custom Email Subject",
  html: "<h1>HTML Content</h1><p>This is a custom email</p>",
  text: "Plain text version for email clients that don't support HTML",
  replyTo: "sender@example.com",  // Optional
});
```

## Development vs. Production

- In development mode (NODE_ENV !== 'production'), emails will be logged to the console rather than actually sent.
- This behavior can be changed by modifying the `sendRealEmails` setting in `email-config.ts`.
- You can also use Ethereal (fake SMTP service) for testing by uncommenting the relevant code in `email-service.ts`.

## Troubleshooting

### Common Issues

1. **Authentication failure**
   - Verify your email credentials
   - For Gmail, make sure you're using an App Password
   - Check if your email provider requires additional security settings

2. **Connection timeout**
   - Verify the SMTP server host and port
   - Check if your server firewall is blocking outgoing SMTP connections

3. **Rate limiting**
   - Most providers have sending limits
   - Consider using a dedicated email service for high volume

### Testing

You can test the email system by making a POST request to `/api/contact` with a contact form payload:

```json
{
  "name": "Test User",
  "email": "test@example.com",
  "company": "Test Company",
  "phone": "123-456-7890",
  "message": "This is a test message to verify the email system is working correctly."
}
```

## Security Considerations

- Never hardcode email credentials in your codebase
- Always use environment variables for sensitive information
- Consider using email services with API-based authentication
- Implement rate limiting on your contact form to prevent abuse