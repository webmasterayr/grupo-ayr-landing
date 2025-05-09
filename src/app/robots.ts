import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/_next/',
        // Add any other routes you do not want indexed
      ],
    },
    sitemap: 'https://www.example.com/sitemap.xml',
    host: 'https://www.example.com',
  };

}
