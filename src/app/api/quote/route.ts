import { NextResponse } from 'next/server';

// Liberty Moves Orlando GHL location
const LIBERTY_LOCATION_ID = '7pnMlJIyNsgtdaD576rT';

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

  const ghlPayload = {
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
  };

  if (GHL_API_KEY) {
    try {
      const r = await fetch('https://services.leadconnectorhq.com/contacts/', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${GHL_API_KEY}`,
          Version: '2021-07-28',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ghlPayload),
      });
      if (r.ok) return NextResponse.json({ ok: true, channel: 'ghl-api' });
      const errText = await r.text();
      console.warn('[api/quote] GHL API error:', r.status, errText.slice(0, 300));
    } catch (e) {
      console.error('[api/quote] GHL API exception:', e);
    }
  }

  if (RELAY_URL) {
    try {
      const r = await fetch(RELAY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'libertymovesorlando', ...input, ghlLocationId: LIBERTY_LOCATION_ID }),
      });
      if (r.ok) return NextResponse.json({ ok: true, channel: 'relay' });
    } catch (e) {
      console.error('[api/quote] Relay failed:', e);
    }
  }

  // Last resort: log to stderr so Austin can see the lead in Vercel logs
  console.warn('[api/quote] LEAD RECEIVED (no GHL_API_KEY / LEAD_RELAY_URL set):', JSON.stringify(input));

  return NextResponse.json({ ok: true, channel: 'log' });
}
