'use client';
import Script from 'next/script';
import { SITE } from '@/lib/site';

/**
 * GHL form embed. The form_embed.js script auto-resizes this iframe to fit
 * the form contents via postMessage. We set a reasonable initial height so
 * there's no layout shift on first paint, but the script adjusts it down
 * immediately. Must load `afterInteractive`, not lazy, or the resize won't fire.
 */
export default function FormEmbed({ height = 540, formName = 'Website Form' }: { height?: number; formName?: string }) {
  const { formId, formIframeSrc, formEmbedSrc } = SITE.ghl;
  return (
    <div className="w-full">
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
        style={{ width: '100%', height: `${height}px`, border: 'none', borderRadius: '12px', background: '#fff' }}
      />
      <Script src={formEmbedSrc} strategy="afterInteractive" />
    </div>
  );
}
