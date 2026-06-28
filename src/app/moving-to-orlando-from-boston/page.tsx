import InboundRelocationPage from '@/components/sections/InboundRelocation';
import { ORIGINS } from '@/lib/inbound';
import { SITE } from '@/lib/site';

const origin = ORIGINS.find((o) => o.slug === 'boston')!;

export const metadata = {
  title: { absolute: `${origin.city} to Orlando Movers | Liberty Moves` },
  description: `Moving from ${origin.city}, ${origin.stateCode} to Orlando? Liberty Moves handles ${origin.city}-to-Orlando relocations with direct delivery, binding estimates, and licensed interstate carriers. Get a free quote.`,
  alternates: { canonical: `${SITE.url}/moving-to-orlando-from-boston` },
};

export default function BostonPage() {
  return <InboundRelocationPage origin={origin} />;
}
