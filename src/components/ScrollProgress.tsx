'use client';
import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div aria-hidden className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none">
      <div
        className="h-full bg-[var(--color-accent)] transition-[width] duration-150"
        style={{ width: `${p}%`, boxShadow: '0 0 10px rgba(220,38,38,0.6)' }}
      />
    </div>
  );
}
