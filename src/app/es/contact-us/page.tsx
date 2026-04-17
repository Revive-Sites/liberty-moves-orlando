import PageHero from '@/components/sections/PageHero';
import FormEmbed from '@/components/FormEmbed';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Contacto | Liberty Moves Orlando — Cotización Gratis',
  description: 'Contacte a Liberty Moves Orlando para servicios de mudanza locales y de larga distancia. Cotización gratis con expertos profesionales.',
  alternates: { canonical: `${SITE.url}/es/contact-us`, languages: { 'en-US': `${SITE.url}/contact-us`, 'es': `${SITE.url}/es/contact-us` } },
};

export default function Contact() {
  return (
    <>
      <BreadcrumbsLd items={[{ name: 'Inicio', url: `${SITE.url}/es` }, { name: 'Contacto', url: `${SITE.url}/es/contact-us` }]} />
      <PageHero eyebrow="Contacto" title="Hagamos su mudanza simple — contáctenos hoy." subtitle="Complete el formulario, llame o envíe un mensaje de texto. Una persona real le responderá el mismo día con una cotización honesta." />
      <section className="section-pad">
        <div className="container-site grid lg:grid-cols-[1fr_1.2fr] gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--color-primary)]">Cotización gratis sin presión</h2>
            <p className="mt-3 text-[var(--color-muted)] leading-relaxed">Cuéntenos sobre su mudanza. Le responderemos el mismo día con un estimado claro y una conversación amigable — sin árbol telefónico, sin presión.</p>
            <div className="mt-8 space-y-5">
              <a href={SITE.phoneLink} className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center"><Phone size={18}/></div>
                <div><div className="text-xs uppercase tracking-widest text-[var(--color-muted)]">Llamar o enviar texto</div><div className="text-lg font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)]">{SITE.phoneDisplay}</div></div>
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center"><Mail size={18}/></div>
                <div><div className="text-xs uppercase tracking-widest text-[var(--color-muted)]">Correo electrónico</div><div className="text-lg font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)]">{SITE.email}</div></div>
              </a>
              <div className="flex items-start gap-4"><div className="w-11 h-11 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center"><MapPin size={18}/></div>
                <div><div className="text-xs uppercase tracking-widest text-[var(--color-muted)]">Área de servicio</div><div className="text-lg font-bold text-[var(--color-primary)]">Orlando y todo el centro de Florida</div></div>
              </div>
              <div className="flex items-start gap-4"><div className="w-11 h-11 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center"><Clock size={18}/></div>
                <div><div className="text-xs uppercase tracking-widest text-[var(--color-muted)]">Horario</div><div className="text-lg font-bold text-[var(--color-primary)]">Lun–Dom, 7am–7pm</div></div>
              </div>
              <div className="text-xs text-[var(--color-muted)] mt-6">USDOT {SITE.usdot} · FLDACS {SITE.fldacs}</div>
            </div>
          </div>
          <div><FormEmbed height={720} formName="Liberty Moves Orlando — Cotización"/></div>
        </div>
      </section>
    </>
  );
}
