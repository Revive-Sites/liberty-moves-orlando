import CityPage from '@/components/sections/CityPage';
import { LocalBusinessLd, BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Casselberry Movers | Liberty Moves Orlando — Casselberry, FL',
  description: 'Trusted Casselberry movers serving Seminole County and all of Central Florida. Licensed (USDOT 3455436), upfront pricing, careful crews. Free quote today.',
  alternates: { canonical: `${SITE.url}/casselberry-movers` },
};

export default function CASSELBERRYMOVERSPage() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[
        { name: 'Home', url: SITE.url },
        { name: 'Casselberry Movers', url: `${SITE.url}/casselberry-movers` },
      ]} />
      <CityPage name="Casselberry" region="Seminole County" blurb="Lakefront and lakeside moves with local crews who know every back road." />
    </>
  );
}
