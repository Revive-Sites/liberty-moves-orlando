import CityPage from '@/components/sections/CityPage';
import { LocalBusinessLd, BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Maitland Movers | Liberty Moves Orlando — Maitland, FL',
  description: 'Trusted Maitland movers serving Orange County and all of Central Florida. Licensed (USDOT 3455436), upfront pricing, careful crews. Free quote today.',
  alternates: { canonical: `${SITE.url}/maitland-movers` },
};

export default function MAITLANDMOVERSPage() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[
        { name: 'Home', url: SITE.url },
        { name: 'Maitland Movers', url: `${SITE.url}/maitland-movers` },
      ]} />
      <CityPage name="Maitland" region="Orange County" blurb="Art & culture district moves — plus the lakeside homes tucked along Lake Lily." />
    </>
  );
}
