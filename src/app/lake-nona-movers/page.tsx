import CityPage from '@/components/sections/CityPage';
import { LocalBusinessLd, BreadcrumbsLd, ServiceLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import type { City } from '@/lib/site';

const city: City = {
  slug: 'lake-nona-movers',
  name: 'Lake Nona',
  region: 'Orange County',
  blurb: 'Medical City, tech corridor, and master-planned communities — we move Lake Nona\u2019s fast-growing neighborhoods every week.',
  zips: ['32827', '32832'],
  neighborhoods: ['Laureate Park', 'Lake Nona Golf & Country Club', 'Isles of Lake Nona', 'Nona Terrace', 'Medical City', 'Village Walk'],
  homeTypes: 'New-construction executive homes, luxury custom homes, townhomes, corporate housing',
  priceRange: '$900–$3,500 for most local moves',
  distanceFromDowntown: '15 miles southeast of downtown Orlando',
  localNote: 'Lake Nona\u2019s Medical City and tech corridor drive a lot of corporate relocations. Our crews coordinate with relocation departments and new-construction closings daily.',
};

export const metadata = {
  title: 'Lake Nona Movers | Medical City + Laureate Park Moving Company',
  description: 'Lake Nona movers serving Medical City, Laureate Park, Isles of Lake Nona, and Lake Nona Golf & Country Club. Licensed, insured, new-construction experts.',
  alternates: { canonical: `${SITE.url}/lake-nona-movers` },
};

export default function LakeNonaPage() {
  return (
    <>
      <LocalBusinessLd />
      <ServiceLd name="Lake Nona Moving Services" slug="lake-nona-movers" description="Professional movers serving Lake Nona, Medical City, Laureate Park and surrounding Orange County neighborhoods." />
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'Lake Nona Movers', url: `${SITE.url}/lake-nona-movers` }]} />
      <CityPage city={city} />
    </>
  );
}
