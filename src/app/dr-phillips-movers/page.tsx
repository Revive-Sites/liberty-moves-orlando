import CityPage from '@/components/sections/CityPage';
import { LocalBusinessLd, BreadcrumbsLd, ServiceLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import type { City } from '@/lib/site';

const city: City = {
  slug: 'dr-phillips-movers',
  name: 'Dr. Phillips',
  region: 'Orange County',
  blurb: 'Restaurant Row, gated estates, and Bay Hill — Dr. Phillips moves get the white-glove treatment.',
  zips: ['32819', '32836'],
  neighborhoods: ['Bay Hill', 'The Fairway Villas', 'Phillips Landing', 'Sand Lake Hills', 'Little Lake Bryan'],
  homeTypes: 'Luxury gated estates, golf-course homes, lakefront properties, high-end condos',
  priceRange: '$1,200–$5,000 for most local moves',
  distanceFromDowntown: '9 miles southwest of downtown Orlando',
  localNote: 'Dr. Phillips is home to Bay Hill Club and Lodge (host of the Arnold Palmer Invitational) and some of Central Florida\u2019s most prestigious neighborhoods. White-glove handling is standard here.',
};

export const metadata = {
  title: 'Dr. Phillips Movers | Bay Hill + Sand Lake Moving Company',
  description: 'Dr. Phillips movers serving Bay Hill, Sand Lake Hills, Phillips Landing and Restaurant Row neighborhoods. Licensed, insured, luxury-home specialists.',
  alternates: { canonical: `${SITE.url}/dr-phillips-movers` },
};

export default function DrPhillipsPage() {
  return (
    <>
      <LocalBusinessLd />
      <ServiceLd name="Dr. Phillips Moving Services" slug="dr-phillips-movers" description="Professional movers serving Dr. Phillips, Bay Hill, Sand Lake, and surrounding Orange County luxury neighborhoods." />
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'Dr. Phillips Movers', url: `${SITE.url}/dr-phillips-movers` }]} />
      <CityPage city={city} />
    </>
  );
}
