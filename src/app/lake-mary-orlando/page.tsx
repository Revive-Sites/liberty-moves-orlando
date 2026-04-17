import CityPage from '@/components/sections/CityPage';
import { LocalBusinessLd, BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Lake Mary Movers | Liberty Moves Orlando — Lake Mary, FL',
  description: 'Trusted Lake Mary movers serving Seminole County and all of Central Florida. Licensed (USDOT 3455436), upfront pricing, careful crews. Free quote today.',
  alternates: { canonical: `${SITE.url}/lake-mary-orlando` },
};

export default function LAKEMARYORLANDOPage() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[
        { name: 'Home', url: SITE.url },
        { name: 'Lake Mary Movers', url: `${SITE.url}/lake-mary-orlando` },
      ]} />
      <CityPage name="Lake Mary" region="Seminole County" blurb="Executive homes and corporate relocations — professional, on-time, and discreet." />
    </>
  );
}
