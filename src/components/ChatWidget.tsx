'use client';
import { useEffect, useState } from 'react';
import Script from 'next/script';
import { SITE } from '@/lib/site';

// Load chat widget only after user interaction or 8s — prevents networkidle hang
export default function ChatWidget() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const timer = setTimeout(() => setShouldLoad(true), 8000);
    const onInteract = () => setShouldLoad(true);
    ['scroll', 'click', 'keydown', 'touchstart', 'mousemove'].forEach((e) =>
      window.addEventListener(e, onInteract, { once: true, passive: true })
    );
    return () => clearTimeout(timer);
  }, []);

  if (!shouldLoad) return null;

  return (
    <Script
      src={SITE.ghl.chatWidgetSrc}
      strategy="lazyOnload"
      data-resources-url={SITE.ghl.chatResourcesUrl}
      data-widget-id={SITE.ghl.chatWidgetId}
    />
  );
}
