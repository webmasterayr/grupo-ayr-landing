import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendContactFormEmail } from '@/lib/email-service';

// Contact form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().optional(),
  phone: z.string()
    .optional()
    .refine(
      (val) => !val || /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/.test(val),
      { message: "Please enter a valid phone number." }
    ),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Validate the data
    const result = contactFormSchema.safeParse(body);
    
    if (!result.success) {
      // Return validation errors
      return NextResponse.json(
        { 
          success: false, 
          errors: result.error.format() 
        },
        { status: 400 }
      );
    }
    
    const { name, email, company, phone, message } = result.data;
    
    // Record submission in database (optional)
    // If you have a database, you can save the submission here
    // await db.contact.create({ data: { name, email, company, phone, message } });
    
    // Send email notification
    const emailResult = await sendContactFormEmail({
      name,
      email,
      company,
      phone,
      message
    });
    
    if (!emailResult.success) {
      console.error('Failed to send email:', emailResult.error);
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to send email notification. Your message was received but there was an error in our email system.' 
        },
        { status: 500 }
      );
    }
    
    // Log the submission (for demonstration)
    console.log('Contact form submission:', {
      name,
      email,
      company,
      phone,
      message: message.substring(0, 50) + (message.length > 50 ? '...' : ''),
      timestamp: new Date().toISOString(),
    });
    
    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully. We will contact you soon.',
        emailSent: emailResult.success
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    
    // Return error response
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to process your request. Please try again.' 
      },
      { status: 500 }
    );
  }
}