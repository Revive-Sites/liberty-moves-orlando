'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MessageSquareText, X, Phone, ArrowRight } from 'lucide-react';
import { SITE } from '@/lib/site';

export default function FloatingQuoteWidget() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const pulseTimer = setTimeout(() => setPulse(false), 6000);
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(pulseTimer);
    };
  }, []);

  return (
    <div className={`hidden md:block fixed bottom-6 right-6 z-50 transition-all duration-300 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
      {!open ? (
        <button
          onClick={() => { setOpen(true); setPulse(false); }}
          className={`flex items-center gap-3 bg-[var(--color-accent)] text-[var(--color-text)] font-bold pl-4 pr-5 py-3 rounded-full shadow-2xl hover:shadow-[0_20px_40px_rgba(245,158,11,0.5)] hover:scale-105 transition-all ${pulse ? 'animate-pulse-soft' : ''}`}
          aria-label="Open quote widget"
        >
          <div className="relative">
            <MessageSquareText size={20} />
            {pulse && <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full" />}
          </div>
          <span>Get Quote in 30 sec</span>
        </button>
      ) : (
        <div className="w-80 bg-white rounded-2xl shadow-2xl border border-[var(--color-border)] overflow-hidden">
          <div className="bg-[var(--color-primary)] text-white p-4 flex items-center justify-between">
            <div>
              <div className="font-bold">Free, no-pressure quote</div>
              <div className="text-xs text-white/70">Real person, not a bot</div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="close" className="p-1 hover:bg-white/10 rounded">
              <X size={18} />
            </button>
          </div>
          <div className="p-4 space-y-3">
            <Link href="/contact-us" className="flex items-center justify-between bg-[var(--color-accent)] text-[var(--color-text)] font-bold px-4 py-3 rounded-lg hover:translate-x-0.5 transition-transform">
              Fill out a quick form <ArrowRight size={16}/>
            </Link>
            <a href={SITE.phoneLink} className="flex items-center justify-between bg-[var(--color-primary)] text-white font-bold px-4 py-3 rounded-lg hover:translate-x-0.5 transition-transform">
              <span className="flex items-center gap-2"><Phone size={16}/> Call {SITE.phoneDisplay}</span>
              <ArrowRight size={16}/>
            </a>
            <div className="text-xs text-center text-[var(--color-muted)] pt-2">
              <div className="flex justify-center gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => <span key={i} className="text-[var(--color-accent)]">★</span>)}
              </div>
              5.0 rating · Licensed USDOT {SITE.usdot}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
