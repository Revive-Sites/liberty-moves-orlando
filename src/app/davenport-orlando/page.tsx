import CityPage from '@/components/sections/CityPage';
import { LocalBusinessLd, BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Davenport Movers | Liberty Moves Orlando — Davenport, FL',
  description: 'Trusted Davenport movers serving Polk County and all of Central Florida. Licensed (USDOT 3455436), upfront pricing, careful crews. Free quote today.',
  alternates: { canonical: `${SITE.url}/davenport-orlando` },
};

export default function DAVENPORTORLANDOPage() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[
        { name: 'Home', url: SITE.url },
        { name: 'Davenport Movers', url: `${SITE.url}/davenport-orlando` },
      ]} />
      <CityPage name="Davenport" region="Polk County" blurb="Short-term rental and vacation-home moves — we understand the unique logistics." />
    </>
  );
}
