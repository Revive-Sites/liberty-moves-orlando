'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Home, Building2, Truck, Sparkles, CheckCircle2, Phone } from 'lucide-react';
import { SITE } from '@/lib/site';

type Size = 'studio' | '1br' | '2br' | '3br' | '4br+' | 'office';
type MoveType = 'local' | 'long-distance' | 'packing';

export default function QuoteWizard() {
  const [step, setStep] = useState(1);
  const [size, setSize] = useState<Size | null>(null);
  const [moveType, setMoveType] = useState<MoveType | null>(null);
  const [zip, setZip] = useState('');

  const priceMap: Record<Size, string> = {
    studio: '$400–$700',
    '1br': '$500–$900',
    '2br': '$650–$1,400',
    '3br': '$1,200–$1,800',
    '4br+': '$1,800–$2,400',
    office: 'Custom quote',
  };

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <section className="section-pad bg-gradient-to-br from-[#0f2344] via-[#1e3a5f] to-[#2a4a76] text-white">
      <div className="container-site max-w-3xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/40 text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-accent)]">
            <Sparkles size={12}/> 30-second quote
          </div>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white">See your Orlando move price.</h2>
          <p className="mt-3 text-white/70 max-w-xl mx-auto">No email required to see pricing. Real numbers, real fast.</p>
        </div>

        {/* Progress */}
        <div className="mt-10 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-white/60">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold transition ${step >= n ? 'bg-[var(--color-accent)] text-[var(--color-text)]' : 'bg-white/10 text-white/40'}`}>
                {step > n ? <CheckCircle2 size={14}/> : n}
              </div>
              {n < 4 && <div className={`w-12 h-0.5 transition ${step > n ? 'bg-[var(--color-accent)]' : 'bg-white/10'}`}/>}
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white/5 backdrop-blur rounded-2xl border border-white/10 p-6 md:p-10 min-h-[320px]">
          {/* Step 1 — home size */}
          {step === 1 && (
            <>
              <h3 className="text-xl md:text-2xl font-bold text-white">What size is your place?</h3>
              <p className="mt-1 text-white/60 text-sm">Tap one to see pricing.</p>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
                {([
                  { v: 'studio', l: 'Studio', i: Home },
                  { v: '1br', l: '1 Bedroom', i: Home },
                  { v: '2br', l: '2 Bedroom', i: Home },
                  { v: '3br', l: '3 Bedroom', i: Home },
                  { v: '4br+', l: '4+ Bedroom', i: Home },
                  { v: 'office', l: 'Office / Commercial', i: Building2 },
                ] as { v: Size; l: string; i: any }[]).map(({ v, l, i: Icon }) => (
                  <button
                    key={v}
                    onClick={() => { setSize(v); next(); }}
                    className={`p-4 rounded-xl border-2 transition text-left hover:border-[var(--color-accent)] hover:bg-white/5 ${size === v ? 'border-[var(--color-accent)] bg-white/10' : 'border-white/10'}`}
                  >
                    <Icon className="text-[var(--color-accent)]" size={20}/>
                    <div className="mt-2 font-bold text-white text-sm">{l}</div>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Step 2 — move type */}
          {step === 2 && (
            <>
              <h3 className="text-xl md:text-2xl font-bold text-white">What kind of move?</h3>
              <div className="mt-6 grid gap-3">
                {([
                  { v: 'local', l: 'Local Move (within Central Florida)', d: 'Same-day, hourly pricing', i: Home },
                  { v: 'long-distance', l: 'Long Distance', d: 'Florida to another state', i: Truck },
                  { v: 'packing', l: 'Just Packing (no move)', d: 'Full or partial packing service', i: Building2 },
                ] as { v: MoveType; l: string; d: string; i: any }[]).map(({ v, l, d, i: Icon }) => (
                  <button
                    key={v}
                    onClick={() => { setMoveType(v); next(); }}
                    className={`flex items-start gap-4 p-4 rounded-xl border-2 transition text-left hover:border-[var(--color-accent)] hover:bg-white/5 ${moveType === v ? 'border-[var(--color-accent)] bg-white/10' : 'border-white/10'}`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/20 flex items-center justify-center shrink-0">
                      <Icon className="text-[var(--color-accent)]" size={18}/>
                    </div>
                    <div>
                      <div className="font-bold text-white">{l}</div>
                      <div className="text-sm text-white/60">{d}</div>
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Step 3 — zip */}
          {step === 3 && (
            <>
              <h3 className="text-xl md:text-2xl font-bold text-white">What’s your Orlando-area zip code?</h3>
              <p className="mt-1 text-white/60 text-sm">We serve every zip in Central Florida.</p>
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value.replace(/\D/g, '').slice(0, 5))}
                placeholder="e.g. 32789"
                inputMode="numeric"
                className="mt-6 w-full px-4 py-4 rounded-xl bg-white/10 border-2 border-white/20 focus:border-[var(--color-accent)] focus:outline-none text-white text-2xl font-bold tracking-wider placeholder:text-white/30"
              />
              <button
                onClick={next}
                disabled={zip.length !== 5}
                className="mt-6 w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                See my price <ArrowRight size={16}/>
              </button>
            </>
          )}

          {/* Step 4 — result */}
          {step === 4 && size && (
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/20 text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-accent)]">
                <CheckCircle2 size={12}/> Estimated price
              </div>
              <div className="mt-6 text-5xl md:text-7xl font-extrabold text-[var(--color-accent)]">
                {priceMap[size]}
              </div>
              <div className="mt-2 text-white/70">
                For a {size === 'office' ? 'commercial/office' : size.replace('br', '-bedroom')} {moveType || 'local'} move in zip {zip || 'Orlando'}
              </div>
              <p className="mt-6 text-sm text-white/60 max-w-md mx-auto">
                This is a ballpark range. Get a firm written quote below — no pressure, no spam, just an honest price from a licensed local mover.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact-us" className="btn btn-primary">
                  Get my exact quote <ArrowRight size={16}/>
                </Link>
                <a href={SITE.phoneLink} className="btn btn-secondary">
                  <Phone size={16}/> Or call {SITE.phoneDisplay}
                </a>
              </div>
              <div className="mt-8 text-xs text-white/50">
                Licensed & insured · USDOT {SITE.usdot} · 5.0 ★ on Google
              </div>
            </div>
          )}

          {step > 1 && step < 4 && (
            <button onClick={back} className="mt-6 text-sm text-white/60 hover:text-white flex items-center gap-1">
              <ArrowLeft size={14}/> Back
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
