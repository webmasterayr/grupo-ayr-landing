"use client";
import Image from "next/image";
import React from "react";

export default function NavbarContent() {
  return (
    <>
      <div className="flex items-center">
        <Image src="/logo.webp" alt="Grupo AYR Logo" width={160} height={40} className="h-[5.5rem] w-auto" />
      </div>
      <div className="hidden lg:flex space-x-8 text-white font-medium">
        <a href="#about" className="hover:text-green-300 transition">About Us</a>
        <a href="#companies" className="hover:text-green-300 transition">Our Companies</a>
        <a href="#products" className="hover:text-green-300 transition">Products</a>
        <a href="#certifications" className="hover:text-green-300 transition">Certifications</a>
        <a href="#sustainability" className="hover:text-green-300 transition">Sustainability</a>
        <a href="/contact" className="hover:text-green-300 transition">Contact</a>
      </div>
      <div className="lg:hidden text-white">
        <button className="p-2">
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>
    </>
  );
}
