import CityPage from '@/components/sections/CityPage';
import { LocalBusinessLd, BreadcrumbsLd, ServiceLd } from '@/components/JsonLd';
import { SITE, CITIES } from '@/lib/site';

const city = CITIES.find((c) => c.slug === 'st-cloud-orlando')!;

export const metadata = {
  title: { absolute: `${city.name} Movers FL | Liberty Moves Orlando` },
  description: `${city.name}, FL movers with upfront pricing and careful crews. Serving ${city.region}. Licensed (USDOT 3455436), 5-star rated. Free quote in minutes.`,
  keywords: [`${city.name.toLowerCase()} movers`, `${city.name.toLowerCase()} moving company`, `movers in ${city.name.toLowerCase()}`, 'orlando movers'],
  alternates: { canonical: `${SITE.url}/st-cloud-orlando` },
};

export default function StCloudOrlandoPage() {
  return (
    <>
      <LocalBusinessLd />
      <ServiceLd name={`${city.name} Moving Services`} slug="st-cloud-orlando" description={`Professional moving services in ${city.name}, FL. Local, long-distance, residential, commercial, and packing.`} />
      <BreadcrumbsLd items={[
        { name: 'Home', url: SITE.url },
        { name: `${city.name} Movers`, url: `${SITE.url}/st-cloud-orlando` },
      ]} />
      <CityPage city={city} />
    </>
  );
}
