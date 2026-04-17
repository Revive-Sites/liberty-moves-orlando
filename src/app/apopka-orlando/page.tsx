import CityPage from '@/components/sections/CityPage';
import { LocalBusinessLd, BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Apopka Movers | Liberty Moves Orlando — Apopka, FL',
  description: 'Trusted Apopka movers serving Orange County and all of Central Florida. Licensed (USDOT 3455436), upfront pricing, careful crews. Free quote today.',
  alternates: { canonical: `${SITE.url}/apopka-orlando` },
};

export default function APOPKAORLANDOPage() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[
        { name: 'Home', url: SITE.url },
        { name: 'Apopka Movers', url: `${SITE.url}/apopka-orlando` },
      ]} />
      <CityPage name="Apopka" region="Orange County" blurb="The Indoor Foliage Capital — and home to some of our happiest repeat customers." />
    </>
  );
}
