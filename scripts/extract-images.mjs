#!/usr/bin/env node
import { readFile, readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const DIR = '/Users/reviveagency/liberty-moves-orlando-build/scraped';
const files = (await readdir(DIR)).filter(f => f.endsWith('.html'));

const GHL_CDN = /https:\/\/(?:images\.leadconnectorhq\.com\/image\/[^"')\s]+u_)?https:\/\/assets\.cdn\.filesafe\.space\/7pnMlJIyNsgtdaD576rT\/media\/([a-f0-9]+)\.(png|jpg|jpeg|webp)/g;

const byHash = new Map();
for (const f of files) {
  const html = await readFile(join(DIR, f), 'utf-8');
  let m;
  GHL_CDN.lastIndex = 0;
  while ((m = GHL_CDN.exec(html)) !== null) {
    const hash = m[1];
    const ext = m[2];
    if (!byHash.has(hash)) {
      byHash.set(hash, {
        hash, ext,
        rawUrl: `https://assets.cdn.filesafe.space/7pnMlJIyNsgtdaD576rT/media/${hash}.${ext}`,
        cdnUrl: `https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/7pnMlJIyNsgtdaD576rT/media/${hash}.${ext}`,
        pages: new Set(),
      });
    }
    byHash.get(hash).pages.add(f);
  }
}

const out = [...byHash.values()].map(v => ({ ...v, pages: [...v.pages] }));
await writeFile(join(DIR, '_images.json'), JSON.stringify(out, null, 2));
console.log(`Found ${out.length} unique GHL images across ${files.length} pages`);
console.log('\nTop 15 by page count:');
out.sort((a, b) => b.pages.length - a.pages.length).slice(0, 15).forEach(i => {
  console.log(`  ${i.pages.length.toString().padStart(3)}x  ${i.hash}.${i.ext}  (first on: ${i.pages[0]})`);
});
