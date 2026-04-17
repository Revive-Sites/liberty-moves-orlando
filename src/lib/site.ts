export const SITE = {
  name: 'Liberty Moves Orlando',
  shortName: 'Liberty Moves',
  url: 'https://libertymovesorlando.com',
  phone: '407-641-2887',
  phoneLink: 'tel:+14076412887',
  phoneDisplay: '(407) 641-2887',
  email: 'info@libertymovesorlando.com',
  addressCity: 'Orlando',
  addressState: 'FL',
  addressZip: '32750',
  usdot: '3455436',
  googleReviewUrl: 'https://libertymovesorlando.com/review',
  logo: 'https://assets.cdn.filesafe.space/7pnMlJIyNsgtdaD576rT/media/6980d4cc1fd8276091bc0ec6.png',
  ghl: {
    locationId: '7pnMlJIyNsgtdaD576rT',
    formId: 'sDowmGB7fj',
    chatWidgetSrc: 'https://widgets.leadconnectorhq.com/loader.js',
    formEmbedSrc: 'https://link.msgsndr.com/js/form_embed.js',
    formIframeSrc: 'https://api.leadconnectorhq.com/widget/form/sDowmGB7fj',
  },
  gtm: 'GTM-WWLX2D3Q',
} as const;

export const CITIES: Array<{
  slug: string;
  name: string;
  region: string;
  blurb: string;
}> = [
  { slug: 'winter-park-orlando', name: 'Winter Park', region: 'Orange County', blurb: 'Historic neighborhoods, tree-lined streets, and high-value homes — our crews know Winter Park inside and out.' },
  { slug: 'kissimmee-orlando', name: 'Kissimmee', region: 'Osceola County', blurb: 'From downtown Kissimmee to Poinciana — we handle growing-family moves and retirees alike.' },
  { slug: 'altamonte-springs-orlando', name: 'Altamonte Springs', region: 'Seminole County', blurb: 'Quick access from I-4 and SR-436 means faster moves and lower hourly costs for you.' },
  { slug: 'lake-mary-orlando', name: 'Lake Mary', region: 'Seminole County', blurb: 'Executive homes and corporate relocations — professional, on-time, and discreet.' },
  { slug: 'apopka-orlando', name: 'Apopka', region: 'Orange County', blurb: 'The Indoor Foliage Capital — and home to some of our happiest repeat customers.' },
  { slug: 'oviedo-orlando', name: 'Oviedo', region: 'Seminole County', blurb: 'Family-focused moves with kid- and pet-friendly crews. We get the routine.' },
  { slug: 'sanford-orlando', name: 'Sanford', region: 'Seminole County', blurb: 'Historic downtown Sanford to the Lake Monroe waterfront — we cover it all.' },
  { slug: 'windermere-orlando', name: 'Windermere', region: 'Orange County', blurb: 'Luxury-home moves handled with white-glove care. Every piece protected.' },
  { slug: 'celebration-orlando', name: 'Celebration', region: 'Osceola County', blurb: 'HOA-aware scheduling, elevator reservations, narrow-street trucks — we know the drill.' },
  { slug: 'st-cloud-orlando', name: 'St. Cloud', region: 'Osceola County', blurb: 'Growing community, growing families. We scale up or down to match your move.' },
  { slug: 'davenport-orlando', name: 'Davenport', region: 'Polk County', blurb: 'Short-term rental and vacation-home moves — we understand the unique logistics.' },
  { slug: 'gotha-orlando', name: 'Gotha', region: 'Orange County', blurb: 'Small-town feel, big-city service. Careful handling for estate and antique items.' },
  { slug: 'montverde-orlando', name: 'Montverde', region: 'Lake County', blurb: 'Hillside homes and long driveways — our crews come prepared.' },
  { slug: 'winter-garden-orlando', name: 'Winter Garden', region: 'Orange County', blurb: 'Downtown District moves and West Orange Trail neighborhoods — done right.' },
  { slug: 'college-park-orlando', name: 'College Park', region: 'Orange County', blurb: 'Historic bungalows and modern condos — we move them all with care.' },
  { slug: 'maitland-movers', name: 'Maitland', region: 'Orange County', blurb: 'Art & culture district moves — plus the lakeside homes tucked along Lake Lily.' },
  { slug: 'winter-springs-movers', name: 'Winter Springs', region: 'Seminole County', blurb: 'Golf-course communities, gated entries, amenity coordination — covered.' },
  { slug: 'casselberry-movers', name: 'Casselberry', region: 'Seminole County', blurb: 'Lakefront and lakeside moves with local crews who know every back road.' },
];

export const SERVICES = [
  { slug: 'residential-moving', title: 'Residential Moving', blurb: 'Homes, apartments, condos — full-service local moves done in a single day.' },
  { slug: 'commercial-moving', title: 'Commercial Moving', blurb: 'Offices, retail, warehouses. Weekend moves to keep your business open.' },
  { slug: 'long-distance-moving', title: 'Long-Distance Moving', blurb: 'Florida to anywhere in the country. Dedicated trucks, transparent pricing.' },
  { slug: 'Packing-Services', title: 'Packing Services', blurb: 'Professional packing and materials. We pack it, we move it, we’re responsible.' },
];

export const NAV_PRIMARY = [
  { href: '/', label: 'Home' },
  { href: '/About-Us', label: 'About' },
  { href: '/residential-moving', label: 'Residential' },
  { href: '/commercial-moving', label: 'Commercial' },
  { href: '/long-distance-moving', label: 'Long Distance' },
  { href: '/Packing-Services', label: 'Packing' },
  { href: '/Why-Choose-Us', label: 'Why Us' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact-us', label: 'Contact' },
];
