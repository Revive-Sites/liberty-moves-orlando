'use client';
import { useEffect, useRef } from 'react';
import { SITE } from '@/lib/site';

/**
 * GHL form embed with proper script lifecycle.
 * The form_embed.js script must load AFTER the iframe is in the DOM. It reads
 * the iframe's data-* attributes, measures the internal form, and repositions
 * the iframe back to visible. Using a useEffect append instead of Next.js
 * <Script> ensures the correct ordering.
 */
export default function FormEmbed({ height = 540, formName = 'Website Form' }: { height?: number; formName?: string }) {
  const { formId, formIframeSrc, formEmbedSrc } = SITE.ghl;
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current) return;
    if (document.querySelector(`script[src="${formEmbedSrc}"]`)) {
      scriptLoaded.current = true;
      return;
    }
    scriptLoaded.current = true;
    const s = document.createElement('script');
    s.src = formEmbedSrc;
    s.async = true;
    document.body.appendChild(s);
  }, [formEmbedSrc]);

  return (
    <iframe
      src={formIframeSrc}
      title={formName}
      id={`inline-${formId}`}
      data-layout={JSON.stringify({ id: 'INLINE' })}
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name={formName}
      data-height={String(height)}
      data-layout-iframe-id={`inline-${formId}`}
      data-form-id={formId}
      style={{ width: '100%', height: `${height}px`, border: 'none', borderRadius: '12px', background: '#fff', display: 'block' }}
    />
  );
}
