import ServiceDetail from '@/components/sections/ServiceDetail';
import { LocalBusinessLd, BreadcrumbsLd, FAQLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

const FAQS = [
  { q: 'Where do you move to?', a: 'Anywhere in the continental U.S. from our Orlando base. Florida to Texas, Georgia to California — we drive our own trucks, no third-party handlers or warehouse transfers.' },
  { q: 'How is long-distance pricing calculated?', a: 'Weight + distance + services. We provide a binding estimate after a walk-through (in-home or video) so the final price is locked before we start.' },
  { q: 'How long will my stuff be on the road?', a: 'Direct delivery. Your stuff goes from your old home to your new home on the same truck, driven by the same crew. Typical transit: 2–5 days depending on distance.' },
  { q: 'Do you handle storage in between?', a: 'Yes — we can arrange short-term storage at origin or destination if your move dates don’t line up.' },
];

export const metadata = {
  title: 'Long Distance Movers Orlando | Florida to Anywhere in the US',
  description: 'Long-distance moving from Orlando to anywhere in the US. Dedicated trucks, direct delivery, transparent pricing. Licensed USDOT 3455436.',
  alternates: { canonical: `${SITE.url}/long-distance-moving` },
};

export default function LongDistance() {
  return (
    <>
      <LocalBusinessLd />
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'Long Distance Moving', url: `${SITE.url}/long-distance-moving` }]} />
      <FAQLd items={FAQS} />
      <ServiceDetail
        eyebrow="Long Distance Moving"
        title="Florida to anywhere — direct delivery, no third-party handlers."
        subtitle="Your stuff goes from your old home to your new home on the same truck with the same crew. Transparent pricing, binding estimates."
        intro="Long-distance moves are where most movers get it wrong. Your things get loaded onto one truck, unloaded into a warehouse, reloaded onto a different truck, and shuffled across the country by strangers. Every handoff is a chance for damage. We do it differently: one truck, one crew, one direct drive from your old home to your new home. The same people who pack your house are the ones who unload it."
        benefits={[
          { t: 'Direct delivery', d: 'One truck, one crew, one direct drive. No warehouse transfers.' },
          { t: 'Binding estimates', d: 'Your written quote is the price. Locked before we start.' },
          { t: 'Careful, not cheap', d: 'We’re not the rock-bottom option. We’re the one that gets it there undamaged.' },
          { t: 'Full packing available', d: 'Add professional packing + materials for a stress-free door-to-door move.' },
          { t: 'Licensed interstate', d: 'USDOT 3455436. Fully authorized for interstate moves.' },
          { t: 'Short-term storage', d: 'If your dates don’t align, we can store between origin and destination.' },
        ]}
        process={[
          { n: 1, t: 'Walk-through', d: 'In-home or video walk-through to weigh/measure and build a binding estimate.' },
          { n: 2, t: 'Plan & book', d: 'Lock in pick-up and delivery windows that match your new home’s closing.' },
          { n: 3, t: 'Pack & load', d: 'Professional packing (if elected), full inventory, careful loading.' },
          { n: 4, t: 'Drive & deliver', d: 'Direct route. You’ll have a named driver and a delivery ETA you can count on.' },
        ]}
        faqs={FAQS}
      />
    </>
  );
}
