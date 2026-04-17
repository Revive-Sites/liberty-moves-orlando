import CityPage from '@/components/sections/CityPage';
import { LocalBusinessLd, BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Windermere Movers | Liberty Moves Orlando — Windermere, FL',
  description: 'Trusted Windermere movers serving Orange County and all of Central Florida. Licensed (USDOT 3455436), upfront pricing, careful crews. Free quote today.',
  alternates: { canonical: `${SITE.url}/windermere-orlando` },
};

export default function WINDERMEREORLANDOPage() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[
        { name: 'Home', url: SITE.url },
        { name: 'Windermere Movers', url: `${SITE.url}/windermere-orlando` },
      ]} />
      <CityPage name="Windermere" region="Orange County" blurb="Luxury-home moves handled with white-glove care. Every piece protected." />
    </>
  );
}
