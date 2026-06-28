import Link from 'next/link';
import { CheckCircle2, Phone, Clock, ClipboardList, Truck, Star, ArrowRight } from 'lucide-react';
import { SITE } from '@/lib/site';

export const metadata = {
  title: { absolute: 'Thank You | Liberty Moves Orlando' },
  description:
    'Thanks for reaching out to Liberty Moves Orlando. Your request is in — our team will be in touch shortly with your free, no-pressure moving quote.',
  alternates: { canonical: `${SITE.url}/thank-you` },
  robots: { index: false, follow: true },
};

const STEPS = [
  {
    icon: ClipboardList,
    title: 'We review your details',
    body: 'A move coordinator reads through what you sent and pulls together everything needed for an accurate, upfront quote.',
  },
  {
    icon: Phone,
    title: 'We reach out — usually same day',
    body: 'Expect a friendly call or text to confirm the details, answer questions, and lock in your free estimate. No pressure, ever.',
  },
  {
    icon: Truck,
    title: 'We plan your move',
    body: 'Once you’re ready, we schedule your date, assign a uniformed crew, and handle the rest — start to finish.',
  },
];

export default function ThankYou() {
  return (
    <>
      {/* Confirmation hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.18),transparent_60%)]" />
        <div className="container-site py-16 md:py-24 relative text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/40">
            <CheckCircle2 className="text-emerald-400" size={48} strokeWidth={2.2} />
          </div>
          <div className="mt-6 text-[var(--color-accent)] text-xs font-semibold uppercase tracking-[0.2em]">
            Request received
          </div>
          <h1 className="mt-3 text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05]">
            Thank you — you’re all set!
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/85 text-lg leading-relaxed">
            We’ve got your request and a Liberty Moves Orlando coordinator is already on it. Sit
            tight — we’ll be in touch shortly with your free, no-pressure moving quote.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={SITE.phoneLink} className="btn btn-primary">
              <Phone size={18} /> Call us now — {SITE.phoneDisplay}
            </a>
            <Link href="/" className="btn btn-secondary">
              Back to Home
            </Link>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/70">
            <Clock size={16} className="text-emerald-400" />
            Typical response time: same business day
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="section-pad bg-[var(--color-bg)]">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-[var(--color-accent)] text-xs font-semibold uppercase tracking-[0.2em]">
              What happens next
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">Here’s how the next 24 hours look</h2>
            <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
              No phone tag, no surprise fees. Just a clear, simple process from your first message to
              moving day.
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

      {/* While you wait */}
      <section className="bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="container-site py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold">While you wait…</h2>
              <p className="mt-4 text-[var(--color-text)] leading-relaxed">
                Get a head start on a smooth move. Our Orlando moving guides cover pricing, packing,
                timing, and everything in between — written by the crews who do this every day.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/blog" className="btn btn-primary">
                  Read our moving guides <ArrowRight size={18} />
                </Link>
                <Link href="/orlando-moving-cost" className="btn btn-outline">
                  See pricing
                </Link>
              </div>
            </div>

            <div className="card bg-white">
              <div className="flex items-center gap-1 text-[var(--color-accent)]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 text-lg font-semibold text-[var(--color-primary)]">
                Rated {SITE.rating.toFixed(1)} stars by {SITE.reviewCount}+ Central Florida families.
              </p>
              <p className="mt-2 text-[var(--color-muted)] leading-relaxed">
                Licensed &amp; insured — USDOT {SITE.usdot}, FLDACS {SITE.fldacs}. Upfront pricing,
                careful crews, and on-time service every time.
              </p>
              <a
                href={SITE.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-bold text-[var(--color-accent)] hover:text-[var(--color-accent-dark)]"
              >
                Read our Google reviews <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Closing reassurance */}
      <section className="bg-[var(--color-primary)] text-white">
        <div className="container-site py-12 md:py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            Need to talk to someone right away?
          </h2>
          <p className="mt-3 text-white/85">
            Our team is here to help — give us a call and we’ll get your move moving.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={SITE.phoneLink} className="btn btn-primary">
              <Phone size={18} /> {SITE.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} className="btn btn-secondary">
              Email us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
