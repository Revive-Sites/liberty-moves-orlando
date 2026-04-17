'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Home, Building2, Truck, Package, Phone, ArrowRight, Calculator, CheckCircle2 } from 'lucide-react';
import { SITE } from '@/lib/site';

type HomeSize = 'studio' | '1br' | '2br_apt' | '2br_home' | '3br' | '4br' | '5br' | 'office';
type MoveType = 'local' | 'long-distance';
type PackingLevel = 'none' | 'partial' | 'full';

const SIZE_META: Record<HomeSize, { label: string; base: [number, number]; hours: string; crew: string; icon: any }> = {
  studio: { label: 'Studio apartment', base: [400, 700], hours: '3–4 hrs', crew: '2 movers', icon: Home },
  '1br': { label: '1-bedroom apartment', base: [500, 900], hours: '3–5 hrs', crew: '2 movers', icon: Home },
  '2br_apt': { label: '2-bedroom apartment', base: [650, 1100], hours: '4–6 hrs', crew: '2–3 movers', icon: Home },
  '2br_home': { label: '2-bedroom home', base: [900, 1400], hours: '5–7 hrs', crew: '3 movers', icon: Home },
  '3br': { label: '3-bedroom home', base: [1200, 1800], hours: '6–8 hrs', crew: '3 movers', icon: Home },
  '4br': { label: '4-bedroom home', base: [1800, 2400], hours: '8–10 hrs', crew: '3–4 movers', icon: Home },
  '5br': { label: '5+ bedroom estate', base: [2500, 5000], hours: '10+ hrs', crew: '4–5 movers', icon: Home },
  office: { label: 'Office / commercial', base: [1500, 4500], hours: 'varies', crew: 'varies', icon: Building2 },
};

