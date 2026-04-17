import CityPage from '@/components/sections/CityPage';
import { LocalBusinessLd, BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Winter Garden Movers | Liberty Moves Orlando — Winter Garden, FL',
  description: 'Trusted Winter Garden movers serving Orange County and all of Central Florida. Licensed (USDOT 3455436), upfront pricing, careful crews. Free quote today.',
  alternates: { canonical: `${SITE.url}/winter-garden-orlando` },
};

export default function WINTERGARDENORLANDOPage() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[
        { name: 'Home', url: SITE.url },
        { name: 'Winter Garden Movers', url: `${SITE.url}/winter-garden-orlando` },
      ]} />
      <CityPage name="Winter Garden" region="Orange County" blurb="Downtown District moves and West Orange Trail neighborhoods — done right." />
    </>
  );
}
