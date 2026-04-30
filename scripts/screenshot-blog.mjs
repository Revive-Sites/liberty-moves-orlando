import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const SLUG = process.env.BLOG_SLUG || 'moving-with-kids-in-orlando-how-to-make-the-transition-easier-for-the-whole-fami';
const PORT = process.env.PORT || '3001';
const URL = `http://localhost:${PORT}/blog/b/${SLUG}`;
const OUT_DIR = path.join(process.cwd(), 'test-results', SLUG.slice(0, 40));
fs.mkdirSync(OUT_DIR, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await context.newPage();

await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(800);

await page.screenshot({ path: path.join(OUT_DIR, 'full.png'), fullPage: true });

const article = await page.locator('article').first();
await article.screenshot({ path: path.join(OUT_DIR, 'article.png') });

const data = await page.evaluate(() => {
  const article = document.querySelector('article .prose-ink, article');
  if (!article) return { error: 'no article' };
  const target = document.querySelector('.blog-content') || article;
  const out = [];
  for (const el of target.children) {
    const cs = getComputedStyle(el);
    out.push({
      tag: el.tagName.toLowerCase(),
      text: (el.textContent || '').slice(0, 80).trim(),
      marginTop: cs.marginTop,
      marginBottom: cs.marginBottom,
      paddingTop: cs.paddingTop,
      paddingBottom: cs.paddingBottom,
      fontSize: cs.fontSize,
      lineHeight: cs.lineHeight,
      fontWeight: cs.fontWeight,
      hasBlogContentClass: el.closest('.blog-content') !== null,
    });
  }
  return { count: out.length, items: out };
});

fs.writeFileSync(path.join(OUT_DIR, 'structure.json'), JSON.stringify(data, null, 2));
console.log('Screenshots:', OUT_DIR);
console.log('Children counted:', data.count);

await browser.close();
