'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { X, Phone, Gift } from 'lucide-react';
import { SITE } from '@/lib/site';

const STORAGE_KEY = 'lmo-exit-seen';

function safeGet(key: string): string | null {
  try { return sessionStorage.getItem(key); }
  catch (e) { console.warn('sessionStorage read blocked:', e); return null; }
}
function safeSet(key: string, val: string): void {
  try { sessionStorage.setItem(key, val); }
  catch (e) { console.warn('sessionStorage write blocked:', e); }
}

export default function ExitIntent() {
  const [show, setShow] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (safeGet(STORAGE_KEY) === '1') return;

    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !closed) {
        setShow(true);
        safeSet(STORAGE_KEY, '1');
      }
    };

    let mobileTimer: any;
    if (window.matchMedia('(max-width: 768px)').matches) {
      mobileTimer = setTimeout(() => {
        if (!closed) {
          setShow(true);
          safeSet(STORAGE_KEY, '1');
        }
      }, 35000);
    } else {
      document.addEventListener('mouseout', onMouseOut);
    }

    return () => {
      document.removeEventListener('mouseout', onMouseOut);
      if (mobileTimer) clearTimeout(mobileTimer);
    };
  }, [closed]);

  if (!show) return null;

  const close = () => { setShow(false); setClosed(true); };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-[fade-up_0.3s_ease-out]">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
        <button onClick={close} aria-label="close" className="absolute top-3 right-3 p-2 rounded-full hover:bg-[var(--color-surface)] text-[var(--color-muted)] z-10">
          <X size={20}/>
        </button>
        <div className="bg-gradient-to-br from-[#1e3a5f] to-[#0f2344] text-white p-6 pb-8 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[var(--color-accent)]/30 blur-3xl"/>
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/40 text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-accent)]">
              <Gift size={12}/> Before you go...
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight text-white">Lock in <span className="text-[var(--color-accent)]">$100 off</span> your Orlando move.</h2>
            <p className="mt-3 text-white/80 text-sm">Get your free quote in the next 24 hours and we’ll apply a $100 first-time customer discount. No coupon code. No catch.</p>
          </div>
        </div>
        <div className="p-6 space-y-3">
          <Link href="/contact-us" onClick={close} className="block w-full bg-[var(--color-accent)] hover:bg-[#d97706] text-[var(--color-text)] hover:text-white font-bold py-4 rounded-lg text-center transition">
            Claim $100 Off — Get My Quote →
          </Link>
          <a href={SITE.phoneLink} onClick={close} className="flex items-center justify-center gap-2 w-full border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white text-[var(--color-primary)] font-bold py-4 rounded-lg text-center transition">
            <Phone size={16}/> Or call {SITE.phoneDisplay}
          </a>
          <div className="text-xs text-[var(--color-muted)] text-center pt-2">
            Licensed · Insured · USDOT {SITE.usdot} · 5.0 ★ from Orlando families
          </div>
        </div>
      </div>
    </div>
  );
}
