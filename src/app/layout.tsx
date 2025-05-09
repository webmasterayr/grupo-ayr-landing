import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import './globals.css';
import LandingProviders from '@/modules/landing/presentation/providers/landing-provider/landing-provider';
// import { Toaster } from "@/components/ui/sonner";
// import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1d1d1b'
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.grupoayr.hn'),
  title: {
    template: '%s | Grupo AYR',
    default: 'Grupo AYR | Agroindustry with Purpose',
  },
  description: 'From our fields to your table. Sustainably grown and processed tropical roots, delivered as premium ingredients worldwide.',
  keywords: ['Agroindustry', 'Grupo AYR', 'Honduras', 'tropical roots', 'sustainability', 'cassava', 'flour', 'export', 'premium ingredients'],
  authors: [{ name: 'Grupo AYR', url: 'https://www.grupoayr.hn' }],
  creator: 'Grupo AYR',
  publisher: 'Grupo AYR',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Grupo AYR | Agroindustry with Purpose',
    description: 'From our fields to your table. Sustainably grown and processed tropical roots, delivered as premium ingredients worldwide.',
    url: 'https://www.grupoayr.hn',
    siteName: 'Grupo AYR',
    images: [
      {
        url: 'https://www.grupoayr.hn/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Grupo AYR - Agroindustry with Purpose',
      },
    ],
    locale: 'es_HN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grupo AYR | Agroindustry with Purpose',
    description: 'From our fields to your table. Sustainably grown and processed tropical roots, delivered as premium ingredients worldwide.',
    images: ['https://www.grupoayr.hn/twitter-image.png'],
    site: '@grupoayr',
    creator: '@grupoayr',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow',
  },
  alternates: {
    canonical: 'https://www.grupoayr.hn',
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon'
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
    shortcut: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon'
      }
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest'
      }
    ]
  },
  verification: {
    google: 'TU_CÓDIGO_DE_VERIFICACIÓN_GOOGLE', // Reemplaza con tu código cuando lo tengas
    yandex: 'TU_CÓDIGO_DE_VERIFICACIÓN_YANDEX' // Opcional
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LandingProviders>
          <main suppressHydrationWarning={true} className="md:gap-y-0 flex flex-col w-full max-w-full grow h-fit bg-white">
            {children}
          </main>
        </LandingProviders>
      </body>
    </html>
  );
}
