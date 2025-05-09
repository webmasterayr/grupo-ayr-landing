import { Metadata } from 'next';
import HomePageSchema from './home-page-schema';

export function LandingSEO() {
  return (
    <>
      <HomePageSchema />
    </>
  );
}

export function generateLandingMetadata(): Metadata {
  return {
    title: 'Your Website Title',
    description: 'A short description of your website goes here.',
    alternates: {
      canonical: 'https://www.example.com/landing',
    },
    openGraph: {
      title: 'Your Website Title',
      description: 'A short description of your website goes here.',
      url: 'https://www.example.com/landing',
      images: [
        {
          url: 'https://www.example.com/landing/example-image.webp',
          width: 1200,
          height: 630,
          alt: 'Example Alt Text',
        },
      ],
    },
  };
}
