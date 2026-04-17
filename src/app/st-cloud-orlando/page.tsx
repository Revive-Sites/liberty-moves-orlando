import CityPage from '@/components/sections/CityPage';
import { LocalBusinessLd, BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'St. Cloud Movers | Liberty Moves Orlando — St. Cloud, FL',
  description: 'Trusted St. Cloud movers serving Osceola County and all of Central Florida. Licensed (USDOT 3455436), upfront pricing, careful crews. Free quote today.',
  alternates: { canonical: `${SITE.url}/st-cloud-orlando` },
};

export default function STCLOUDORLANDOPage() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[
        { name: 'Home', url: SITE.url },
        { name: 'St. Cloud Movers', url: `${SITE.url}/st-cloud-orlando` },
      ]} />
      <CityPage name="St. Cloud" region="Osceola County" blurb="Growing community, growing families. We scale up or down to match your move." />
    </>
  );
}
