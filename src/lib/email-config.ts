// Email configuration settings

/**
 * Company email settings
 * These settings determine where contact form emails are sent
 */
export const emailConfig = {
    // Email address that will receive contact form submissions
    contactRecipient: "kevenbardales@gmail.com",
    
    // Reply-to address shown to recipients
    replyTo: "no-reply@grupoayr.hn",
    
    // Company details for the email footer
    companyName: "Grupo AYR",
    companyAddress: "Comayagua Valley, Honduras",
    companyWebsite: "https://www.grupoayr.hn"
  };
  
  /**
   * SMTP server configuration
   * Use environment variables for sensitive data
   */
  export const smtpConfig = {
    // SMTP service (e.g., "gmail", "mailgun", "sendgrid", etc.)
    // or custom host and port
    service: process.env.EMAIL_SERVICE || "gmail",
    
    // Alternatively, use host and port for custom SMTP servers
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT ? parseInt(process.env.EMAIL_PORT) : 587,
    
    // Auth credentials - NEVER hardcode these in production!
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    },
    
    // Secure connection (true for 465, false for other ports)
    secure: process.env.EMAIL_SECURE === "true"
  };
  
  /**
   * Subject lines for different email types
   */
  export const emailSubjects = {
    contactForm: "New Contact Form Submission - Grupo AYR",
    quotationRequest: "New Quotation Request - Grupo AYR",
    newsletter: "Newsletter Subscription - Grupo AYR"
  };
  
  /**
   * Determines if emails are sent or logged to console
   * In development, set to false to avoid sending real emails
   */
  export const sendRealEmails = process.env.NODE_ENV === "production";