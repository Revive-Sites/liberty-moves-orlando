'use client';
import { useState, useRef, useEffect } from 'react';
import { Box, Home, ArrowLeftRight } from 'lucide-react';

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = (x: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const p = ((x - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => { if (dragging.current) updateFromClientX(e.clientX); };
    const onTouch = (e: TouchEvent) => { if (dragging.current && e.touches[0]) updateFromClientX(e.touches[0].clientX); };
    const onUp = () => { dragging.current = false; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onTouch, { passive: true });
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onTouch);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);
    };
  }, []);

  return (
    <section className="section-pad bg-[var(--color-surface)]">
      <div className="container-site max-w-5xl">
        <div className="max-w-2xl">
          <div className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-[0.2em]">Chaos → Calm</div>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">What move day looks like with Liberty Moves.</h2>
          <p className="mt-4 text-[var(--color-muted)] text-lg">Drag the slider. Before: boxes, stress, question marks. After: sofa placed, beds made, you pouring a drink.</p>
        </div>

        <div
          ref={containerRef}
          onMouseDown={(e) => { dragging.current = true; updateFromClientX(e.clientX); }}
          onTouchStart={(e) => { dragging.current = true; if (e.touches[0]) updateFromClientX(e.touches[0].clientX); }}
          className="relative mt-10 aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl border-2 border-white"
        >
          {/* Before (background) */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#4a3a30] via-[#3a2a20] to-[#2a1a15] flex items-center justify-center">
            <div className="text-center text-white/90 p-8">
              <div className="grid grid-cols-4 gap-2 max-w-md mx-auto mb-6 opacity-60">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="aspect-square rounded bg-amber-900/80 border-2 border-amber-800 flex items-center justify-center">
                    <Box size={16} className="text-amber-200/60"/>
                  </div>
                ))}
              </div>
              <div className="text-amber-200/80 text-xs uppercase tracking-[0.3em] font-bold">Before</div>
              <div className="mt-2 text-2xl md:text-3xl font-extrabold text-white">Chaos in boxes</div>
              <div className="mt-2 text-sm text-white/60">Stairs, packing tape, missing screws, late truck</div>
            </div>
          </div>

          {/* After (clipped layer) */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] via-[#2a4a76] to-[#0f2344] flex items-center justify-center"
            style={{ clipPath: `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)` }}
          >
            <div className="text-center text-white p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-24 h-24 rounded-2xl bg-[var(--color-accent)]/20 border-2 border-[var(--color-accent)] flex items-center justify-center">
                  <Home size={48} className="text-[var(--color-accent)]"/>
                </div>
              </div>
              <div className="text-[var(--color-accent)] text-xs uppercase tracking-[0.3em] font-bold">After Liberty</div>
              <div className="mt-2 text-2xl md:text-3xl font-extrabold text-white">Home, not a mess</div>
              <div className="mt-2 text-sm text-white/70">Couch placed, bed made, boxes organized by room</div>
            </div>
          </div>

          {/* Slider handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white pointer-events-none"
            style={{ left: `${pos}%` }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 pointer-events-none w-12 h-12 rounded-full bg-white shadow-2xl flex items-center justify-center -translate-x-1/2 border-4 border-[var(--color-accent)]"
            style={{ left: `${pos}%` }}
          >
            <ArrowLeftRight size={18} className="text-[var(--color-primary)]"/>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 text-[10px] md:text-xs font-bold uppercase tracking-widest bg-black/40 backdrop-blur text-white px-2 py-1 rounded">Before</div>
          <div className="absolute top-4 right-4 text-[10px] md:text-xs font-bold uppercase tracking-widest bg-[var(--color-accent)]/80 backdrop-blur text-[var(--color-text)] px-2 py-1 rounded">After</div>
        </div>

        <div className="mt-6 text-center text-sm text-[var(--color-muted)]">← Drag the slider to see the difference →</div>
      </div>
    </section>
  );
}
