'use client';
import Link from 'next/link';
import { Phone, Star, Shield, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SITE } from '@/lib/site';
import { url, IMG, VIDEOS } from '@/lib/images';

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
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={url(IMG.heroMovers, 1920)}
          className="w-full h-full object-cover"
        >
          <source src={VIDEOS.heroPrimary} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1729]/95 via-[#1e3a5f]/75 to-[#0a1729]/85"/>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(220,38,38,0.15),transparent_60%)]"/>
      </div>

      <div className="container-site relative py-20 md:py-28 lg:py-32">
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
              <Link href="/contact-us" className="group btn btn-primary text-base">
                <span className="flex items-center gap-2">Get a Free Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/></span>
              </Link>
              <a href={SITE.phoneLink} className="btn btn-secondary text-base">
                <Phone size={18} /> {SITE.phoneDisplay}
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80">
              <div className="flex items-center gap-1.5">
                <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#fbbf24" className="text-amber-400"/>)}</div>
                <span className="font-semibold">{SITE.rating.toFixed(1)}</span>
                <span className="text-white/50">({SITE.reviewCount}+ Google reviews)</span>
              </div>
              <div className="flex items-center gap-1.5"><Shield size={14} className="text-[var(--color-accent)]"/> USDOT {SITE.usdot} · FLDACS {SITE.fldacs}</div>
              <div className="flex items-center gap-1.5"><Clock size={14} className="text-[var(--color-accent)]"/> Same-day available</div>
            </div>
          </div>

          {/* Quote card — links to working form instead of broken iframe */}
          <div className="lg:justify-self-end w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/20">
              <div className="bg-[var(--color-accent)] text-white px-6 py-4 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest font-extrabold">Free Quote in Minutes</div>
                  <div className="text-sm opacity-90">Answered within the hour</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-widest opacity-80">No obligation</div>
                  <div className="text-[10px] opacity-70">Real person</div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-2 mb-5 text-sm text-[var(--color-text)]">
                  {['7 days a week — 7 am to 7 pm', 'Licensed, bonded & insured', 'No-pressure, written estimate', 'Serving all of Central Florida'].map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[var(--color-accent)] shrink-0"/>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact-us" className="block w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-extrabold py-4 rounded-lg text-center transition text-lg">
                  Request a Free Quote →
                </Link>
                <a href={SITE.phoneLink} className="mt-2 flex items-center justify-center gap-2 w-full border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white text-[var(--color-primary)] font-bold py-4 rounded-lg text-center transition">
                  <Phone size={18}/>
                  <span className="text-lg">{SITE.phoneDisplay}</span>
                </a>
              </div>
              <div className="bg-[var(--color-surface)] border-t border-[var(--color-border)] px-6 py-2.5 flex items-center justify-center text-xs gap-1 text-[var(--color-muted)]">
                <Shield size={12} className="text-[var(--color-accent)]"/> USDOT {SITE.usdot} · FLDACS {SITE.fldacs}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Big phone bar on desktop — mimics live site */}
      <div className="bg-[var(--color-accent)] text-white">
        <div className="container-site py-3 flex flex-wrap items-center justify-center md:justify-between gap-3 text-sm">
          <div className="flex items-center gap-2 font-semibold">
            <Clock size={14}/>
            <span>Open today · 7 am – 7 pm</span>
          </div>
          <a href={SITE.phoneLink} className="flex items-center gap-2 font-extrabold text-base md:text-lg hover:opacity-90">
            <Phone size={18}/>
            Call Now: {SITE.phoneDisplay}
          </a>
          <Link href="/contact-us" className="font-bold underline underline-offset-4 hover:opacity-90">Request a Free Quote →</Link>
        </div>
      </div>
    </section>
  );
}
