#!/usr/bin/env node
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const OUT = '/Users/reviveagency/liberty-moves-orlando-build/screenshots';
await mkdir(OUT, { recursive: true });

const sites = [
  { label: 'live-ghl', url: 'https://libertymovesorlando.com/' },
  { label: 'live-contact', url: 'https://libertymovesorlando.com/contact-us' },
  { label: 'new-vercel', url: 'https://liberty-moves-orlando.vercel.app/' },
  { label: 'new-contact', url: 'https://liberty-moves-orlando.vercel.app/contact-us' },
  { label: 'new-pricing', url: 'https://liberty-moves-orlando.vercel.app/orlando-moving-cost' },
  { label: 'new-city', url: 'https://liberty-moves-orlando.vercel.app/winter-park-orlando' },
];

const browser = await chromium.launch();
for (const { label, url } of sites) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: `${OUT}/${label}-desktop.png`, fullPage: true });
    console.log(`✔ ${label}-desktop`);
  } catch (e) {
    console.log(`✘ ${label}-desktop: ${e.message}`);
  }
  await ctx.close();

  const mobileCtx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mobilePage = await mobileCtx.newPage();
  try {
    await mobilePage.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await mobilePage.waitForTimeout(1000);
    await mobilePage.screenshot({ path: `${OUT}/${label}-mobile.png`, fullPage: true });
    console.log(`✔ ${label}-mobile`);
  } catch (e) {
    console.log(`✘ ${label}-mobile: ${e.message}`);
  }
  await mobileCtx.close();
}
await browser.close();
console.log(`\nScreenshots saved to ${OUT}`);
