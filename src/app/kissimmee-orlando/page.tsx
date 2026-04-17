import CityPage from '@/components/sections/CityPage';
import { LocalBusinessLd, BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Kissimmee Movers | Liberty Moves Orlando — Kissimmee, FL',
  description: 'Trusted Kissimmee movers serving Osceola County and all of Central Florida. Licensed (USDOT 3455436), upfront pricing, careful crews. Free quote today.',
  alternates: { canonical: `${SITE.url}/kissimmee-orlando` },
};

export default function KISSIMMEEORLANDOPage() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[
        { name: 'Home', url: SITE.url },
        { name: 'Kissimmee Movers', url: `${SITE.url}/kissimmee-orlando` },
      ]} />
      <CityPage name="Kissimmee" region="Osceola County" blurb="From downtown Kissimmee to Poinciana — we handle growing-family moves and retirees alike." />
    </>
  );
}
