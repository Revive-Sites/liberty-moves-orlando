import Link from 'next/link';
import { Phone } from 'lucide-react';
import { SITE } from '@/lib/site';

export default function CTA({
  title = 'Ready to move? Let’s make it simple.',
  subtitle = 'Tell us a little about your move and we’ll send a no-pressure quote within the day.',
}: { title?: string; subtitle?: string }) {
  return (
    <section className="bg-[var(--color-primary)] text-white">
      <div className="container-site py-14 md:py-20">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">{title}</h2>
            <p className="mt-4 text-white/85 leading-relaxed">{subtitle}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact-us" className="btn btn-primary">Get a Free Quote</Link>
              <a href={SITE.phoneLink} className="btn btn-secondary"><Phone size={18}/> {SITE.phoneDisplay}</a>
            </div>
          </div>
          <div className="md:text-right">
            <div className="inline-block bg-white/5 border border-white/20 rounded-2xl px-6 py-5 backdrop-blur">
              <div className="text-xs uppercase tracking-[0.2em] text-white/60">Service Area</div>
              <div className="mt-2 font-bold text-lg">Serving all of Central Florida</div>
              <div className="mt-3 text-sm text-white/75 max-w-xs">Orlando, Winter Park, Kissimmee, Lake Mary, Sanford, Altamonte Springs, Apopka, and 11+ more cities.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
