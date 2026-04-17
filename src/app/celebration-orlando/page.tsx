import CityPage from '@/components/sections/CityPage';
import { LocalBusinessLd, BreadcrumbsLd, ServiceLd } from '@/components/JsonLd';
import { SITE, CITIES } from '@/lib/site';

const city = CITIES.find((c) => c.slug === 'celebration-orlando')!;

export const metadata = {
  title: `${city.name} Movers | Liberty Moves Orlando — Licensed ${city.name} Moving Company`,
  description: `${city.name}, FL movers with upfront pricing and careful crews. Serving ${city.region}. Licensed (USDOT 3455436), 5-star rated. Free quote in minutes.`,
  keywords: [`${city.name.toLowerCase()} movers`, `${city.name.toLowerCase()} moving company`, `movers in ${city.name.toLowerCase()}`, 'orlando movers'],
  alternates: { canonical: `${SITE.url}/celebration-orlando` },
};

export default function CelebrationOrlandoPage() {
  return (
    <>
      <LocalBusinessLd />
      <ServiceLd name={`${city.name} Moving Services`} slug="celebration-orlando" description={`Professional moving services in ${city.name}, FL. Local, long-distance, residential, commercial, and packing.`} />
      <BreadcrumbsLd items={[
        { name: 'Home', url: SITE.url },
        { name: `${city.name} Movers`, url: `${SITE.url}/celebration-orlando` },
      ]} />
      <CityPage city={city} />
    </>
  );
}
