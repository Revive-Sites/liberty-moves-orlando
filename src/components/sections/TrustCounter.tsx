'use client';
import { useEffect, useRef, useState } from 'react';
import { Star, Truck, Shield, Users } from 'lucide-react';

function AnimatedNumber({ value, suffix = '', decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
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
    { icon: Truck, value: 500, suffix: '+', label: 'Orlando moves completed' },
    { icon: Star, value: 5.0, suffix: '★', decimals: 1, label: 'Average Google rating' },
    { icon: Users, value: 47, suffix: '', label: 'Verified reviews' },
    { icon: Shield, value: 100, suffix: '%', label: 'Licensed & insured' },
  ];
  return (
    <section className="bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <div className="container-site py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <s.icon className="mx-auto text-[var(--color-accent)]" size={24}/>
              <div className="mt-3 text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] tabular-nums">
                <AnimatedNumber value={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
              </div>
              <div className="mt-1 text-xs md:text-sm text-[var(--color-muted)] font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
