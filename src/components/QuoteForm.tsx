'use client';
import { useState, FormEvent } from 'react';
import { CheckCircle2, Loader2, Phone, AlertCircle } from 'lucide-react';
import { SITE } from '@/lib/site';

type Status = 'idle' | 'submitting' | 'success' | 'error';

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

export default function QuoteForm({ compact = false }: { compact?: boolean }) {
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
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message || 'Could not submit — please call us at ' + SITE.phoneDisplay);
    }
  }

  if (status === 'success') {
    return (
      <div className="p-6 text-center">
        <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
          <CheckCircle2 className="text-emerald-600" size={32} />
        </div>
        <h3 className="mt-4 text-xl font-extrabold text-[var(--color-primary)]">Got it — we’ll be in touch.</h3>
        <p className="mt-2 text-sm text-[var(--color-muted)]">A real person from our team will reply with your quote within the hour during business hours (7am–7pm, 7 days a week).</p>
        <a href={SITE.phoneLink} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-accent)]">
          <Phone size={14}/> Or call us now at {SITE.phoneDisplay}
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
          <label className={labelCls} htmlFor="firstName">First Name *</label>
          <input id="firstName" name="firstName" required className={inputCls} placeholder="Jane" autoComplete="given-name" />
        </div>
        <div>
          <label className={labelCls} htmlFor="lastName">Last Name *</label>
          <input id="lastName" name="lastName" required className={inputCls} placeholder="Doe" autoComplete="family-name" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className={labelCls} htmlFor="phone">Phone *</label>
          <input id="phone" name="phone" required type="tel" className={inputCls} placeholder="407-555-0100" autoComplete="tel" />
        </div>
        <div>
          <label className={labelCls} htmlFor="email">Email *</label>
          <input id="email" name="email" required type="email" className={inputCls} placeholder="you@example.com" autoComplete="email" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className={labelCls} htmlFor="moveDate">Move Date *</label>
          <input id="moveDate" name="moveDate" required type="date" className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="moveSize">Move Size</label>
          <select id="moveSize" name="moveSize" className={inputCls} defaultValue="">
            <option value="">Select size...</option>
            <option value="studio">Studio / 1 bedroom</option>
            <option value="2br_apt">2 bedroom apt</option>
            <option value="2br_home">2 bedroom home</option>
            <option value="3br_home">3 bedroom home</option>
            <option value="4br_home">4+ bedroom home</option>
            <option value="office">Office / Commercial</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className={labelCls} htmlFor="origin">Origin Address / ZIP *</label>
          <input id="origin" name="origin" required className={inputCls} placeholder="32789" autoComplete="address-level2" />
        </div>
        <div>
          <label className={labelCls} htmlFor="destination">Destination Address / ZIP *</label>
          <input id="destination" name="destination" required className={inputCls} placeholder="32801" />
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="details">Details about your move</label>
        <textarea id="details" name="details" rows={compact ? 2 : 3} className={inputCls + ' resize-none'} placeholder="Anything we should know? Specialty items, stairs, elevators, timeline..." />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] disabled:opacity-60 text-white font-extrabold py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 text-base"
      >
        {status === 'submitting' ? <><Loader2 size={18} className="animate-spin"/> Sending...</> : <>Request a Free Estimate</>}
      </button>

      {status === 'error' && (
        <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
          <AlertCircle size={16} className="shrink-0 mt-0.5"/>
          <div>
            {errorMsg || 'Submission failed.'} You can always reach us at <a href={SITE.phoneLink} className="underline font-bold">{SITE.phoneDisplay}</a>.
          </div>
        </div>
      )}

      <p className="text-[10px] text-[var(--color-muted)] text-center">By submitting, you agree to be contacted by Liberty Moves Orlando. We never share your info.</p>
    </form>
  );
}
