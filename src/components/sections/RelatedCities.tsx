import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { CITIES } from '@/lib/site';

export default function RelatedCities({ currentSlug, count = 6 }: { currentSlug?: string; count?: number }) {
  const related = CITIES.filter((c) => c.slug !== currentSlug).slice(0, count);
  return (
    <section className="section-pad bg-[var(--color-surface)]">
      <div className="container-site">
        <div className="max-w-2xl">
          <div className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-[0.2em]">Nearby Areas</div>
          <h2 className="mt-2 text-2xl md:text-4xl font-extrabold">Also serving these Central Florida cities</h2>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
          {related.map((c) => (
            <Link key={c.slug} href={`/${c.slug}`}
              className="group flex items-center justify-between gap-2 bg-white border border-[var(--color-border)] rounded-lg px-4 py-3 hover:border-[var(--color-accent)] hover:shadow-sm transition">
              <div className="flex items-center gap-2 min-w-0">
                <MapPin size={14} className="text-[var(--color-accent)] shrink-0" />
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-[var(--color-primary)] truncate">{c.name} Movers</div>
                  <div className="text-xs text-[var(--color-muted)] truncate">{c.region}</div>
                </div>
              </div>
              <ArrowRight size={14} className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
