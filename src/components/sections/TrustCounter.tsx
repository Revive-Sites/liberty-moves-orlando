'use client';
import { useEffect, useRef, useState } from 'react';
import { Star, Truck, Shield, Users } from 'lucide-react';

function AnimatedNumber({ value, suffix = '', decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
  const [n, setN] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const hydrated = useRef(false);

  useEffect(() => {
    if (hydrated.current) return;
    hydrated.current = true;
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          setN(0);
          const duration = 1500;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setN(value * eased);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.3 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return <span ref={ref}>{n.toFixed(decimals)}{suffix}</span>;
}

export default function TrustCounter() {
  const stats = [
    { icon: Truck, value: 500, suffix: '+', label: 'Orlando moves completed', color: 'from-[#1e3a5f] to-[#0f2344]' },
    { icon: Star, value: 5.0, suffix: '★', decimals: 1, label: 'Average Google rating', color: 'from-[#dc2626] to-[#b91c1c]' },
    { icon: Users, value: 300, suffix: '+', label: 'Verified Google reviews', color: 'from-[#1e3a5f] to-[#0f2344]' },
    { icon: Shield, value: 100, suffix: '%', label: 'Licensed & insured', color: 'from-[#dc2626] to-[#b91c1c]' },
  ];
  return (
    <section className="bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <div className="container-site py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="group relative overflow-hidden bg-white border border-[var(--color-border)] rounded-2xl p-5 md:p-6 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              <div className={`absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br ${s.color} opacity-10 group-hover:opacity-20 transition-opacity`}/>
              <div className={`relative w-11 h-11 rounded-xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center shadow-md`}>
                <s.icon size={20}/>
              </div>
              <div className="mt-4 text-3xl md:text-5xl font-extrabold text-[var(--color-primary)] tabular-nums leading-none">
                <AnimatedNumber value={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
              </div>
              <div className="mt-2 text-xs md:text-sm text-[var(--color-muted)] font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
