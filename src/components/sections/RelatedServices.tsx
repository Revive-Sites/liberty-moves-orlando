import Link from 'next/link';
import { ArrowRight, Home, Building2, Truck, Package, MapPin } from 'lucide-react';
import { SERVICES } from '@/lib/site';

const ICONS: Record<string, any> = {
  'local-movers': MapPin,
  'residential-moving': Home,
  'commercial-moving': Building2,
  'long-distance-moving': Truck,
  'packing-services': Package,
};

export default function RelatedServices({ currentSlug }: { currentSlug?: string }) {
  const related = SERVICES.filter((s) => s.slug !== currentSlug);
  return (
    <section className="section-pad">
      <div className="container-site">
        <h2 className="text-2xl md:text-4xl font-extrabold">Other moving services we offer</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {related.map((s) => {
            const Icon = ICONS[s.slug] || Home;
            return (
              <Link key={s.slug} href={`/${s.slug}`} className="card group">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center mb-3">
                  <Icon size={18} />
                </div>
                <h3 className="text-base font-bold text-[var(--color-primary)]">{s.title}</h3>
                <p className="mt-1 text-sm text-[var(--color-muted)] leading-relaxed">{s.blurb}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-accent)] group-hover:gap-2 transition-all">Learn more <ArrowRight size={14} /></div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
