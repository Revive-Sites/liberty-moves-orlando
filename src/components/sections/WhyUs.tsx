import { CheckCircle2 } from 'lucide-react';

const POINTS = [
  { t: 'Upfront, Transparent Pricing', d: 'No hidden fees. No surprises on moving day. Your quote is your price — stated in writing before we load a single box.' },
  { t: 'Licensed, Bonded & Insured', d: 'USDOT 3455436. Full cargo and liability coverage so you’re protected from driveway to delivery.' },
  { t: 'Careful, Experienced Crews', d: 'Trained, background-checked movers. Uniforms, pads, shrink wrap, dollies — everything they need to protect your stuff.' },
  { t: 'On-Time, Every Time', d: 'We show up when we say we will. 98% of our jobs finish same-day. We respect your schedule because we’d expect the same.' },
  { t: 'Local Knowledge', d: 'We’ve moved families across every Central Florida zip code. HOAs, elevators, narrow streets, gated communities — we’ve handled them all.' },
  { t: 'Family-Owned, Family-Run', d: 'Not a faceless corporation. You’ll talk to the same people from quote to unload. We’re neighbors first, movers second.' },
];

export default function WhyUs() {
  return (
    <section className="section-pad bg-[var(--color-surface)]">
      <div className="container-site">
        <div className="max-w-2xl">
          <div className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-[0.2em]">Why Liberty</div>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">The Orlando movers families keep calling back.</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POINTS.map((p) => (
            <div key={p.t} className="card">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={22} />
                <div>
                  <h3 className="text-lg font-bold mb-1 text-[var(--color-primary)]">{p.t}</h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">{p.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
