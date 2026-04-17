import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import { BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import { Truck, Package, Home } from 'lucide-react';

export const metadata = {
  title: 'Gallery — Liberty Moves Orlando',
  description: 'See the Liberty Moves Orlando team at work — trucks, crews, and real Orlando moves from quote to delivery.',
  alternates: { canonical: `${SITE.url}/gallery` },
};

const PLACEHOLDERS = [
  { t: 'Residential Moves', d: 'From 1-bed apartments to 5,000-sq-ft homes.', icon: Home },
  { t: 'Commercial Moves', d: 'Offices, retail, warehouses — nights and weekends.', icon: Truck },
  { t: 'Packing Day', d: 'Pro-grade materials, careful wrapping, nothing broken.', icon: Package },
  { t: 'On the Road', d: 'Long-distance Florida to anywhere in the U.S.', icon: Truck },
  { t: 'Careful Crews', d: 'Uniformed, background-checked, trained, respectful.', icon: Home },
  { t: 'Protected Goods', d: 'Pads, shrink wrap, dollies — everything protected.', icon: Package },
];

export default function Gallery() {
  return (
    <>
      <BreadcrumbsLd items={[{ name: 'Home', url: SITE.url }, { name: 'Gallery', url: `${SITE.url}/gallery` }]} />
      <PageHero eyebrow="Gallery" title="See our crews at work across Central Florida." subtitle="We’re refreshing our photo gallery — here’s a preview of what a typical Liberty Moves day looks like." />
      <section className="section-pad">
        <div className="container-site grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLACEHOLDERS.map((p) => (
            <div key={p.t} className="card">
              <div className="aspect-[4/3] bg-gradient-to-br from-[var(--color-primary)]/90 to-[var(--color-primary)] rounded-lg flex items-center justify-center text-white">
                <p.icon size={48} className="opacity-80" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-[var(--color-primary)]">{p.t}</h3>
              <p className="mt-1 text-sm text-[var(--color-muted)]">{p.d}</p>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
