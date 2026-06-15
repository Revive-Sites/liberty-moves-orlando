import { Phone, CheckCircle2 } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import { SITE } from '@/lib/site';

/**
 * Prominent lead-capture section for paid-traffic landing pages (PMax/Search).
 * Renders the exact same QuoteForm as the homepage and /contact-us, so leads
 * flow through /api/quote -> liberty-moves-lead -> GHL and redirect to
 * /thank-you on success. Drop it directly under the page hero.
 */
export default function LeadCapture({
  title = 'Get your free moving quote',
  subtitle = 'Tell us a little about your move and we’ll text or call the same day with an honest, written estimate — no pressure.',
  points = [
    'Upfront, written pricing — no surprise fees',
    'Same-day response, 7 days a week',
    'Licensed & insured — USDOT 3455436',
  ],
}: { title?: string; subtitle?: string; points?: string[] }) {
  return (
    <section className="section-pad bg-[var(--color-surface)] border-b border-[var(--color-border)]">
      <div className="container-site grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
        <div>
          <div className="text-[var(--color-accent)] text-xs font-semibold uppercase tracking-[0.2em]">Free Quote</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">{title}</h2>
          <p className="mt-3 text-[var(--color-muted)] leading-relaxed max-w-md">{subtitle}</p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={20} />
                <span className="font-semibold text-[var(--color-primary)]">{p}</span>
              </li>
            ))}
          </ul>
          <a
            href={SITE.phoneLink}
            className="mt-7 inline-flex items-center gap-3 text-lg font-extrabold text-[var(--color-primary)] hover:text-[var(--color-accent)]"
          >
            <span className="w-10 h-10 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center">
              <Phone size={18} />
            </span>
            {SITE.phoneDisplay}
          </a>
        </div>

        <div className="bg-white rounded-2xl border border-[var(--color-border)] shadow-lg overflow-hidden">
          <div className="bg-[var(--color-accent)] text-white px-6 py-3">
            <div className="text-sm font-extrabold uppercase tracking-wide">Request a Free Quote</div>
            <div className="text-xs opacity-90">Answered within the hour · Licensed USDOT {SITE.usdot} · FLDACS {SITE.fldacs}</div>
          </div>
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
