'use client';
import Script from 'next/script';
import { SITE } from '@/lib/site';

export default function FormEmbed({ height = 620, formName = 'Get a Free Quote' }: { height?: number; formName?: string }) {
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
        data-form-name={formId}
        data-height={String(height)}
        data-layout-iframe-id={`inline-${formId}`}
        data-form-id={formId}
        style={{ width: '100%', height: `${height}px`, border: 'none', borderRadius: '12px', background: '#fff' }}
      />
      <Script src={formEmbedSrc} strategy="lazyOnload" />
    </div>
  );
}
