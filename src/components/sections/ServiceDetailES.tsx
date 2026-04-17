import PageHero from '@/components/sections/PageHero';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import FAQ from '@/components/sections/FAQ';
import { CheckCircle2 } from 'lucide-react';

export default function ServiceDetailES({
  eyebrow, title, subtitle, intro, benefits, process, faqs,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  benefits: Array<{ t: string; d: string }>;
  process: Array<{ n: number; t: string; d: string }>;
  faqs: Array<{ q: string; a: string }>;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <section className="section-pad">
        <div className="container-site max-w-4xl prose-ink"><p>{intro}</p></div>
      </section>
      <section className="pb-8">
        <div className="container-site grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div key={b.t} className="card">
              <CheckCircle2 className="text-[var(--color-accent)]" size={24} />
              <h3 className="mt-3 text-lg font-bold text-[var(--color-primary)]">{b.t}</h3>
              <p className="mt-1 text-sm text-[var(--color-muted)] leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section-pad bg-[var(--color-surface)]">
        <div className="container-site">
          <h2 className="text-2xl md:text-4xl font-extrabold">Nuestro proceso, de principio a fin.</h2>
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
      <FAQ items={faqs} />
      <Testimonials />
      <CTA title="¿Listo para mudarse? Hagámoslo simple." subtitle="Cuéntenos sobre su mudanza y le enviaremos una cotización sin compromiso el mismo día." />
    </>
  );
}
