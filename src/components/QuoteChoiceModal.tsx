'use client';
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { Phone, MessageSquareText, ClipboardCheck, X, Star } from 'lucide-react';

/**
 * QuoteChoiceModal — the "how do you want to get your quote?" contact chooser.
 * A polished take on the classic service-business pop-up: three big choices
 * (Call · Text · Free estimate) with icon badges. Shows once per session on a
 * short delay (and desktop exit-intent), sharing the `revive-popup-shown` flag
 * with any existing exit pop-up so a visitor never sees two modals stacked.
 */

const CFG = {
  headingTop: 'Ready to move?',
  headingAccent: 'Get your free quote',
  subtext: 'Pick whatever’s easiest — a real person answers, and estimates are always free.',
  phoneDisplay: '(407) 641-2887',
  phoneTel: 'tel:+14076412887',
  thirdLabel: 'Free estimate',
  thirdSub: 'Takes 60 seconds',
  thirdHref: '/contact-us',
  trust: 'Licensed & insured · trusted by Orlando families',
  accent: '#DC2626',
  ink: '#1E3A5F',
};

const MUTED = '#64748b';
const BORDER = '#e5e7eb';
const SHARED_KEY = 'revive-popup-shown';

function seen(): boolean {
  try { return sessionStorage.getItem(SHARED_KEY) === '1'; }
  catch (e) { console.warn('sessionStorage read blocked:', e); return false; }
}
function markSeen(): void {
  try { sessionStorage.setItem(SHARED_KEY, '1'); }
  catch (e) { console.warn('sessionStorage write blocked:', e); }
}
function track(action: string): void {
  try {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: 'quote_modal_click', action });
  } catch (e) { /* no-op */ }
}

export default function QuoteChoiceModal() {
  const [show, setShow] = useState(false);

  const open = useCallback(() => {
    if (seen()) return;
    setShow(true);
    markSeen();
  }, []);
  const close = useCallback(() => setShow(false), []);

  useEffect(() => {
    if (typeof window === 'undefined' || seen()) return;
    const DELAY = window.matchMedia('(max-width: 768px)').matches ? 9000 : 6000;
    const timer = setTimeout(open, DELAY);
    const onMouseOut = (e: MouseEvent) => { if (e.clientY <= 0) open(); };
    const desktop = window.matchMedia('(min-width: 769px)').matches;
    if (desktop) document.addEventListener('mouseout', onMouseOut);
    return () => { clearTimeout(timer); document.removeEventListener('mouseout', onMouseOut); };
  }, [open]);

  useEffect(() => {
    if (!show) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = prev; document.removeEventListener('keydown', onKey); };
  }, [show, close]);

  if (!show) return null;

  const smsHref = `sms:${CFG.phoneTel.replace('tel:', '')}`;
  const choices = [
    { icon: Phone, label: 'Call us', sub: CFG.phoneDisplay, href: CFG.phoneTel, action: 'call', internal: false },
    { icon: MessageSquareText, label: 'Text us', sub: CFG.phoneDisplay, href: smsHref, action: 'text', internal: false },
    { icon: ClipboardCheck, label: CFG.thirdLabel, sub: CFG.thirdSub, href: CFG.thirdHref, action: 'estimate', internal: CFG.thirdHref.startsWith('/') },
  ];

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      style={{ animation: 'rqcmFade .3s ease-out' }}
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label={`${CFG.headingTop} ${CFG.headingAccent}`}
    >
      <style>{`@keyframes rqcmFade{from{opacity:0}to{opacity:1}}@keyframes rqcmPop{from{opacity:0;transform:translateY(12px) scale(.98)}to{opacity:1;transform:none}}@media (prefers-reduced-motion: reduce){.rqcm-box{animation:none!important}}`}</style>
      <div
        className="rqcm-box relative w-full max-w-xl rounded-[26px] p-[2px] shadow-2xl"
        style={{ background: `linear-gradient(135deg, ${CFG.accent}, ${CFG.ink})`, animation: 'rqcmPop .34s ease-out' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-[24px] bg-white px-6 sm:px-9 pt-9 pb-7 overflow-hidden">
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full blur-3xl" style={{ background: CFG.accent, opacity: 0.12 }} aria-hidden="true" />

          <button onClick={close} aria-label="Close" className="absolute top-3.5 right-3.5 z-10 grid place-items-center h-9 w-9 rounded-full transition hover:bg-slate-100" style={{ color: MUTED }}>
            <X size={18} />
          </button>

          <div className="relative text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em]" style={{ background: `${CFG.accent}1f`, color: CFG.accent }}>
              <Star size={11} className="fill-current" /> Free · No obligation
            </span>
            <h2 className="mt-4 text-3xl sm:text-[2.6rem] font-extrabold uppercase leading-[1.05] tracking-tight" style={{ color: CFG.ink, fontFamily: "var(--font-display, 'Oswald', system-ui, sans-serif)" }}>
              {CFG.headingTop}
              <br />
              <span style={{ color: CFG.accent }}>{CFG.headingAccent}</span>
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm sm:text-[0.95rem]" style={{ color: MUTED }}>{CFG.subtext}</p>
          </div>

          <div className="relative mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {choices.map(({ icon: Icon, label, sub, href, action, internal }) => {
              const inner = (
                <>
                  <span className="grid place-items-center h-14 w-14 rounded-full transition-all duration-200 group-hover:scale-110" style={{ background: `${CFG.accent}1f`, color: CFG.accent }}>
                    <Icon size={24} />
                  </span>
                  <span className="mt-3 font-bold leading-tight" style={{ color: CFG.ink }}>{label}</span>
                  <span className="mt-0.5 text-xs" style={{ color: MUTED }}>{sub}</span>
                </>
              );
              const cls = 'group flex flex-col items-center rounded-2xl bg-white px-3 py-5 text-center transition-all duration-200 hover:-translate-y-1';
              const st = { border: `1px solid ${BORDER}` } as React.CSSProperties;
              return internal ? (
                <Link key={action} href={href} onClick={() => { track(action); close(); }} className={cls} style={st}>{inner}</Link>
              ) : (
                <a key={action} href={href} onClick={() => track(action)} className={cls} style={st}>{inner}</a>
              );
            })}
          </div>

          <p className="relative mt-6 text-center text-xs" style={{ color: MUTED }}>{CFG.trust}</p>
        </div>
      </div>
    </div>
  );
}
