import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { url, IMG } from '@/lib/images';

const SERVICE_IMG: Record<string, any> = {
  'residential-moving': IMG.residential,
  'commercial-moving': IMG.commercial,
  'long-distance-moving': IMG.longDistance,
  'Packing-Services': IMG.packing,
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
          {services.map((s, i) => {
            const img = SERVICE_IMG[s.slug];
            return (
              <Link key={s.slug} href={`/${s.slug}`} className="group block rounded-2xl overflow-hidden bg-white border border-[var(--color-border)] shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {img && (
                    <Image
                      src={url(img, 800)}
                      alt={s.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1729]/80 via-[#0a1729]/20 to-transparent"/>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-[var(--color-accent)] text-xs font-semibold uppercase tracking-widest">Service 0{i + 1}</div>
                    <h3 className="text-xl font-extrabold text-white">{s.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">{s.blurb}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-[var(--color-accent)] group-hover:gap-2 transition-all">
                    See details <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
