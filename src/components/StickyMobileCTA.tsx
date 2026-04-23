'use client';
import Link from 'next/link';
import { Phone, MessageSquareText } from 'lucide-react';
import { SITE } from '@/lib/site';
import { useEffect, useState } from 'react';

export default function StickyMobileCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`md:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${show ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="bg-white/95 backdrop-blur border-t border-[var(--color-border)] shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="grid grid-cols-2 gap-2 p-2">
          <a href={SITE.phoneLink} className="flex items-center justify-center gap-2 py-3 rounded-lg bg-[var(--color-primary)] text-white font-bold text-sm">
            <Phone size={16} /> Call Now
          </a>
          <Link href="/contact-us" className="flex items-center justify-center gap-2 py-3 rounded-lg bg-[var(--color-accent)] text-white font-bold text-sm">
            <MessageSquareText size={16} /> Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
