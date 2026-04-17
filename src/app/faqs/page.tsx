import PageHero from '@/components/sections/PageHero';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import { FAQLd, BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

const ITEMS = [
  { q: 'How much do movers cost in Orlando?', a: 'Local moves are typically quoted hourly based on crew size and truck. Most 2-bedroom apartments run $600–$1,100 total; 3–4 bedroom homes $1,200–$2,400. Long-distance is quoted by weight and distance. Every quote is written, upfront, and no-hidden-fees.' },
  { q: 'Are you licensed and insured?', a: 'Yes — fully licensed (USDOT 3455436), bonded, and insured with cargo and liability coverage. We can provide certificates of insurance for HOAs and commercial buildings on request.' },
  { q: 'Do you pack as well as move?', a: 'Yes. You can hire us for full packing (materials + labor), partial packing (we do the kitchen and fragiles, you handle the rest), or move-only. Packing materials are sold at cost, never marked up.' },
  { q: 'How far in advance should I book?', a: '2–3 weeks for weekday moves, 3–4 weeks for weekends. End-of-month is always busiest — if you can be flexible by even a few days, you’ll pay less.' },
  { q: 'What do you NOT move?', a: 'Hazardous materials (propane, paint, gasoline, pool chemicals), firearms, perishable food, and cash/jewelry (always take those yourself). We’ll give you a complete list when we send your estimate.' },
  { q: 'Do you move on weekends?', a: 'Yes — Saturday and Sunday moves are common. Weekends book out first, so call as early as you can.' },
  { q: 'What payment methods do you accept?', a: 'Cash, check, and all major credit cards. Payment is due on completion — we’ll never ask for full payment upfront.' },
  { q: 'Do you offer long-distance moves?', a: 'Yes. Dedicated trucks to anywhere in the continental U.S. We pack it, load it, drive it, and unload it ourselves — no third-party handlers, no warehouse transfers.' },
  { q: 'What if something gets damaged?', a: 'We carry standard 60¢/lb released-value coverage at no charge. Full-replacement coverage is available for larger moves — ask when we quote. In 10 years we’ve settled every claim fairly, usually within a week.' },
  { q: 'Do you move pianos, safes, and heavy items?', a: 'Yes — most upright pianos, gun safes, pool tables, and heavy gym equipment. Grand pianos and 1,000+ lb safes require a specialty crew — call us and we’ll tell you up front if we’re the right fit.' },
];

export const metadata = {
  title: 'Moving FAQs — Liberty Moves Orlando',
  description:
    'Answers to the most common Orlando moving questions: pricing, insurance, packing, scheduling, payment, and what movers can and can’t move.',
  alternates: { canonical: `${SITE.url}/faqs` },
};

export default function FAQs() {
  return (
    <>
      <BreadcrumbsLd items={[
        { name: 'Home', url: SITE.url },
        { name: 'FAQs', url: `${SITE.url}/faqs` },
      ]} />
      <FAQLd items={ITEMS} />
      <PageHero eyebrow="FAQs" title="Moving questions, straight answers." />
      <FAQ items={ITEMS} />
      <CTA title="Still have questions?" subtitle="Call us. A real mover — not a call center — will pick up." />
    </>
  );
}
