import { SITE } from '@/lib/site';

export function LocalBusinessLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name: SITE.name,
    url: SITE.url,
    telephone: `+1-${SITE.phone}`,
    email: SITE.email,
    image: SITE.logo,
    logo: SITE.logo,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.addressCity,
      addressRegion: SITE.addressState,
      postalCode: SITE.addressZip,
      addressCountry: 'US',
    },
    areaServed: [
      'Orlando, FL', 'Winter Park, FL', 'Kissimmee, FL', 'Altamonte Springs, FL', 'Lake Mary, FL', 'Apopka, FL', 'Oviedo, FL',
      'Sanford, FL', 'Windermere, FL', 'Celebration, FL', 'St. Cloud, FL', 'Davenport, FL', 'Gotha, FL', 'Montverde, FL',
      'Winter Garden, FL', 'College Park, FL', 'Maitland, FL', 'Winter Springs, FL', 'Casselberry, FL',
    ],
    identifier: { '@type': 'PropertyValue', propertyID: 'USDOT', value: SITE.usdot },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47' },
    sameAs: [],
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export function BreadcrumbsLd({ items }: { items: Array<{ name: string; url: string }> }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem', position: i + 1, name: it.name, item: it.url,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function FAQLd({ items }: { items: Array<{ q: string; a: string }> }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question', name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
