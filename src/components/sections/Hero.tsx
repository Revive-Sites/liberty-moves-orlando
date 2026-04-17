import Link from 'next/link';
import { Phone, Star, Shield, Clock } from 'lucide-react';
import { SITE } from '@/lib/site';

export default function Hero({
  eyebrow = 'Orlando Moving Company',
  title,
  subtitle,
  primaryCta = 'Get a Free Quote',
  primaryHref = '/contact-us',
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta?: string;
  primaryHref?: string;
}) {
  return (
    <section className="hero-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{ backgroundImage: "url('/images/truck-pattern.svg')", backgroundSize: 'cover' }} />
      <div className="container-site relative py-16 md:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs uppercase tracking-[0.2em] font-semibold">
            {eyebrow}
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05] text-white">
            {title}
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href={primaryHref} className="btn btn-primary">{primaryCta}</Link>
            <a href={SITE.phoneLink} className="btn btn-secondary">
              <Phone size={18} /> {SITE.phoneDisplay}
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
            {[
              { icon: Star, label: '5-Star Rated', sub: 'Local reviews' },
              { icon: Shield, label: 'Licensed', sub: `USDOT ${SITE.usdot}` },
              { icon: Clock, label: 'On-Time', sub: '98% same-day' },
              { icon: Phone, label: 'Free Quote', sub: 'In minutes' },
            ].map((t) => (
              <div key={t.label} className="flex items-start gap-2">
                <t.icon className="text-[var(--color-accent)] shrink-0 mt-0.5" size={18} />
                <div>
                  <div className="text-sm font-semibold">{t.label}</div>
                  <div className="text-xs text-white/70">{t.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
