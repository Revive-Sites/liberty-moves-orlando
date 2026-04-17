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
];

const browser = await chromium.launch();
for (const { label, url } of sites) {
  for (const vp of [{ w: 1440, h: 900, tag: 'desktop' }, { w: 390, h: 844, tag: 'mobile' }]) {
    const ctx = await browser.newContext({ viewport: { width: vp.w, height: vp.h } });
    const page = await ctx.newPage();
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
      // Wait extra for GHL form iframe + chat widget to render
      await page.waitForTimeout(5000);
      // Scroll to trigger any lazy-loaded iframes
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(800);
      // Full-page screenshot
      await page.screenshot({ path: `${OUT}/${label}-${vp.tag}.png`, fullPage: true });
      // Hero-only viewport screenshot for form comparison
      await page.screenshot({ path: `${OUT}/${label}-${vp.tag}-hero.png`, fullPage: false });
      console.log(`✔ ${label}-${vp.tag} (+ hero)`);
    } catch (e) {
      console.log(`✘ ${label}-${vp.tag}: ${e.message}`);
    }
    await ctx.close();
  }
}
await browser.close();
console.log(`\nScreenshots saved to ${OUT}`);
