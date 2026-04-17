import Link from 'next/link';
import { Phone } from 'lucide-react';
import { SITE } from '@/lib/site';

export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="hero-gradient text-white">
      <div className="container-site py-14 md:py-20">
        <div className="text-[var(--color-accent)] text-xs font-semibold uppercase tracking-[0.2em]">{eyebrow}</div>
        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-white max-w-4xl">{title}</h1>
        {subtitle && <p className="mt-4 text-white/80 text-lg max-w-2xl">{subtitle}</p>}
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact-us" className="btn btn-primary">Get a Free Quote</Link>
          <a href={SITE.phoneLink} className="btn btn-secondary"><Phone size={18}/> {SITE.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
