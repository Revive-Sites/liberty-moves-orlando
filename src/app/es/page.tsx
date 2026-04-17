import Link from 'next/link';
import Image from 'next/image';
import { Phone, Star, Shield, Clock, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { LocalBusinessLd, WebsiteLd, FAQLd } from '@/components/JsonLd';
import FormEmbed from '@/components/FormEmbed';
import TrustCounter from '@/components/sections/TrustCounter';
import CTA from '@/components/sections/CTA';
import FAQ from '@/components/sections/FAQ';
import { SITE, CITIES, SERVICES } from '@/lib/site';
import { url, IMG } from '@/lib/images';

const FAQS_ES = [
  { q: '¿Cuánto cuestan las mudanzas en Orlando?', a: 'Las mudanzas locales en Orlando con Liberty Moves generalmente cuestan entre $600 y $2,500, dependiendo del tamaño de la casa y el equipo. Un apartamento de 2 habitaciones cuesta entre $650 y $1,100. Una casa de 3 a 4 habitaciones cuesta entre $1,200 y $2,400. Cada cotización es por escrito y sin tarifas ocultas.' },
  { q: '¿Están asegurados y con licencia?', a: 'Sí. Liberty Moves Orlando tiene licencia del Departamento de Transporte de EE. UU. (USDOT 3455436) con cobertura total de carga y responsabilidad. Proporcionamos certificados de seguro a HOAs y edificios cuando lo soliciten.' },
  { q: '¿Hablan español?', a: 'Sí. Contamos con personal bilingüe para atender llamadas, cotizaciones y el día de la mudanza. Llámenos al 407-641-2887 y pida hablar con alguien en español.' },
  { q: '¿Con cuánto tiempo debo reservar?', a: 'De 2 a 3 semanas para mudanzas entre semana; de 3 a 4 semanas para fines de semana. Las fechas de fin de mes se llenan primero. ¿Necesita mudarse antes? Llámenos — a menudo podemos acomodar mudanzas de último minuto.' },
  { q: '¿Ofrecen mudanzas de larga distancia?', a: 'Sí — a cualquier parte de los Estados Unidos continentales. Un camión, una cuadrilla, entrega directa. Sin transferencias en almacenes ni subcontratistas. Licencia interestatal USDOT 3455436.' },
  { q: '¿Empacan mis cosas?', a: 'Sí. Ofrecemos empaque completo (materiales + trabajo), empaque parcial (solo la cocina o artículos frágiles), o solo mudanza. Los materiales de empaque se venden al costo, nunca con sobreprecio.' },
];

export const metadata = {
  title: 'Mudanzas Orlando | Liberty Moves Orlando — Mudanzas Locales y de Larga Distancia',
  description:
    'Mudanzas en Orlando con precios claros y equipos cuidadosos. Liberty Moves Orlando — licencia USDOT 3455436, 5 estrellas, sirviendo todo el centro de Florida. Cotización gratis en minutos.',
  keywords: ['mudanzas orlando', 'compañía de mudanzas orlando', 'mudanzas locales orlando', 'mudanza larga distancia florida'],
  alternates: {
    canonical: `${SITE.url}/es`,
    languages: {
      'en-US': SITE.url,
      'es': `${SITE.url}/es`,
    },
  },
  openGraph: {
    title: 'Mudanzas Orlando | Liberty Moves Orlando',
    description: 'Compañía de mudanzas con licencia en Orlando. Precios claros, equipos cuidadosos, cotizaciones gratis.',
    locale: 'es_US',
  },
};

export default function SpanishHome() {
  return (
    <>
      <LocalBusinessLd />
      <WebsiteLd />
      <FAQLd items={FAQS_ES} />

      {/* Hero in Spanish */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src={url(IMG.heroMovers, 1920)} alt="Equipo de mudanza de Liberty Moves Orlando" fill priority sizes="100vw" className="object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1729]/95 via-[#1e3a5f]/85 to-[#0a1729]/80"/>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(245,158,11,0.15),transparent_60%)]"/>
        </div>
        <div className="container-site relative py-20 md:py-32">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs uppercase tracking-[0.2em] font-bold text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/> Compañía de Mudanzas en Orlando
              </div>
              <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.02] text-white">
                Mudanzas en Orlando que cuidan sus cosas como si fueran nuestras.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
                Con licencia, asegurados y con 5 estrellas. Precios claros, equipos cuidadosos, y servicio sin sorpresas desde la cotización hasta la descarga. Servimos Orlando y todo el centro de Florida.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/contact-us" className="btn btn-primary text-base">
                  Cotización Gratis <ArrowRight size={18}/>
                </Link>
                <a href={SITE.phoneLink} className="btn btn-secondary text-base">
                  <Phone size={18}/> {SITE.phoneDisplay}
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80">
                <div className="flex items-center gap-1.5">
                  <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#f59e0b" className="text-[var(--color-accent)]"/>)}</div>
                  <span className="font-semibold">5.0</span>
                  <span className="text-white/50">(47 reseñas)</span>
                </div>
                <div className="flex items-center gap-1.5"><Shield size={14} className="text-[var(--color-accent)]"/> USDOT {SITE.usdot}</div>
                <div className="flex items-center gap-1.5"><Clock size={14} className="text-[var(--color-accent)]"/> Disponible el mismo día</div>
              </div>
            </div>

            <div className="lg:justify-self-end w-full max-w-md">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/20">
                <div className="bg-[var(--color-accent)] text-[var(--color-text)] px-6 py-3 flex items-center gap-2">
                  <Zap size={18} className="fill-[var(--color-text)]"/>
                  <div>
                    <div className="text-sm font-extrabold uppercase tracking-wide">Cotización Gratis</div>
                    <div className="text-[11px] font-semibold opacity-80">Respuesta en menos de una hora</div>
                  </div>
                </div>
                <div className="bg-white">
                  <FormEmbed height={530} formName="Liberty Moves — Cotización"/>
                </div>
                <div className="bg-[var(--color-surface)] border-t border-[var(--color-border)] px-6 py-2.5 flex items-center justify-center text-xs gap-1 text-[var(--color-muted)]">
                  <Shield size={12} className="text-[var(--color-accent)]"/> Con licencia · Asegurados · USDOT {SITE.usdot}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustCounter />

      <section className="section-pad">
        <div className="container-site max-w-4xl prose-ink">
          <h2 className="text-2xl md:text-4xl font-extrabold">La compañía de mudanzas en Orlando que las familias llaman de nuevo.</h2>
          <p>Liberty Moves Orlando es una compañía de mudanzas familiar y con licencia, con sede en Orlando, Florida. Servimos cada rincón del centro de Florida — desde Winter Park y Windermere hasta Kissimmee, Lake Mary, y hasta los confines de los condados de Osceola, Seminole, Orange, y Lake.</p>
          <p>Tenemos licencia del Departamento de Transporte de EE. UU. (<strong>USDOT {SITE.usdot}</strong>), completamente afianzados, y asegurados con cobertura de carga y responsabilidad. Nuestras cuadrillas son uniformadas, con verificación de antecedentes, y entrenadas — las mismas personas que cargan su camión son las que lo descargan.</p>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-surface)]">
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-[0.2em]">Servicios</div>
            <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">Mudanzas Completas en Orlando</h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: 'Mudanzas Residenciales', d: 'Casas, apartamentos, condominios — mudanzas locales en un solo día.' },
              { t: 'Mudanzas Comerciales', d: 'Oficinas, tiendas, almacenes. Mudanzas de fin de semana para mantener su negocio abierto.' },
              { t: 'Larga Distancia', d: 'De Florida a cualquier parte del país. Camiones dedicados, precios claros.' },
              { t: 'Servicios de Empaque', d: 'Empaque profesional con materiales. Lo empacamos, lo mudamos, somos responsables.' },
            ].map((s) => (
              <div key={s.t} className="card">
                <CheckCircle2 className="text-[var(--color-accent)]" size={22}/>
                <h3 className="mt-3 text-lg font-bold text-[var(--color-primary)]">{s.t}</h3>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site max-w-4xl">
          <div className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-[0.2em]">Preguntas Frecuentes</div>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">Respuestas directas.</h2>
        </div>
        <FAQ items={FAQS_ES}/>
      </section>

      <CTA title="¿Listo para mudarse?" subtitle="Llame, envíe un mensaje de texto, o solicite una cotización en línea. Le responderemos el mismo día con un precio por escrito." />

      <section className="py-8 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="container-site text-center text-sm text-[var(--color-muted)]">
          <Link href="/" className="text-[var(--color-primary)] font-semibold hover:text-[var(--color-accent)]">🇺🇸 View in English</Link>
          <span className="mx-2">·</span>
          <a href={SITE.phoneLink} className="font-semibold">{SITE.phoneDisplay}</a>
        </div>
      </section>
    </>
  );
}
