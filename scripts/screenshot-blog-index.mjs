import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const URL = 'http://localhost:3000/blog';
const OUT_DIR = path.join(process.cwd(), 'test-results', 'kids-blog');
fs.mkdirSync(OUT_DIR, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1280, height: 1400 } });
const page = await context.newPage();

await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(500);

await page.screenshot({ path: path.join(OUT_DIR, 'index-top.png'), fullPage: false });

const posts = await page.evaluate(() => {
  return Array.from(document.querySelectorAll('a.card h2')).map((h) => h.textContent?.trim());
});
console.log('Posts on index:', posts.length);
console.log(posts.slice(0, 4));
console.log('Includes kids post:', posts.some((t) => t?.includes('Moving with Kids in Orlando')));

await browser.close();
