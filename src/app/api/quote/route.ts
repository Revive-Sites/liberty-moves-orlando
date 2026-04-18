import { NextResponse } from 'next/server';

// Revive OS Supabase edge function that handles OAuth + GHL contact creation
const REVIVE_LEAD_FN = 'https://trqqskzmqzhwdjpbeqrq.supabase.co/functions/v1/liberty-moves-lead';

type QuoteInput = {
  firstName?: string;
  phone?: string;
  email?: string;
  moveDate?: string;
  origin?: string;
  destination?: string;
  moveSize?: string;
  details?: string;
};

export async function POST(req: Request) {
  let input: QuoteInput;
  try {
    input = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  if (!input.firstName || !input.phone || !input.email) {
    return NextResponse.json({ error: 'First name, phone, and email are required.' }, { status: 400 });
  }

  const attempts: Array<{ channel: string; detail?: string }> = [];

  // Primary — Revive OS edge function (handles OAuth + creates GHL contact)
  try {
    const r = await fetch(REVIVE_LEAD_FN, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });
    const data = await r.json().catch(() => ({}));
    if (r.ok && data.ok) {
      return NextResponse.json({ ok: true, channel: 'ghl', contactId: data.contactId });
    }
    attempts.push({ channel: 'ghl', detail: `${r.status} ${data.error || data.ghlError || ''}`.trim() });
  } catch (e: any) {
    attempts.push({ channel: 'ghl', detail: e.message });
  }

  // Fallback — optional generic webhook relay
  const RELAY_URL = process.env.LEAD_RELAY_URL;
  if (RELAY_URL) {
    try {
      const r = await fetch(RELAY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'libertymovesorlando', ...input }),
      });
      if (r.ok) return NextResponse.json({ ok: true, channel: 'relay' });
      attempts.push({ channel: 'relay', detail: `${r.status}` });
    } catch (e: any) {
      attempts.push({ channel: 'relay', detail: e.message });
    }
  }

  // Last resort — log so nothing is lost
  console.warn('[api/quote] LEAD RECEIVED but all delivery paths failed:', JSON.stringify({ input, attempts }));
  return NextResponse.json({ ok: true, channel: 'log-fallback', attempts });
}
