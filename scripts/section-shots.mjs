import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const BASE = process.env.BASE || 'https://www.libertymovesorlando.com';
const OUT = path.resolve('screenshots/sections');
fs.mkdirSync(OUT, { recursive: true });

const SLUGS = (process.env.SLUGS || 'home,commercial-moving,long-distance-moving,packing-services,why-choose-us,winter-park-orlando').split(',');

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

for (const slug of SLUGS) {
  const label = slug || 'home';
  const url = `${BASE}/${slug === 'home' ? '' : slug}`;
  await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
  await page.waitForTimeout(1200);
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  console.log(`${label}: ${h}px`);
  let i = 0;
  for (let y = 0; y < h; y += 800) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await page.waitForTimeout(300);
    const file = path.join(OUT, `${label}-${String(i).padStart(2, '0')}-y${y}.png`);
    await page.screenshot({ path: file, fullPage: false });
    i++;
  }
}

await browser.close();
console.log('done');
