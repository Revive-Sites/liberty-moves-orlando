'use client';
import { useEffect, useState } from 'react';
import { Cookie, X } from 'lucide-react';

const STORAGE_KEY = 'lmo-cookie-consent-v1';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        // Small delay so it doesn't fight the initial paint
        const t = setTimeout(() => setShow(true), 800);
        return () => clearTimeout(t);
      }
    } catch {
      // If localStorage is unavailable, show the banner anyway
      const t = setTimeout(() => setShow(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const persist = (value: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore write failure */
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 z-50 w-[calc(100vw-2rem)] max-w-sm"
      style={{ animation: 'fade-up 0.4s ease-out' }}
    >
      <div className="bg-white rounded-xl shadow-2xl border border-[var(--color-border)] p-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
            <Cookie className="text-[var(--color-accent)]" size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-bold text-[var(--color-primary)]">We value your privacy</div>
            <p className="text-xs text-[var(--color-muted)] mt-1 leading-relaxed">
              We use cookies to improve your experience, analyze site traffic, and support our marketing. See our{' '}
              <a href="/privacy-policy" className="text-[var(--color-accent)] font-semibold underline underline-offset-2">
                Privacy Policy
              </a>
              .
            </p>
          </div>
          <button
            onClick={() => persist('declined')}
            aria-label="Dismiss cookie banner"
            className="p-1 -m-1 rounded hover:bg-[var(--color-surface)] text-[var(--color-muted)] shrink-0"
          >
            <X size={16} />
          </button>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <button
            onClick={() => persist('accepted')}
            className="flex-1 text-sm font-bold text-white bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] rounded-lg px-4 py-2 transition-colors"
          >
            Accept
          </button>
          <button
            onClick={() => persist('declined')}
            className="text-sm font-semibold text-[var(--color-primary)] border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white rounded-lg px-4 py-2 transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
