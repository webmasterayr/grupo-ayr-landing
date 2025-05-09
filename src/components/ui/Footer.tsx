import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <div className="w-48 h-12 bg-white/90 rounded-md flex items-center justify-center mb-6">
            <Image src={'/logo.webp'} alt="Grupo AYR Logo" className="w-full h-full object-contain" width={160} height={40} unoptimized={true} />
          </div>
          <p className="text-gray-400 mb-6">
            Agroindustry with Purpose: From our Honduran fields to global markets, 
            delivering sustainable tropical root products.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Twitter size={20} />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-6">Our Companies</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-white transition">SEMIG</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">INTERBAI</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">MELY FOODS</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-6">Products</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-white transition">Flour Varieties</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Pet Treats</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Food Ingredients</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Agricultural Products</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Sustainability</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Certifications</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
          </ul>
        </div>
      </div>
      
      <hr className="border-gray-800 my-10" />
      
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Grupo AYR. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-500 hover:text-white transition text-sm">Privacy Policy</a>
          <a href="#" className="text-gray-500 hover:text-white transition text-sm">Terms of Service</a>
          <a href="#" className="text-gray-500 hover:text-white transition text-sm">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
  );
}
