#!/usr/bin/env node
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const OUT = '/Users/reviveagency/liberty-moves-orlando-build/screenshots/audit';
await mkdir(OUT, { recursive: true });

const pages = [
  { label: 'home', livePath: '/', newPath: '/' },
  { label: 'contact', livePath: '/contact-us', newPath: '/contact-us' },
  { label: 'residential', livePath: '/residential-moving', newPath: '/residential-moving' },
  { label: 'commercial', livePath: '/commercial-moving', newPath: '/commercial-moving' },
  { label: 'long-distance', livePath: '/long-distance-moving', newPath: '/long-distance-moving' },
  { label: 'packing', livePath: '/Packing-Services', newPath: '/Packing-Services' },
  { label: 'why-us', livePath: '/Why-Choose-Us', newPath: '/Why-Choose-Us' },
  { label: 'faqs', livePath: '/faqs', newPath: '/faqs' },
  { label: 'gallery', livePath: '/gallery', newPath: '/gallery' },
  { label: 'about', livePath: '/About-Us', newPath: '/About-Us' },
  { label: 'winter-park', livePath: '/winter-park-orlando', newPath: '/winter-park-orlando' },
  { label: 'blog', livePath: '/blog', newPath: '/blog' },
];

const browser = await chromium.launch();

async function capture(url, outfile) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36' });
  const page = await ctx.newPage();
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
    await page.waitForTimeout(6000);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    await page.screenshot({ path: outfile, fullPage: true });
  } catch (e) {
    console.log(`  error on ${url}: ${e.message}`);
  }
  await ctx.close();
}

for (const p of pages) {
  console.log(`${p.label}...`);
  await capture(`https://libertymovesorlando.com${p.livePath}`, `${OUT}/${p.label}-LIVE.png`);
  await capture(`https://liberty-moves-orlando.vercel.app${p.newPath}`, `${OUT}/${p.label}-NEW.png`);
}

await browser.close();
console.log('\nAudit screenshots saved to ' + OUT);
