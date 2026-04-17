import CityPage from '@/components/sections/CityPage';
import { LocalBusinessLd, BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Winter Park Movers | Liberty Moves Orlando — Winter Park, FL',
  description: 'Trusted Winter Park movers serving Orange County and all of Central Florida. Licensed (USDOT 3455436), upfront pricing, careful crews. Free quote today.',
  alternates: { canonical: `${SITE.url}/winter-park-orlando` },
};

export default function WINTERPARKORLANDOPage() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[
        { name: 'Home', url: SITE.url },
        { name: 'Winter Park Movers', url: `${SITE.url}/winter-park-orlando` },
      ]} />
      <CityPage name="Winter Park" region="Orange County" blurb="Historic neighborhoods, tree-lined streets, and high-value homes — our crews know Winter Park inside and out." />
    </>
  );
}
