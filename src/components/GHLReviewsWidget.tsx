'use client';
import { useEffect, useRef } from 'react';
import { SITE } from '@/lib/site';

/**
 * GHL Reviews Widget — embeds the GoHighLevel public reviews slider for our
 * location. minRating=3 filters out 1- and 2-star reviews per Austin's request.
 *
 * Austin: to customize the widget style in GHL — go to Reputation → Widgets,
 * pick a template, copy the widget ID it generates, and paste below as GHL_WIDGET_ID.
 * Until then we use the default location-scoped widget.
 */
const GHL_WIDGET_ID = ''; // optional — leave empty for default

export default function GHLReviewsWidget({ minRating = 3 }: { minRating?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    // Inject widget config + loader
    (window as any).LCReviewsConfig = {
      locationId: SITE.ghl.locationId,
      minRating,
      ...(GHL_WIDGET_ID ? { widgetId: GHL_WIDGET_ID } : {}),
    };
    const existing = document.querySelector('script[data-lc-reviews]');
    if (!existing) {
      const s = document.createElement('script');
      s.src = 'https://widgets.leadconnectorhq.com/loader.js';
      s.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/reputation-widgets/loader.js');
      s.setAttribute('data-lc-reviews', '1');
      s.async = true;
      document.body.appendChild(s);
    }
  }, [minRating]);

  return (
    <div
      ref={containerRef}
      className="lc-reviews-widget w-full"
      data-location-id={SITE.ghl.locationId}
      data-min-rating={minRating}
      data-widget-id={GHL_WIDGET_ID || undefined}
      data-layout="slider"
      data-layout-iframe-id={`lc-reviews-${SITE.ghl.locationId}`}
    />
  );
}
