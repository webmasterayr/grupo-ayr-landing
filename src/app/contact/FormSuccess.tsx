"use client";

import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FormSuccessProps {
  title?: string;
  message?: string;
  onReset: () => void;
}

export default function FormSuccess({
  title = "Message Sent!",
  message = "Thank you for contacting us. We've received your message and will get back to you as soon as possible.",
  onReset
}: FormSuccessProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
        <CheckCircle className="w-10 h-10 text-green-600" />
      </div>
      
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      
      <p className="text-gray-600 mb-8 max-w-md">
        {message}
      </p>
      
      <Button 
        onClick={onReset}
        className="bg-green-600 hover:bg-green-700 text-white"
      >
        Send Another Message
      </Button>
    </div>
  );
}