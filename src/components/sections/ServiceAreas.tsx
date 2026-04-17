import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { CITIES } from '@/lib/site';

export default function ServiceAreas() {
  return (
    <section className="section-pad bg-[var(--color-surface)]">
      <div className="container-site">
        <div className="max-w-2xl">
          <div className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-[0.2em]">Service Areas</div>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">Moving across Central Florida.</h2>
          <p className="mt-4 text-[var(--color-muted)] text-lg">
            Local crews who actually know the streets, HOAs, and elevators. Click your city for area-specific info.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {CITIES.map((c) => (
            <Link key={c.slug} href={`/${c.slug}`}
              className="group flex items-center justify-between gap-2 bg-white border border-[var(--color-border)] rounded-lg px-4 py-3 hover:border-[var(--color-accent)] hover:shadow-sm transition">
              <div className="flex items-center gap-2 min-w-0">
                <MapPin size={14} className="text-[var(--color-accent)] shrink-0" />
                <span className="text-sm font-semibold text-[var(--color-primary)] truncate">{c.name}</span>
              </div>
              <ArrowRight size={14} className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
