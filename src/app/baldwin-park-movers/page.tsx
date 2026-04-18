import CityPage from '@/components/sections/CityPage';
import { LocalBusinessLd, BreadcrumbsLd, ServiceLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import type { City } from '@/lib/site';

const city: City = {
  slug: 'baldwin-park-movers',
  name: 'Baldwin Park',
  region: 'Orange County',
  blurb: 'Walkable neighborhoods, Lake Baldwin views, and new-urbanism homes — our crews know every Baldwin Park street.',
  zips: ['32814'],
  neighborhoods: ['Village Walk', 'Lake Baldwin', 'Harbor Park', 'New Broad Street corridor', 'Meeting House Park'],
  homeTypes: 'New-urbanism single-family, condos, townhomes, lakefront homes',
  priceRange: '$700–$2,400 for most local moves',
  distanceFromDowntown: '5 miles northeast of downtown Orlando',
  localNote: 'Baldwin Park’s walkable layout and tight streets mean we coordinate truck staging carefully. Many buildings have parking restrictions we handle for you.',
};

export const metadata = {
  title: 'Baldwin Park Movers | Lake Baldwin + Village Walk Moving',
  description: 'Baldwin Park, Orlando movers. Walkable neighborhoods, new-urbanism homes, and Lake Baldwin properties. Licensed, insured, local specialists.',
  alternates: { canonical: `${SITE.url}/baldwin-park-movers` },
};

export default function BaldwinParkPage() {
  return (
    <>
      <LocalBusinessLd />
      <ServiceLd name="Baldwin Park Moving Services" slug="baldwin-park-movers" description="Professional movers serving Baldwin Park and surrounding Orlando neighborhoods." />
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'Baldwin Park Movers', url: `${SITE.url}/baldwin-park-movers` }]} />
      <CityPage city={city} />
    </>
  );
}
