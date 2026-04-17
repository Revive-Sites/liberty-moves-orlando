import CityPage from '@/components/sections/CityPage';
import { LocalBusinessLd, BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Sanford Movers | Liberty Moves Orlando — Sanford, FL',
  description: 'Trusted Sanford movers serving Seminole County and all of Central Florida. Licensed (USDOT 3455436), upfront pricing, careful crews. Free quote today.',
  alternates: { canonical: `${SITE.url}/sanford-orlando` },
};

export default function SANFORDORLANDOPage() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[
        { name: 'Home', url: SITE.url },
        { name: 'Sanford Movers', url: `${SITE.url}/sanford-orlando` },
      ]} />
      <CityPage name="Sanford" region="Seminole County" blurb="Historic downtown Sanford to the Lake Monroe waterfront — we cover it all." />
    </>
  );
}
