import InboundRelocationPage from '@/components/sections/InboundRelocation';
import { ORIGINS } from '@/lib/inbound';
import { SITE } from '@/lib/site';

const origin = ORIGINS.find((o) => o.slug === 'atlanta')!;

export const metadata = {
  title: `Moving from ${origin.city} to Orlando, FL | Long-Distance Movers`,
  description: `Moving from ${origin.city}, ${origin.stateCode} to Orlando? Liberty Moves handles ${origin.city}-to-Orlando relocations with direct delivery, binding estimates, and licensed interstate carriers. Get a free quote.`,
  keywords: [`moving from ${origin.city.toLowerCase()} to orlando`, `${origin.city.toLowerCase()} to orlando movers`, `long distance movers orlando`, 'interstate movers orlando'],
  alternates: { canonical: `${SITE.url}/moving-to-orlando-from-atlanta` },
};

export default function AtlantaPage() {
  return <InboundRelocationPage origin={origin} />;
}
