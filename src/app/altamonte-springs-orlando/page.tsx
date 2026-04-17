import CityPage from '@/components/sections/CityPage';
import { LocalBusinessLd, BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Altamonte Springs Movers | Liberty Moves Orlando — Altamonte Springs, FL',
  description: 'Trusted Altamonte Springs movers serving Seminole County and all of Central Florida. Licensed (USDOT 3455436), upfront pricing, careful crews. Free quote today.',
  alternates: { canonical: `${SITE.url}/altamonte-springs-orlando` },
};

export default function ALTAMONTESPRINGSORLANDOPage() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[
        { name: 'Home', url: SITE.url },
        { name: 'Altamonte Springs Movers', url: `${SITE.url}/altamonte-springs-orlando` },
      ]} />
      <CityPage name="Altamonte Springs" region="Seminole County" blurb="Quick access from I-4 and SR-436 means faster moves and lower hourly costs for you." />
    </>
  );
}
