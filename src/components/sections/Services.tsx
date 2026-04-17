import Link from 'next/link';
import { Home, Building2, Truck, Package, ArrowRight } from 'lucide-react';

const ICONS: Record<string, any> = {
  'residential-moving': Home,
  'commercial-moving': Building2,
  'long-distance-moving': Truck,
  'Packing-Services': Package,
};

export default function Services({
  services,
  title = 'Full-Service Moving',
  subtitle = 'Whatever you need moved, we move it — with care and upfront pricing.',
}: {
  services: Array<{ slug: string; title: string; blurb: string }>;
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="section-pad">
      <div className="container-site">
        <div className="max-w-2xl">
          <div className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-[0.2em]">Services</div>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">{title}</h2>
          <p className="mt-4 text-[var(--color-muted)] text-lg">{subtitle}</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => {
            const Icon = ICONS[s.slug] || Home;
            return (
              <Link key={s.slug} href={`/${s.slug}`} className="card group block">
                <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[var(--color-primary)]">{s.title}</h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{s.blurb}</p>
                <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-[var(--color-accent)] group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
