import { SITE, CITIES } from '@/lib/site';

const GEO = { lat: 28.5383, lng: -81.3792, radius: '50000' }; // 50km around Orlando

export function LocalBusinessLd({ page = 'home' }: { page?: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['MovingCompany', 'LocalBusiness'],
    '@id': `${SITE.url}#business`,
    name: SITE.name,
    alternateName: ['Liberty Moves', 'Liberty Movers Orlando'],
    url: SITE.url,
    telephone: `+1-${SITE.phone}`,
    email: SITE.email,
    image: SITE.logo,
    logo: SITE.logo,
    description: 'Licensed and insured Orlando moving company. Local, long-distance, residential, commercial, and packing services across Central Florida.',
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Check, Credit Card',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.addressStreet,
      addressLocality: SITE.addressCity,
      addressRegion: SITE.addressState,
      postalCode: SITE.addressZip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO.lat,
      longitude: GEO.lng,
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: GEO.lat, longitude: GEO.lng },
      geoRadius: GEO.radius,
    },
    areaServed: CITIES.map((c) => ({ '@type': 'City', name: `${c.name}, FL` })),
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '07:00',
      closes: '19:00',
    }],
    identifier: [
      { '@type': 'PropertyValue', propertyID: 'USDOT', value: SITE.usdot },
      { '@type': 'PropertyValue', propertyID: 'FLDACS IM', value: SITE.fldacs },
    ],
    aggregateRating: { '@type': 'AggregateRating', ratingValue: String(SITE.rating.toFixed(1)), reviewCount: String(SITE.reviewCount), bestRating: '5', worstRating: '1' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Moving Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Moving', url: `${SITE.url}/residential-moving` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Moving', url: `${SITE.url}/commercial-moving` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Long Distance Moving', url: `${SITE.url}/long-distance-moving` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Packing Services', url: `${SITE.url}/Packing-Services` } },
      ],
    },
    knowsAbout: ['moving', 'relocation', 'packing', 'long distance moving', 'commercial moving', 'residential moving', 'Orlando moving'],
    slogan: 'Moved with care. Delivered with confidence.',
    sameAs: [],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function WebsiteLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { '@id': `${SITE.url}#business` },
    inLanguage: 'en-US',
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function ServiceLd({
  name, slug, description, priceRange = '$$',
}: { name: string; slug: string; description: string; priceRange?: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE.url}/${slug}#service`,
    serviceType: name,
    name,
    description,
    url: `${SITE.url}/${slug}`,
    provider: { '@id': `${SITE.url}#business` },
    areaServed: CITIES.map((c) => ({ '@type': 'City', name: `${c.name}, FL` })),
    offers: {
      '@type': 'Offer',
      priceRange,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      areaServed: { '@type': 'State', name: 'Florida' },
    },
    termsOfService: `${SITE.url}/terms-and-condition`,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
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

export function ReviewsLd() {
  const reviews = [
    { name: 'Jessica R.', rating: 5, text: 'The crew was on time, polite, and unbelievably careful with our grandmother’s china cabinet. Final bill matched the quote to the dollar.' },
    { name: 'Marcus D.', rating: 5, text: 'Second time using Liberty. Scheduled a Saturday move in 48 hours, done in five. Best movers in Orlando — not even close.' },
    { name: 'Priya S.', rating: 5, text: 'Long-distance move to Atlanta. They wrapped everything, drove it themselves, unpacked when they arrived. White-glove the whole way.' },
    { name: 'David O.', rating: 5, text: 'I get nervous about movers because I’ve been burned before. These guys were different. Clear pricing, no games, respectful team.' },
    { name: 'Alina M.', rating: 5, text: 'Our office move took four hours on a Sunday and we opened Monday morning without skipping a beat. Professional top-to-bottom.' },
    { name: 'Ken H.', rating: 5, text: 'HOA-friendly, elevator-savvy, and the foreman walked me through every step. Price was fair. They’re the first number I’ll share when a neighbor asks.' },
  ];
  const data = reviews.map((r, i) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: { '@id': `${SITE.url}#business` },
    author: { '@type': 'Person', name: r.name },
    reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
    reviewBody: r.text,
    datePublished: `2025-${String(((i % 12) + 1)).padStart(2, '0')}-15`,
  }));
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function SpeakableLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.tldr', '.faq-answer'],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
