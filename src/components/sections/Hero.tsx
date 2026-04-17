'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Star, Shield, Clock, ArrowRight, Zap } from 'lucide-react';
import { SITE } from '@/lib/site';
import { url, IMG } from '@/lib/images';
import FormEmbed from '@/components/FormEmbed';

export default function Hero({
  eyebrow = 'Orlando Moving Company',
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden">
      {/* Background image + overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={url(IMG.heroMovers, 1920)}
          alt="Liberty Moves Orlando crew loading a moving truck"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1729]/95 via-[#1e3a5f]/85 to-[#0a1729]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(245,158,11,0.15),transparent_60%)]" />
      </div>

      <div className="container-site relative py-20 md:py-32">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs uppercase tracking-[0.2em] font-bold text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/> {eyebrow}
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.02] text-white">
              {title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
              {subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/contact-us" className="group btn btn-primary text-base relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">Get a Free Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/></span>
              </Link>
              <a href={SITE.phoneLink} className="btn btn-secondary text-base">
                <Phone size={18} /> {SITE.phoneDisplay}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80">
              <div className="flex items-center gap-1.5">
                <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#f59e0b" className="text-[var(--color-accent)]"/>)}</div>
                <span className="font-semibold">{SITE.rating.toFixed(1)}</span>
                <span className="text-white/50">({SITE.reviewCount}+ Google reviews)</span>
              </div>
              <div className="flex items-center gap-1.5"><Shield size={14} className="text-[var(--color-accent)]"/> USDOT {SITE.usdot} · FLDACS {SITE.fldacs}</div>
              <div className="flex items-center gap-1.5"><Clock size={14} className="text-[var(--color-accent)]"/> Same-day available</div>
            </div>
          </div>

          {/* In-hero quote form */}
          <div className="lg:justify-self-end w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/20">
              <div className="bg-[var(--color-accent)] text-[var(--color-text)] px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap size={18} className="fill-[var(--color-text)]"/>
                  <div>
                    <div className="text-sm font-extrabold uppercase tracking-wide">Get Your Free Quote</div>
                    <div className="text-[11px] font-semibold opacity-80">Answered within the hour · No spam</div>
                  </div>
                </div>
              </div>
              <div className="bg-white">
                <FormEmbed height={530} formName="Liberty Moves — Hero Quote" />
              </div>
              <div className="bg-[var(--color-surface)] border-t border-[var(--color-border)] px-6 py-2.5 flex items-center justify-center text-xs gap-1 text-[var(--color-muted)]">
                <Shield size={12} className="text-[var(--color-accent)]"/> Licensed · Insured · USDOT {SITE.usdot}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
