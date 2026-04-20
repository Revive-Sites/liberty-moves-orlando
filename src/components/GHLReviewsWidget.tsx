'use client';
import { useEffect, useRef } from 'react';
import { SITE } from '@/lib/site';

const REPUTATION_HUB_SCRIPT = 'https://reputationhub.site/reputation/assets/review-widget.js';

export default function GHLReviewsWidget({ minRating = 3 }: { minRating?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existing = document.querySelector(`script[src="${REPUTATION_HUB_SCRIPT}"]`);
    if (!existing) {
      const s = document.createElement('script');
      s.src = REPUTATION_HUB_SCRIPT;
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  const src = `https://reputationhub.site/reputation/widgets/review_widget/${SITE.ghl.locationId}`;

  return (
    <div ref={containerRef} className="w-full" data-min-rating={minRating}>
      <iframe
        className="lc_reviews_widget"
        src={src}
        frameBorder={0}
        scrolling="no"
        style={{ minWidth: '100%', width: '100%', minHeight: 520 }}
        title="Liberty Moves Orlando Google reviews"
      />
    </div>
  );
}
