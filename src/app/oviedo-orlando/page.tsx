import CityPage from '@/components/sections/CityPage';
import { LocalBusinessLd, BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Oviedo Movers | Liberty Moves Orlando — Oviedo, FL',
  description: 'Trusted Oviedo movers serving Seminole County and all of Central Florida. Licensed (USDOT 3455436), upfront pricing, careful crews. Free quote today.',
  alternates: { canonical: `${SITE.url}/oviedo-orlando` },
};

export default function OVIEDOORLANDOPage() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[
        { name: 'Home', url: SITE.url },
        { name: 'Oviedo Movers', url: `${SITE.url}/oviedo-orlando` },
      ]} />
      <CityPage name="Oviedo" region="Seminole County" blurb="Family-focused moves with kid- and pet-friendly crews. We get the routine." />
    </>
  );
}
