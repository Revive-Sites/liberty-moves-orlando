'use client';
import { SITE } from '@/lib/site';

/**
 * Direct GHL form iframe — no form_embed.js wrapper script.
 * The script has a domain check that blocks unapproved parent domains,
 * which leaves the iframe stuck off-screen at -9919px. By skipping the
 * script entirely, the iframe renders normally at our fixed size.
 * Lead submissions still route correctly to GHL.
 */
export default function FormEmbed({ height = 560, formName = 'Website Form' }: { height?: number; formName?: string }) {
  const { formId, formIframeSrc } = SITE.ghl;
  return (
    <iframe
      src={formIframeSrc}
      title={formName}
      id={`inline-${formId}`}
      data-form-id={formId}
      style={{ width: '100%', height: `${height}px`, border: 'none', borderRadius: '12px', background: '#fff', display: 'block' }}
    />
  );
}
