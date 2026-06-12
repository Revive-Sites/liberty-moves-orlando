'use client';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2, Loader2, Phone, AlertCircle } from 'lucide-react';
import { SITE } from '@/lib/site';

type Status = 'idle' | 'submitting' | 'success' | 'error';
type Lang = 'en' | 'es';

/** Bilingual copy. Spanish pages reuse the same form so every lead flows
 * through /api/quote and gets redirected to the thank-you page. */
const COPY: Record<Lang, {
  thankYouPath: string;
  firstName: string; lastName: string; phone: string; email: string;
  moveDate: string; moveSize: string; sizeSelect: string;
  sizeOpts: { v: string; l: string }[];
  origin: string; destination: string;
  details: string; detailsPlaceholder: string;
  submit: string; submitting: string;
  successTitle: string; successBody: string; callNow: string;
  errorFallback: string; disclaimer: string;
}> = {
  en: {
    thankYouPath: '/thank-you',
    firstName: 'First Name *', lastName: 'Last Name *', phone: 'Phone *', email: 'Email *',
    moveDate: 'Move Date *', moveSize: 'Move Size', sizeSelect: 'Select size...',
    sizeOpts: [
      { v: 'studio', l: 'Studio / 1 bedroom' },
      { v: '2br_apt', l: '2 bedroom apt' },
      { v: '2br_home', l: '2 bedroom home' },
      { v: '3br_home', l: '3 bedroom home' },
      { v: '4br_home', l: '4+ bedroom home' },
      { v: 'office', l: 'Office / Commercial' },
      { v: 'other', l: 'Other' },
    ],
    origin: 'Origin Address / ZIP *', destination: 'Destination Address / ZIP *',
    details: 'Details about your move',
    detailsPlaceholder: 'Anything we should know? Specialty items, stairs, elevators, timeline...',
    submit: 'Request a Free Estimate', submitting: 'Sending...',
    successTitle: 'Got it — we’ll be in touch.',
    successBody: 'A real person from our team will reply with your quote within the hour during business hours (7am–7pm, 7 days a week).',
    callNow: 'Or call us now at',
    errorFallback: 'Could not submit — please call us at',
    disclaimer: 'By submitting, you agree to be contacted by Liberty Moves Orlando. We never share your info.',
  },
  es: {
    thankYouPath: '/es/thank-you',
    firstName: 'Nombre *', lastName: 'Apellido *', phone: 'Teléfono *', email: 'Correo electrónico *',
    moveDate: 'Fecha de mudanza *', moveSize: 'Tamaño de mudanza', sizeSelect: 'Seleccione tamaño...',
    sizeOpts: [
      { v: 'studio', l: 'Estudio / 1 habitación' },
      { v: '2br_apt', l: 'Apartamento 2 habitaciones' },
      { v: '2br_home', l: 'Casa 2 habitaciones' },
      { v: '3br_home', l: 'Casa 3 habitaciones' },
      { v: '4br_home', l: 'Casa 4+ habitaciones' },
      { v: 'office', l: 'Oficina / Comercial' },
      { v: 'other', l: 'Otro' },
    ],
    origin: 'Dirección de origen / Código postal *', destination: 'Dirección de destino / Código postal *',
    details: 'Detalles sobre su mudanza',
    detailsPlaceholder: '¿Algo que debamos saber? Artículos especiales, escaleras, ascensores, fecha límite...',
    submit: 'Solicitar estimado gratis', submitting: 'Enviando...',
    successTitle: '¡Listo! Nos pondremos en contacto.',
    successBody: 'Una persona real de nuestro equipo le responderá con su cotización dentro de una hora en horario laboral (7am–7pm, los 7 días de la semana).',
    callNow: 'O llámenos ahora al',
    errorFallback: 'No se pudo enviar — por favor llámenos al',
    disclaimer: 'Al enviar, usted acepta ser contactado por Liberty Moves Orlando. Nunca compartimos su información.',
  },
};

/** Capture Google Ads gclid + UTMs from URL params and the _gcl_aw cookie set by the
 * Google Ads conversion linker. We read at submit time (not on mount) so that
 * SPA navigations after landing don't erase the params we captured earlier. */
function getAttribution(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const out: Record<string, string> = {};
  const params = new URLSearchParams(window.location.search);
  for (const k of ['gclid', 'fbclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']) {
    const v = params.get(k);
    if (v) out[k] = v;
  }
  // _gcl_aw cookie format: "GCL.<timestamp>.<gclid>" — set by the conversion linker
  // and persists for 90 days. Falls back to this when the URL no longer has gclid.
  if (!out.gclid) {
    const m = document.cookie.match(/(?:^|;\s*)_gcl_aw=([^;]+)/);
    if (m) {
      const parts = decodeURIComponent(m[1]).split('.');
      if (parts.length >= 3) out.gclid = parts.slice(2).join('.');
    }
  }
  out.landing_page = window.location.pathname + window.location.search;
  if (document.referrer) out.referrer = document.referrer;
  return out;
}

