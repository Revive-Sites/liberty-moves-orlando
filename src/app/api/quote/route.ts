import { NextResponse } from 'next/server';

const LIBERTY_LOCATION_ID = '7pnMlJIyNsgtdaD576rT';
const GHL_FORM_ID = 'RjsFjWPKvuPNDGutFGkb';

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

  const GHL_API_KEY = process.env.GHL_API_KEY;
  const RELAY_URL = process.env.LEAD_RELAY_URL;
  const attempts: Array<{ channel: string; detail?: string }> = [];

  // Path 1 — GHL v2 Contacts API (if API key configured)
  if (GHL_API_KEY) {
    try {
      const r = await fetch('https://services.leadconnectorhq.com/contacts/', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${GHL_API_KEY}`,
          Version: '2021-07-28',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          locationId: LIBERTY_LOCATION_ID,
          firstName: input.firstName,
          phone: input.phone,
          email: input.email,
          source: 'Website - liberty-moves-orlando.vercel.app',
          tags: ['Website Lead', 'Hero Form'],
          customFields: [
            { key: 'move_date', field_value: input.moveDate || '' },
            { key: 'origin', field_value: input.origin || '' },
            { key: 'destination', field_value: input.destination || '' },
            { key: 'move_size', field_value: input.moveSize || '' },
            { key: 'details', field_value: input.details || '' },
          ],
        }),
      });
      if (r.ok) return NextResponse.json({ ok: true, channel: 'ghl-api' });
      attempts.push({ channel: 'ghl-api', detail: `${r.status}` });
    } catch (e: any) {
      attempts.push({ channel: 'ghl-api', detail: e.message });
    }
  }

  // Path 2 — GHL public form submit endpoint (no API key required)
  try {
    const fd = new FormData();
    fd.append('formId', GHL_FORM_ID);
    fd.append('location_id', LIBERTY_LOCATION_ID);
    fd.append('first_name', input.firstName);
    fd.append('phone', input.phone);
    fd.append('email', input.email);
    if (input.moveDate) fd.append('move_date', input.moveDate);
    if (input.origin) fd.append('origin_address', input.origin);
    if (input.destination) fd.append('destination_address', input.destination);
    if (input.moveSize) fd.append('move_size', input.moveSize);
    if (input.details) fd.append('details', input.details);

    const r = await fetch('https://backend.leadconnectorhq.com/forms/submit', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: fd,
    });
    if (r.ok) return NextResponse.json({ ok: true, channel: 'ghl-form-submit' });
    attempts.push({ channel: 'ghl-form-submit', detail: `${r.status}` });
  } catch (e: any) {
    attempts.push({ channel: 'ghl-form-submit', detail: e.message });
  }

  // Path 3 — Generic webhook relay (Zapier/Make/Custom)
  if (RELAY_URL) {
    try {
      const r = await fetch(RELAY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'libertymovesorlando', ...input, ghlLocationId: LIBERTY_LOCATION_ID, ghlFormId: GHL_FORM_ID }),
      });
      if (r.ok) return NextResponse.json({ ok: true, channel: 'relay' });
      attempts.push({ channel: 'relay', detail: `${r.status}` });
    } catch (e: any) {
      attempts.push({ channel: 'relay', detail: e.message });
    }
  }

  // Last resort — log the lead. Austin sees it in Vercel function logs.
  console.warn('[api/quote] LEAD RECEIVED, all delivery paths failed:', JSON.stringify({ input, attempts }));
  return NextResponse.json({ ok: true, channel: 'log-fallback' });
}
