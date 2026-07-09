'use client';
import { useEffect, useRef } from 'react';

type Lang = 'en' | 'es';

/**
 * GHL-native embed — Liberty Moves Orlando "Get a Free Estimate" form
 * (GHL sub-account 7pnMlJIyNsgtdaD576rT). Submits DIRECTLY to GoHighLevel —
 * no Supabase edge function, no /api/quote relay. form_embed.js auto-resizes.
 *
 * FOLLOW-UPS:
 *  - Spanish: this uses the single English GHL form on both en + /es pages.
 *    Build a Spanish GHL form and swap the id when lang==='es' to fully localize.
 *  - Tracking: GHL captures UTM/source natively; re-add the Google Ads / Meta
 *    "Lead" conversion on the GHL form (settings) so ad optimization is preserved.
 */
const GHL_FORM_ID = 'Bpjv5cxcFHuQ6c7IWNAf';

export default function QuoteForm({ compact = false }: { compact?: boolean; lang?: Lang }) {
  const loaded = useRef(false);
  useEffect(() => {
    if (loaded.current || document.querySelector('script[src*="form_embed.js"]')) return;
    loaded.current = true;
    const s = document.createElement('script');
    s.src = 'https://link.msgsndr.com/js/form_embed.js';
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <iframe
      src={`https://api.leadconnectorhq.com/widget/form/${GHL_FORM_ID}`}
      title="Get a Free Estimate"
      id={`inline-${GHL_FORM_ID}`}
      data-layout='{"id":"INLINE"}'
      data-form-id={GHL_FORM_ID}
      style={{ width: '100%', minHeight: compact ? 640 : 720, border: 'none', borderRadius: 12, background: 'white', display: 'block' }}
    />
  );
}
