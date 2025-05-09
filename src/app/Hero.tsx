"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  highlightText?: string;
  description: string;
  backgroundImage: string;
  backgroundOverlayClass?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  showScrollIndicator?: boolean;
  className?: string;
}

export default function Hero({
  title,
  highlightText,
  description,
  backgroundImage,
  backgroundOverlayClass = "from-green-900/80 to-green-700/80",
  primaryButtonText,
  primaryButtonLink = "#",
  secondaryButtonText,
  secondaryButtonLink = "#",
  showScrollIndicator = true,
  className,
}: HeroProps) {
  // Replacement function to handle both the main title and the highlighted part
  const formattedTitle = highlightText
    ? title.replace(highlightText, `<span class="text-green-300">${highlightText}</span>`)
    : title;

  return (
    <header className={cn("relative h-screen", className)}>
      {/* Background Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${backgroundOverlayClass} z-10`}></div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col">
        {/* Space for fixed navigation */}
        <div className="h-20"></div>
        
        {/* Hero Content */}
        <div className="flex-1 flex flex-col justify-center items-start max-w-3xl">
          <h1 
            className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
            dangerouslySetInnerHTML={{ __html: formattedTitle }}
          ></h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            {description}
          </p>
          
          {(primaryButtonText || secondaryButtonText) && (
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryButtonText && (
                <Link href={primaryButtonLink}>
                  <button className="px-8 py-3 bg-green-500 text-white rounded-md font-medium hover:bg-green-600 transition shadow-lg">
                    {primaryButtonText}
                  </button>
                </Link>
              )}
              
              {secondaryButtonText && (
                <Link href={secondaryButtonLink}>
                  <button className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-md font-medium hover:bg-white/30 transition">
                    {secondaryButtonText}
                  </button>
                </Link>
              )}
            </div>
          )}
        </div>
        
        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center">
            <p className="mb-2 text-sm font-light">Scroll to explore</p>
            <ChevronDown className="mx-auto animate-bounce" size={24} />
          </div>
        )}
      </div>
    </header>
  );
}