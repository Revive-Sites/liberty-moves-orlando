import CityPage from '@/components/sections/CityPage';
import { LocalBusinessLd, BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'College Park Movers | Liberty Moves Orlando — College Park, FL',
  description: 'Trusted College Park movers serving Orange County and all of Central Florida. Licensed (USDOT 3455436), upfront pricing, careful crews. Free quote today.',
  alternates: { canonical: `${SITE.url}/college-park-orlando` },
};

export default function COLLEGEPARKORLANDOPage() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[
        { name: 'Home', url: SITE.url },
        { name: 'College Park Movers', url: `${SITE.url}/college-park-orlando` },
      ]} />
      <CityPage name="College Park" region="Orange County" blurb="Historic bungalows and modern condos — we move them all with care." />
    </>
  );
}