export default function CostCalculator() {
  const [size, setSize] = useState<HomeSize>('2br_home');
  const [type, setType] = useState<MoveType>('local');
  const [stairs, setStairs] = useState(false);
  const [packing, setPacking] = useState<PackingLevel>('none');
  const [longHaul, setLongHaul] = useState(500); // miles for long-distance

  const quote = useMemo(() => {
    const [low, high] = SIZE_META[size].base;

    if (type === 'local') {
      let mul = 1.0;
      if (stairs) mul += 0.12;
      if (packing === 'partial') mul += 0.20;
      if (packing === 'full') mul += 0.45;
      return {
        low: Math.round((low * mul) / 10) * 10,
        high: Math.round((high * mul) / 10) * 10,
        unit: 'local',
      };
    }

    // Long-distance: base weight cost + per-mile
    const weightBase = { studio: 900, '1br': 1200, '2br_apt': 1700, '2br_home': 2200, '3br': 3000, '4br': 4200, '5br': 5800, office: 3500 }[size];
    const perMile = { studio: 1.1, '1br': 1.4, '2br_apt': 1.8, '2br_home': 2.3, '3br': 3.0, '4br': 3.8, '5br': 5.0, office: 3.5 }[size];
    let base = weightBase + longHaul * perMile;
    if (packing === 'partial') base *= 1.20;
    if (packing === 'full') base *= 1.45;
    return {
      low: Math.round((base * 0.85) / 50) * 50,
      high: Math.round((base * 1.2) / 50) * 50,
      unit: 'long-distance',
    };
  }, [size, type, stairs, packing, longHaul]);

  return (
    <section className="section-pad bg-gradient-to-br from-[#0a1729] via-[#1e3a5f] to-[#0f2344] text-white">
      <div className="container-site max-w-5xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/40 text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-accent)]">
            <Calculator size={12}/> Instant Cost Calculator
          </div>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white">What will your Orlando move cost?</h2>
          <p className="mt-3 text-white/70 max-w-xl mx-auto">Drag the options. Price updates live. No email, no sales call — just real pricing.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-8">
          {/* Controls */}
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-white/60 font-bold mb-3">Home Size</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {(Object.keys(SIZE_META) as HomeSize[]).map((k) => {
                  const Icon = SIZE_META[k].icon;
                  const active = size === k;
                  return (
                    <button
                      key={k}
                      type="button"
                      onClick={() => setSize(k)}
                      className={`p-2.5 rounded-lg border-2 text-left transition ${active ? 'border-[var(--color-accent)] bg-white/10' : 'border-white/10 hover:border-white/30 hover:bg-white/5'}`}
                    >
                      <Icon size={14} className={active ? 'text-[var(--color-accent)]' : 'text-white/70'} />
                      <div className="mt-1.5 text-[11px] font-semibold text-white leading-tight">{SIZE_META[k].label}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-white/60 font-bold mb-3">Move Type</div>
              <div className="grid grid-cols-2 gap-2">
                {([
                  { v: 'local', l: 'Local (under 50 mi)', i: Truck },
                  { v: 'long-distance', l: 'Long Distance', i: Truck },
                ] as { v: MoveType; l: string; i: any }[]).map(({ v, l, i: Icon }) => {
                  const active = type === v;
                  return (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setType(v)}
                      className={`p-3 rounded-lg border-2 text-left transition ${active ? 'border-[var(--color-accent)] bg-white/10' : 'border-white/10 hover:border-white/30 hover:bg-white/5'}`}
                    >
                      <Icon size={16} className={active ? 'text-[var(--color-accent)]' : 'text-white/70'} />
                      <div className="mt-1 text-sm font-semibold text-white">{l}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {type === 'long-distance' && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs uppercase tracking-widest text-white/60 font-bold">Distance</div>
                  <div className="text-sm font-extrabold text-[var(--color-accent)]">{longHaul} miles</div>
                </div>
                <input
                  type="range"
                  min={50}
                  max={3000}
                  step={50}
                  value={longHaul}
                  onChange={(e) => setLongHaul(Number(e.target.value))}
                  className="w-full accent-[var(--color-accent)]"
                />
                <div className="flex justify-between text-[10px] text-white/50 mt-1">
                  <span>50 mi</span>
                  <span>Atlanta (440)</span>
                  <span>NYC (1080)</span>
                  <span>LA (2500)</span>
                </div>
              </div>
            )}

            <div>
              <div className="text-xs uppercase tracking-widest text-white/60 font-bold mb-3">Packing Help</div>
              <div className="grid grid-cols-3 gap-2">
                {([
                  { v: 'none', l: 'None', d: 'Move only' },
                  { v: 'partial', l: 'Partial', d: 'Kitchen + fragiles' },
                  { v: 'full', l: 'Full', d: 'We pack everything' },
                ] as { v: PackingLevel; l: string; d: string }[]).map(({ v, l, d }) => {
                  const active = packing === v;
                  return (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setPacking(v)}
                      className={`p-3 rounded-lg border-2 text-left transition ${active ? 'border-[var(--color-accent)] bg-white/10' : 'border-white/10 hover:border-white/30 hover:bg-white/5'}`}
                    >
                      <Package size={16} className={active ? 'text-[var(--color-accent)]' : 'text-white/70'} />
                      <div className="mt-1 text-sm font-bold text-white">{l}</div>
                      <div className="text-[10px] text-white/60">{d}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={stairs}
                  onChange={(e) => setStairs(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-[var(--color-accent)]"
                />
                <div>
                  <div className="text-sm font-semibold text-white">Stairs or walk-up</div>
                  <div className="text-xs text-white/60">Origin or destination has 2+ flights of stairs without elevator.</div>
                </div>
              </label>
            </div>
          </div>

          {/* Output */}
          <div className="bg-[var(--color-accent)] text-white rounded-2xl p-6 md:p-8 flex flex-col">
            <div className="text-xs uppercase tracking-widest font-bold opacity-90">Estimated Price</div>
            <div className="mt-2 text-4xl md:text-5xl font-extrabold tabular-nums leading-tight">
              ${quote.low.toLocaleString()}
            </div>
            <div className="text-xl font-bold opacity-90">– ${quote.high.toLocaleString()}</div>
            <div className="mt-3 text-sm opacity-80">
              {quote.unit === 'local' ? 'Hourly, all-in for a local Orlando move.' : `Binding estimate for ${longHaul}-mile long-distance move.`}
            </div>

            <div className="mt-6 space-y-2 text-sm">
              {[
                'Truck, crew, pads, wrap, dollies',
                'Basic disassembly + reassembly',
                'Mileage within metro + fuel',
                'USDOT 3455436 · FLDACS IM3347',
              ].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="shrink-0" />
                  <span>{t}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-6 space-y-2">
              <Link href="/contact-us" className="flex items-center justify-center gap-1.5 bg-white text-[var(--color-accent)] font-extrabold py-3 rounded-lg hover:shadow-lg transition-all w-full">
                Get my exact quote <ArrowRight size={16}/>
              </Link>
              <a href={SITE.phoneLink} className="flex items-center justify-center gap-1.5 border-2 border-white text-white font-bold py-3 rounded-lg hover:bg-white hover:text-[var(--color-accent)] transition-all w-full">
                <Phone size={14}/> {SITE.phoneDisplay}
              </a>
              <p className="text-[10px] text-center opacity-70 mt-2">Range only. Final price is binding + in writing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
