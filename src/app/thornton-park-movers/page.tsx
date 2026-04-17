import CityPage from '@/components/sections/CityPage';
import { LocalBusinessLd, BreadcrumbsLd, ServiceLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import type { City } from '@/lib/site';

const city: City = {
  slug: 'thornton-park-movers',
  name: 'Thornton Park',
  region: 'Orange County',
  blurb: 'Downtown-adjacent historic homes, brick streets, and Lake Eola-district walkability — we\u2019ve done hundreds of Thornton Park moves.',
  zips: ['32801'],
  neighborhoods: ['Summerlin Avenue corridor', 'Washington Street', 'Lake Eola Heights border', 'Central Boulevard'],
  homeTypes: 'Historic bungalows, craftsman homes, modern condos, downtown lofts',
  priceRange: '$650–$2,200 for most local moves',
  distanceFromDowntown: '1 mile east of downtown Orlando',
  localNote: 'Thornton Park\u2019s brick streets, historic homes, and proximity to downtown parking zones mean we need to plan truck access carefully. Many moves here also need COIs for downtown condo buildings.',
};

export const metadata = {
  title: 'Thornton Park Movers | Downtown Orlando Moving Company',
  description: 'Thornton Park movers serving downtown Orlando historic homes, condos, and lofts. Licensed, insured, historic-home specialists.',
  alternates: { canonical: `${SITE.url}/thornton-park-movers` },
};

export default function ThorntonParkPage() {
  return (
    <>
      <LocalBusinessLd />
      <ServiceLd name="Thornton Park Moving Services" slug="thornton-park-movers" description="Professional movers serving Thornton Park and downtown Orlando neighborhoods." />
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'Thornton Park Movers', url: `${SITE.url}/thornton-park-movers` }]} />
      <CityPage city={city} />
    </>
  );
}
