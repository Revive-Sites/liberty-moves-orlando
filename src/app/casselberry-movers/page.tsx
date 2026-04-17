import CityPage from '@/components/sections/CityPage';
import { LocalBusinessLd, BreadcrumbsLd, ServiceLd } from '@/components/JsonLd';
import { SITE, CITIES } from '@/lib/site';

const city = CITIES.find((c) => c.slug === 'casselberry-movers')!;

export const metadata = {
  title: `${city.name} Movers | Liberty Moves Orlando — Licensed ${city.name} Moving Company`,
  description: `${city.name}, FL movers with upfront pricing and careful crews. Serving ${city.region}. Licensed (USDOT 3455436), 5-star rated. Free quote in minutes.`,
  keywords: [`${city.name.toLowerCase()} movers`, `${city.name.toLowerCase()} moving company`, `movers in ${city.name.toLowerCase()}`, 'orlando movers'],
  alternates: { canonical: `${SITE.url}/casselberry-movers` },
};

export default function CasselberryMoversPage() {
  return (
    <>
      <LocalBusinessLd />
      <ServiceLd name={`${city.name} Moving Services`} slug="casselberry-movers" description={`Professional moving services in ${city.name}, FL. Local, long-distance, residential, commercial, and packing.`} />
      <BreadcrumbsLd items={[
        { name: 'Home', url: SITE.url },
        { name: `${city.name} Movers`, url: `${SITE.url}/casselberry-movers` },
      ]} />
      <CityPage city={city} />
    </>
  );
}
