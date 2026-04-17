import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { SITE } from '@/lib/site';
import { url, IMG } from '@/lib/images';

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  heroImage,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  heroImage?: { hash: string; ext: 'png' | 'jpg' | 'jpeg' | 'webp' };
}) {
  const img = heroImage || IMG.heroMovers;
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={url(img, 1920)}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1729]/90 via-[#1e3a5f]/70 to-[#0a1729]/80"/>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(220,38,38,0.15),transparent_65%)]"/>
      </div>
      <div className="container-site py-14 md:py-20 relative">
        <div className="text-[var(--color-accent)] text-xs font-semibold uppercase tracking-[0.2em]">{eyebrow}</div>
        <h1 className="mt-3 text-3xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl leading-[1.05]">{title}</h1>
        {subtitle && <p className="mt-4 text-white/85 text-lg max-w-2xl leading-relaxed">{subtitle}</p>}
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact-us" className="btn btn-primary">Get a Free Quote</Link>
          <a href={SITE.phoneLink} className="btn btn-secondary"><Phone size={18}/> {SITE.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
