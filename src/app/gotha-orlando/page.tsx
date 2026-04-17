import CityPage from '@/components/sections/CityPage';
import { LocalBusinessLd, BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Gotha Movers | Liberty Moves Orlando — Gotha, FL',
  description: 'Trusted Gotha movers serving Orange County and all of Central Florida. Licensed (USDOT 3455436), upfront pricing, careful crews. Free quote today.',
  alternates: { canonical: `${SITE.url}/gotha-orlando` },
};

export default function GOTHAORLANDOPage() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[
        { name: 'Home', url: SITE.url },
        { name: 'Gotha Movers', url: `${SITE.url}/gotha-orlando` },
      ]} />
      <CityPage name="Gotha" region="Orange County" blurb="Small-town feel, big-city service. Careful handling for estate and antique items." />
    </>
  );
}
