import CityPage from '@/components/sections/CityPage';
import { LocalBusinessLd, BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Celebration Movers | Liberty Moves Orlando — Celebration, FL',
  description: 'Trusted Celebration movers serving Osceola County and all of Central Florida. Licensed (USDOT 3455436), upfront pricing, careful crews. Free quote today.',
  alternates: { canonical: `${SITE.url}/celebration-orlando` },
};

export default function CELEBRATIONORLANDOPage() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[
        { name: 'Home', url: SITE.url },
        { name: 'Celebration Movers', url: `${SITE.url}/celebration-orlando` },
      ]} />
      <CityPage name="Celebration" region="Osceola County" blurb="HOA-aware scheduling, elevator reservations, narrow-street trucks — we know the drill." />
    </>
  );
}
