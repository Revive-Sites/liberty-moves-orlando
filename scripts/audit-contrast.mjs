import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const BASE = process.env.BASE || 'https://www.libertymovesorlando.com';
const OUT = path.resolve('screenshots/contrast');
fs.mkdirSync(OUT, { recursive: true });

const PAGES = [
  { slug: '', label: 'home' },
  { slug: 'residential-moving', label: 'residential' },
  { slug: 'commercial-moving', label: 'commercial' },
  { slug: 'long-distance-moving', label: 'long-distance' },
  { slug: 'packing-services', label: 'packing' },
  { slug: 'local-movers', label: 'local-movers' },
  { slug: 'about', label: 'about' },
  { slug: 'why-choose-us', label: 'why-choose-us' },
  { slug: 'orlando-moving-cost', label: 'orlando-moving-cost' },
  { slug: 'orlando-moving-cost-calculator', label: 'cost-calculator' },
  { slug: 'faqs', label: 'faqs' },
  { slug: 'gallery', label: 'gallery' },
  { slug: 'contact-us', label: 'contact' },
  { slug: 'review', label: 'review' },
  { slug: 'winter-park-orlando', label: 'city-winter-park' },
  { slug: 'moving-to-orlando-from-new-york', label: 'inbound-nyc' },
];

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });

for (const p of PAGES) {
  const url = `${BASE}/${p.slug}`;
  const file = path.join(OUT, `${p.label}.png`);
  try {
    const page = await ctx.newPage();
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
    await page.waitForTimeout(1500); // settle animations
    await page.screenshot({ path: file, fullPage: true });
    console.log(`OK  ${p.label} -> ${file}`);
    await page.close();
  } catch (e) {
    console.log(`ERR ${p.label}: ${e.message}`);
  }
}

await ctx.close();
await browser.close();
console.log('done');
