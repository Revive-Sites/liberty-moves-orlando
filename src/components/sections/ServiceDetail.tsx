import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import Testimonials from '@/components/sections/Testimonials';
import ServiceAreas from '@/components/sections/ServiceAreas';
import CTA from '@/components/sections/CTA';
import FAQ from '@/components/sections/FAQ';
import { CheckCircle2, Phone } from 'lucide-react';
import { url, IMG, type GhlImage } from '@/lib/images';
import { SITE } from '@/lib/site';

type ImgDef = { hash: string; ext: 'png' | 'jpg' | 'jpeg' | 'webp' };

export default function ServiceDetail({
  eyebrow, title, subtitle, intro, benefits, process, faqs, heroImage, sectionImages,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  benefits: Array<{ t: string; d: string }>;
  process: Array<{ n: number; t: string; d: string }>;
  faqs: Array<{ q: string; a: string }>;
  heroImage?: ImgDef;
  sectionImages?: {
    intro?: ImgDef;
    benefits?: ImgDef;
    process?: ImgDef;
    close?: ImgDef;
  };
}) {
  const introImg = sectionImages?.intro || IMG.crewWorking;
  const benefitsImg = sectionImages?.benefits || IMG.movingBox;
  const closeImg = sectionImages?.close || IMG.truckSide;

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />

      {/* Intro + big photo */}
      <section className="section-pad">
        <div className="container-site grid lg:grid-cols-2 gap-12 items-center">
          <div className="prose-ink">
            <p className="text-xl text-[var(--color-primary)] font-semibold leading-relaxed">{intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact-us" className="btn btn-primary">Get a Free Quote</Link>
              <a href={SITE.phoneLink} className="btn btn-outline"><Phone size={16}/> {SITE.phoneDisplay}</a>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image src={url(introImg, 1000)} alt={title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover"/>
            <div className="absolute top-4 left-4 px-3 py-1 bg-[var(--color-accent)] text-white text-xs font-extrabold uppercase tracking-widest rounded">Licensed FL Mover</div>
          </div>
        </div>
      </section>

      {/* Benefits grid with photo */}
      <section className="section-pad bg-[var(--color-surface)]">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
            <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image src={url(benefitsImg, 900)} alt="Liberty Moves Orlando crew" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover"/>
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-[0.2em]">Why families pick us</div>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">{title.split(' ').slice(0, 3).join(' ')} — done right.</h2>
              <div className="mt-8 grid md:grid-cols-2 gap-5">
                {benefits.map((b) => (
                  <div key={b.t} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={22}/>
                    <div>
                      <h3 className="font-bold text-[var(--color-primary)]">{b.t}</h3>
                      <p className="mt-1 text-sm text-[var(--color-muted)] leading-relaxed">{b.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad">
        <div className="container-site">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center">Our process, start to finish.</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p) => (
              <div key={p.n} className="card">
                <div className="text-5xl font-extrabold text-[var(--color-accent)] leading-none">{String(p.n).padStart(2, '0')}</div>
                <h3 className="mt-3 text-lg font-bold text-[var(--color-primary)]">{p.t}</h3>
                <p className="mt-1 text-sm text-[var(--color-muted)] leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed photo banner CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src={url(closeImg, 1600)} alt="Liberty Moves Orlando team" fill sizes="100vw" className="object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1729]/90 via-[#1e3a5f]/80 to-[#0a1729]/50"/>
        </div>
        <div className="container-site py-16 md:py-24 text-white">
          <div className="max-w-2xl">
            <div className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-[0.2em]">Ready when you are</div>
            <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">Tell us about your move. We\u2019ll handle the rest.</h2>
            <p className="mt-4 text-white/80">Free, written quote within the day. Call, text, or request online.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact-us" className="btn btn-primary text-base">Get a Free Quote →</Link>
              <a href={SITE.phoneLink} className="btn btn-secondary text-base"><Phone size={16}/> {SITE.phoneDisplay}</a>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />
      <Testimonials />
      <ServiceAreas />
      <CTA />
    </>
  );
}
