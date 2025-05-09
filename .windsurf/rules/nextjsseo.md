---
trigger: always_on
---

NextJS SEO Implementation Instructions - Part 1
Core Metadata Setup

Set Up Basic Metadata

App Router: Define metadata in app/layout.tsx (global) and in individual page.tsx files
Pages Router: Use <Head> component from next/head
Always include:

title (unique per page, 50-60 chars)
description (compelling, 150-160 chars)
keywords (relevant to page content)
viewport and charset settings




Implement Open Graph Tags

Required: og, og, og, og, og
Use PNG/JPG (not WebP) for og
Set proper image dimensions (1200×630px recommended)
Example:

openGraph: {
  title: 'Page Title',
  description: 'Description',
  url: 'https://yourdomain.com/page',
  type: 'website', // or 'article' for blog posts
  images: [{
    url: 'https://yourdomain.com/og-image.jpg',
    width: 1200,
    height: 630,
    alt: 'Description'
  }]
}

Add Twitter Card Tags

Include: twitter, twitter, twitter, twitter
Use summary_large_image for card type when possible
Example:

twitter: {
  card: 'summary_large_image',
  title: 'Page Title',
  description: 'Description',
  images: ['https://yourdomain.com/twitter-image.jpg']
}

Implement JSON-LD Structured Data

Create a JsonLd component:

jsxexport default function JsonLd({ data }) {
  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

Add appropriate schemas based on content type (WebPage, Article, Product, etc.)
Validate schemas with Google's Rich Results Test



Technical SEO Elements

Create Sitemap

App Router: Create app/sitemap.ts with:

typescriptimport { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://yourdomain.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1
    },
    // Add other pages...
  ];
}

Pages Router: Use next-sitemap package
Include all important pages
Set appropriate lastModified, changeFrequency, and priority values


Configure Robots.txt

App Router: Create app/robots.ts:

typescriptexport default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/']
    },
    sitemap: 'https://yourdomain.com/sitemap.xml'
  };
}

Pages Router: Create public/robots.txt or use next-sitemap
Always include sitemap URL reference


Set Canonical URLs

App Router: Use alternates property in metadata:

alternates: {
  canonical: 'https://yourdomain.com/page'
}

Pages Router: Add link tag in Head:

jsx<link rel="canonical" href="https://yourdomain.com/page" />

Always point to preferred version of page (resolve duplicate content)


Configure Icons

Set up comprehensive favicon set:

favicon.ico
favicon-16x16.png, favicon-32x32.png
apple-touch-icon.png
android-chrome icons (192×192, 512×512)


Include manifest file for PWA support
App Router: Use icons property in metadata
Pages Router: Add appropriate link tags