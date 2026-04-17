import CityPage from '@/components/sections/CityPage';
import { LocalBusinessLd, BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Montverde Movers | Liberty Moves Orlando — Montverde, FL',
  description: 'Trusted Montverde movers serving Lake County and all of Central Florida. Licensed (USDOT 3455436), upfront pricing, careful crews. Free quote today.',
  alternates: { canonical: `${SITE.url}/montverde-orlando` },
};

export default function MONTVERDEORLANDOPage() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[
        { name: 'Home', url: SITE.url },
        { name: 'Montverde Movers', url: `${SITE.url}/montverde-orlando` },
      ]} />
      <CityPage name="Montverde" region="Lake County" blurb="Hillside homes and long driveways — our crews come prepared." />
    </>
  );
}
