import JsonLd from './json-ld';

export default function HomePageSchema() {
  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Your Website Name',
    alternateName: 'Alternate Website Name',
    url: 'https://www.example.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.example.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Your Business Name',
    image: 'https://www.example.com/path/to/image.jpg',
    '@id': 'https://www.example.com',
    url: 'https://www.example.com',
    telephone: '+1234567890',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main St',
      addressLocality: 'Your City',
      addressRegion: 'Your Region',
      postalCode: '21101',
      addressCountry: 'HN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 15.499673,
      longitude: -88.025027
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:00',
        closes: '16:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '00:00',
        closes: '00:00'
      }
    ],
    sameAs: ['https://www.facebook.com/examplecompany', 'https://www.instagram.com/examplecompany']
  };

  return (
    <>
      {/* Example JSON-LD data for template use */}
      <JsonLd data={websiteData} />
      <JsonLd data={localBusinessData} />
    </>
  );
}
