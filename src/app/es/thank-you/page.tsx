import Link from 'next/link';
import { CheckCircle2, Phone, Clock, ClipboardList, Truck, Star, ArrowRight } from 'lucide-react';
import { SITE } from '@/lib/site';

export const metadata = {
  title: { absolute: 'Gracias | Liberty Moves Orlando' },
  description:
    'Gracias por contactar a Liberty Moves Orlando. Recibimos su solicitud — nuestro equipo se comunicará con usted pronto con su cotización gratis y sin presión.',
  alternates: { canonical: `${SITE.url}/es/thank-you` },
  robots: { index: false, follow: true },
};

const STEPS = [
  {
    icon: ClipboardList,
    title: 'Revisamos sus datos',
    body: 'Un coordinador de mudanzas revisa lo que nos envió y reúne todo lo necesario para una cotización precisa y transparente.',
  },
  {
    icon: Phone,
    title: 'Le contactamos — normalmente el mismo día',
    body: 'Espere una llamada o mensaje de texto amigable para confirmar los detalles, responder preguntas y asegurar su estimado gratis. Sin presión, nunca.',
  },
  {
    icon: Truck,
    title: 'Planeamos su mudanza',
    body: 'Cuando esté listo, agendamos su fecha, asignamos un equipo uniformado y nos encargamos del resto — de principio a fin.',
  },
];

export default function ThankYouEs() {
  return (
    <>
      {/* Confirmación */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.18),transparent_60%)]" />
        <div className="container-site py-16 md:py-24 relative text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/40">
            <CheckCircle2 className="text-emerald-400" size={48} strokeWidth={2.2} />
          </div>
          <div className="mt-6 text-[var(--color-accent)] text-xs font-semibold uppercase tracking-[0.2em]">
            Solicitud recibida
          </div>
          <h1 className="mt-3 text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05]">
            ¡Gracias — todo listo!
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/85 text-lg leading-relaxed">
            Recibimos su solicitud y un coordinador de Liberty Moves Orlando ya está trabajando en
            ella. Relájese — nos comunicaremos con usted pronto con su cotización de mudanza gratis y
            sin presión.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={SITE.phoneLink} className="btn btn-primary">
              <Phone size={18} /> Llámenos ahora — {SITE.phoneDisplay}
            </a>
            <Link href="/es" className="btn btn-secondary">
              Volver al inicio
            </Link>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/70">
            <Clock size={16} className="text-emerald-400" />
            Tiempo de respuesta típico: el mismo día hábil
          </div>
        </div>
      </section>

      {/* Qué sigue */}
      <section className="section-pad bg-[var(--color-bg)]">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-[var(--color-accent)] text-xs font-semibold uppercase tracking-[0.2em]">
              Qué sigue
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">Así se ven las próximas 24 horas</h2>
            <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
              Sin llamadas perdidas, sin cargos sorpresa. Solo un proceso claro y sencillo desde su
              primer mensaje hasta el día de la mudanza.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <div key={step.title} className="card relative">
                <div className="absolute -top-4 left-6 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-accent)] text-white font-extrabold text-sm shadow-lg">
                  {i + 1}
                </div>
                <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <step.icon size={24} />
                </div>
                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-[var(--color-text)] leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mientras espera */}
      <section className="bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="container-site py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold">Mientras espera…</h2>
              <p className="mt-4 text-[var(--color-text)] leading-relaxed">
                Adelántese para una mudanza sin estrés. Conozca nuestros servicios de mudanza en
                Orlando — precios, empaque, tiempos y todo lo demás.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/es" className="btn btn-primary">
                  Ver nuestros servicios <ArrowRight size={18} />
                </Link>
                <a href={SITE.phoneLink} className="btn btn-outline">
                  <Phone size={18} /> {SITE.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="card bg-white">
              <div className="flex items-center gap-1 text-[var(--color-accent)]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 text-lg font-semibold text-[var(--color-primary)]">
                Calificados con {SITE.rating.toFixed(1)} estrellas por más de {SITE.reviewCount} familias
                del centro de Florida.
              </p>
              <p className="mt-2 text-[var(--color-muted)] leading-relaxed">
                Con licencia y asegurados — USDOT {SITE.usdot}, FLDACS {SITE.fldacs}. Precios
                transparentes, equipos cuidadosos y servicio puntual siempre.
              </p>
              <a
                href={SITE.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-bold text-[var(--color-accent)] hover:text-[var(--color-accent-dark)]"
              >
                Lea nuestras reseñas de Google <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section className="bg-[var(--color-primary)] text-white">
        <div className="container-site py-12 md:py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            ¿Necesita hablar con alguien de inmediato?
          </h2>
          <p className="mt-3 text-white/85">
            Nuestro equipo está aquí para ayudar — llámenos y pongamos su mudanza en marcha.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={SITE.phoneLink} className="btn btn-primary">
              <Phone size={18} /> {SITE.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} className="btn btn-secondary">
              Envíenos un correo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
