"use client";

import { useState } from "react";
import { X, MessageCircle } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ContactForm } from "./contact/ContactForm";

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <div className="fixed bottom-8 right-8 z-50">
        <DialogTrigger asChild>
          <Button
            size="icon"
            className="h-14 w-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg"
            aria-label="Contact Us"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </DialogTrigger>
      </div>
      
      <DialogContent className="sm:max-w-[625px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 rounded-full"
          >
          </Button>
        </div>
        
        <p className="text-gray-600 mb-6">
          Have questions about our products or services? Send us a message and we'll get back to you soon.
        </p>
        
        <ContactForm 
          onSuccess={() => {
            // Close the dialog after a short delay to show the success message
            setTimeout(() => setIsOpen(false), 3000);
          }}
        />
      </DialogContent>
    </Dialog>
  );
}