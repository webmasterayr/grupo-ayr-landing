'use client';

import { Toaster } from 'sonner';
import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { ContactForm } from './ContactForm';
import ContactPageSchema from './ContactPageSchema';
import AnchorLink from '@/components/ui/AnchorLink';

export default function ContactPage() {
  return (
    <div className="bg-white">
      <Toaster position="top-center" />
      <ContactPageSchema />

      {/* Hero Section */}
      <section className="relative bg-green-800 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-700/90 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50" style={{ backgroundImage: `url('/contact-hero.webp')` }}></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-green-100 mb-8">
              We'd love to hear from you. Reach out to discuss our products, partnership opportunities, or to learn more about Grupo AYR.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                From our fields in Honduras to your business, we're committed to providing premium tropical root products. Have questions or looking to partner
                with us? Our team is ready to assist you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <MapPin className="text-green-700 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Our Location</h3>
                    <p className="text-gray-600">
                      Colonia San Miguel, frente a Molinos de Honduras,
                      <br />
                      Comayagua, Comayagua, Honduras
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Mail className="text-green-700 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-gray-600">
                      <a href="mailto:contacto@grupoayr.hn" className="hover:text-green-600 transition">
                        contacto@grupoayr.hn
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Phone className="text-green-700 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="text-gray-600">
                      <a href="tel:+50493645666" className="hover:text-green-600 transition">
                        +504 9364-5666
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>

                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>

                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>

                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Executive Board */}
      <div className="mt-1 px-5 lg:px-32">
        <h3 className="font-semibold text-xl mb-4">Executive Board</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition">
            <span className="font-bold text-green-800 block">Rodolfo Interiano Baide</span>
            <span className="text-sm text-gray-600 uppercase font-semibold block mb-2">Chief Executive Officer</span>
            <div className="flex items-center mt-1">
              <Mail className="w-4 h-4 text-green-700 mr-2" />
              <a href="mailto:r.interiano@ayragro.com" className="text-green-700 hover:underline text-sm">
                r.interiano@ayragro.com
              </a>
            </div>
            <div className="flex items-center mt-1">
              <Phone className="w-4 h-4 text-gray-600 mr-2" />
              <a href="tel:+50493721765" className="text-gray-600 hover:underline text-sm">
                +504-9372-1765
              </a>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition">
            <span className="font-bold text-green-800 block">Tony Medina</span>
            <span className="text-sm text-gray-600 uppercase font-semibold block mb-2">Chief Operating Officer</span>
            <div className="flex items-center mt-1">
              <Mail className="w-4 h-4 text-green-700 mr-2" />
              <a href="mailto:t.medina@ayragro.com" className="text-green-700 hover:underline text-sm">
                t.medina@ayragro.com
              </a>
            </div>
            <div className="flex items-center mt-1">
              <Phone className="w-4 h-4 text-gray-600 mr-2" />
              <a href="tel:+50493666952" className="text-gray-600 hover:underline text-sm">
                +504-9366-6952
              </a>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition">
            <span className="font-bold text-green-800 block">Adalberto Arriaza</span>
            <span className="text-sm text-gray-600 uppercase font-semibold block mb-2">General Director</span>
            <div className="flex items-center mt-1">
              <Mail className="w-4 h-4 text-green-700 mr-2" />
              <a href="mailto:a.arriaza@ayragro.com" className="text-green-700 hover:underline text-sm">
                a.arriaza@ayragro.com
              </a>
            </div>
            <div className="flex items-center mt-1">
              <Phone className="w-4 h-4 text-gray-600 mr-2" />
              <a href="tel:+50493283861" className="text-gray-600 hover:underline text-sm">
                +504-9328-3861
              </a>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition">
            <span className="font-bold text-green-800 block">Thesla Maldonado</span>
            <span className="text-sm text-gray-600 uppercase font-semibold block mb-2">Import/Export Manager</span>
            <div className="flex items-center mt-1">
              <Mail className="w-4 h-4 text-green-700 mr-2" />
              <a href="mailto:t.maldonado@ayragro.com" className="text-green-700 hover:underline text-sm">
                t.maldonado@ayragro.com
              </a>
            </div>
            <div className="flex items-center mt-1">
              <Phone className="w-4 h-4 text-gray-600 mr-2" />
              <a href="tel:+50497224638" className="text-gray-600 hover:underline text-sm">
                +504-9722-4638
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visit Our Facilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our headquarters and main production facilities are located in the Comayagua Valley, Honduras. Come and see our sustainable farming and processing
              operations firsthand.
            </p>
          </div>

          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.8735239338594!2d-87.63259219999999!3d14.4344515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f658568d35cb749%3A0x6461a5791877a094!2sMELY%20FOODS%20PROCESSING%20AND%20EXPORT%20S.%20A.!5e0!3m2!1sen!2shn!4v1746772913747!5m2!1sen!2shn"
              width="600"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 p-4 rounded-lg shadow-md max-w-xs text-center">
              <h3 className="font-bold">Grupo AYR</h3>
              <p className="text-sm">
                Colonia San Miguel, frente a Molinos de Honduras,
                <br />
                Comayagua, Comayagua, Honduras
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Global Partners</h2>
          <p className="max-w-2xl mx-auto mb-8 text-green-100">
            Explore our premium tropical root products and discover how Grupo AYR can become your trusted supplier for high-quality ingredients.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <AnchorLink href="/#products" className="px-8 py-3 bg-white text-green-800 rounded-md font-medium hover:bg-green-100 transition shadow-md">
              Explore Products
            </AnchorLink>
            <a
              href="/catalog.pdf"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-md font-medium hover:bg-white/10 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Catalog
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
