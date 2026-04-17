'use client';
import Script from 'next/script';
import { SITE } from '@/lib/site';

export default function ChatWidget() {
  return (
    <Script
      src={SITE.ghl.chatWidgetSrc}
      strategy="lazyOnload"
      data-resources-url={SITE.ghl.chatResourcesUrl}
      data-widget-id={SITE.ghl.chatWidgetId}
    />
  );
}