export default function QuoteForm({ compact = false, lang = 'en' }: { compact?: boolean; lang?: Lang }) {
  const router = useRouter();
  const t = COPY[lang];
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = { ...Object.fromEntries(data.entries()), ...getAttribution() };

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'Something went wrong.');
      }
      setStatus('success');
      form.reset();
      // Push to dataLayer for GTM tracking. Include attribution so the GTM
      // tag for the Google Ads conversion can populate enhanced-conversion
      // fields and pass the gclid through automatically.
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        const attribution = getAttribution();
        (window as any).dataLayer.push({
          event: 'lead_submitted',
          form: 'quote',
          gclid: attribution.gclid || null,
          fbclid: attribution.fbclid || null,
          utm_source: attribution.utm_source || null,
          utm_medium: attribution.utm_medium || null,
          utm_campaign: attribution.utm_campaign || null,
          utm_term: attribution.utm_term || null,
          utm_content: attribution.utm_content || null,
          // Enhanced conversions — hashed by GTM tag automatically if enabled.
          user_data: {
            email_address: payload.email || undefined,
            phone_number: payload.phone || undefined,
            address: {
              first_name: payload.firstName || undefined,
              last_name: payload.lastName || undefined,
              postal_code: payload.origin || undefined,
            },
          },
        });
      }
      // Send the lead to the thank-you page. The dataLayer push above runs
      // first (synchronously), so the GTM / Google Ads conversion tag fires
      // before this client-side navigation begins.
      router.push(t.thankYouPath);
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message || `${t.errorFallback} ${SITE.phoneDisplay}`);
    }
  }

  if (status === 'success') {
    return (
      <div className="p-6 text-center">
        <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
          <CheckCircle2 className="text-emerald-600" size={32} />
        </div>
        <h3 className="mt-4 text-xl font-extrabold text-[var(--color-primary)]">{t.successTitle}</h3>
        <p className="mt-2 text-sm text-[var(--color-muted)]">{t.successBody}</p>
        <a href={SITE.phoneLink} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-accent)]">
          <Phone size={14}/> {t.callNow} {SITE.phoneDisplay}
        </a>
      </div>
    );
  }

  const inputCls = 'w-full px-3 py-2.5 text-sm border border-[var(--color-border)] rounded-lg bg-white focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 transition';
  const labelCls = 'block text-xs font-semibold text-[var(--color-primary)] mb-1';

  return (
    <form onSubmit={onSubmit} className={compact ? 'p-5 space-y-3' : 'p-6 space-y-4'} noValidate>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelCls} htmlFor="firstName">{t.firstName}</label>
          <input id="firstName" name="firstName" required className={inputCls} placeholder="Jane" autoComplete="given-name" />
        </div>
        <div>
          <label className={labelCls} htmlFor="lastName">{t.lastName}</label>
          <input id="lastName" name="lastName" required className={inputCls} placeholder="Doe" autoComplete="family-name" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className={labelCls} htmlFor="phone">{t.phone}</label>
          <input id="phone" name="phone" required type="tel" className={inputCls} placeholder="407-555-0100" autoComplete="tel" />
        </div>
        <div>
          <label className={labelCls} htmlFor="email">{t.email}</label>
          <input id="email" name="email" required type="email" className={inputCls} placeholder="you@example.com" autoComplete="email" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className={labelCls} htmlFor="moveDate">{t.moveDate}</label>
          <input id="moveDate" name="moveDate" required type="date" className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="moveSize">{t.moveSize}</label>
          <select id="moveSize" name="moveSize" className={inputCls} defaultValue="">
            <option value="">{t.sizeSelect}</option>
            {t.sizeOpts.map((o) => (
              <option key={o.v} value={o.v}>{o.l}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className={labelCls} htmlFor="origin">{t.origin}</label>
          <input id="origin" name="origin" required className={inputCls} placeholder="32789" autoComplete="address-level2" />
        </div>
        <div>
          <label className={labelCls} htmlFor="destination">{t.destination}</label>
          <input id="destination" name="destination" required className={inputCls} placeholder="32801" />
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="details">{t.details}</label>
        <textarea id="details" name="details" rows={compact ? 2 : 3} className={inputCls + ' resize-none'} placeholder={t.detailsPlaceholder} />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] disabled:opacity-60 text-white font-extrabold py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 text-base"
      >
        {status === 'submitting' ? <><Loader2 size={18} className="animate-spin"/> {t.submitting}</> : <>{t.submit}</>}
      </button>

      {status === 'error' && (
        <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
          <AlertCircle size={16} className="shrink-0 mt-0.5"/>
          <div>
            {errorMsg || 'Submission failed.'} <a href={SITE.phoneLink} className="underline font-bold">{SITE.phoneDisplay}</a>.
          </div>
        </div>
      )}

      <p className="text-[10px] text-[var(--color-muted)] text-center">{t.disclaimer}</p>
    </form>
  );
}
