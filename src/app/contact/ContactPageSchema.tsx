import JsonLd from "../components/seo/JsonLd";

export default function ContactPageSchema() {
  const contactPageData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'Contact Grupo AYR',
    'description': 'Get in touch with Grupo AYR for information about our products, sustainability initiatives, or partnership opportunities.',
    'url': 'https://www.grupoayr.hn/contact',
    'mainEntity': {
      '@type': 'Organization',
      'name': 'Grupo AYR',
      'url': 'https://www.grupoayr.hn',
      'logo': 'https://www.grupoayr.hn/logo.webp',
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+504XXXXXXXX',
        'contactType': 'customer service',
        'email': 'contacto@grupoayr.hn',
        'areaServed': ['US', 'CA', 'MX', 'EU', 'HN'],
        'availableLanguage': ['English', 'Spanish']
      },
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'Honduras',
        'addressRegion': 'Comayagua',
        'addressLocality': 'Comayagua Valley'
      },
      'sameAs': [
        'https://www.facebook.com/grupoayr',
        'https://www.instagram.com/grupoayr',
        'https://www.linkedin.com/company/grupo-a-y-r'
      ]
    }
  };

  return <JsonLd data={contactPageData} />;
}