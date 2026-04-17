import CityPage from '@/components/sections/CityPage';
import { LocalBusinessLd, BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Winter Springs Movers | Liberty Moves Orlando — Winter Springs, FL',
  description: 'Trusted Winter Springs movers serving Seminole County and all of Central Florida. Licensed (USDOT 3455436), upfront pricing, careful crews. Free quote today.',
  alternates: { canonical: `${SITE.url}/winter-springs-movers` },
};

export default function WINTERSPRINGSMOVERSPage() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[
        { name: 'Home', url: SITE.url },
        { name: 'Winter Springs Movers', url: `${SITE.url}/winter-springs-movers` },
      ]} />
      <CityPage name="Winter Springs" region="Seminole County" blurb="Golf-course communities, gated entries, amenity coordination — covered." />
    </>
  );
}
