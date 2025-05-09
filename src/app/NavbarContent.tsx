'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import AnchorLink from '@/components/ui/AnchorLink';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  transparent?: boolean;
  className?: string;
}

export default function Navigation({ transparent = false, className }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for transparent navigation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    if (transparent) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [transparent]);

  const navClasses = cn(
    'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300',
    {
      'bg-transparent': transparent && !scrolled && !isOpen,
      'bg-white shadow-md': !transparent || scrolled || isOpen,
      'lg:bg-transparent lg:shadow-none': transparent && !scrolled
    },
    className
  );

  const linkClasses = cn('hover:text-green-600 transition font-medium', {
    'text-white hover:text-green-300': transparent && !scrolled && !isOpen,
    'text-gray-800': !transparent || scrolled || isOpen,
    'lg:text-white lg:hover:text-green-300': transparent && !scrolled
  });

  const mobileMenuClasses = cn('fixed inset-0 flex flex-col bg-white z-50 pt-20 px-6 transform transition-transform duration-300 ease-in-out', {
    'translate-x-0': isOpen,
    'translate-x-full': !isOpen
  });

  return (
    <nav id="nav" className={navClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <AnchorLink href="/" className="flex items-center">
            <Image src="/logo.webp" alt="Grupo AYR Logo" width={160} height={40} className="h-14 w-auto" />
          </AnchorLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8 items-center">
            <AnchorLink href="/#about" className={linkClasses}>
              About Us
            </AnchorLink>
            <AnchorLink href="/#companies" className={linkClasses}>
              Our Companies
            </AnchorLink>
            <AnchorLink href="/#products" className={linkClasses}>
              Products
            </AnchorLink>
            <AnchorLink href="/#certifications" className={linkClasses}>
              Certifications
            </AnchorLink>
            <AnchorLink href="/#sustainability" className={linkClasses}>
              Sustainability
            </AnchorLink>
            <AnchorLink
              href="/contact"
              className={cn(
                'px-5 py-2 rounded-md font-medium transition-colors',
                transparent && !scrolled
                  ? 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
                  : 'bg-green-600 text-white hover:bg-green-700'
              )}
            >
              Contact
            </AnchorLink>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 focus:outline-none" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close menu' : 'Open menu'}>
            {isOpen ? (
              <X className={transparent && !scrolled ? 'text-white' : 'text-gray-800'} size={24} />
            ) : (
              <Menu className={transparent && !scrolled ? 'text-white' : 'text-gray-800'} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={mobileMenuClasses}>
        <div className="flex flex-col space-y-6 text-lg">
          <AnchorLink href="/#about" className="py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>
            About Us
          </AnchorLink>
          <AnchorLink href="/#companies" className="py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>
            Our Companies
          </AnchorLink>
          <AnchorLink href="/#products" className="py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>
            Products
          </AnchorLink>
          <AnchorLink href="/#certifications" className="py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>
            Certifications
          </AnchorLink>
          <AnchorLink href="/#sustainability" className="py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>
            Sustainability
          </AnchorLink>
          <AnchorLink href="/contact" className="py-2 px-4 bg-green-600 text-white rounded-md text-center mt-4" onClick={() => setIsOpen(false)}>
            Contact
          </AnchorLink>
        </div>
      </div>
    </nav>
  );
}
