'use client';

import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@landing/presentation/providers/theme-provider/theme-provider';

export default function LandingProviders({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} disableTransitionOnChange={false}>
      <Toaster position="top-center" richColors closeButton />
        {children}
      </ThemeProvider>
    </>
  );
}
