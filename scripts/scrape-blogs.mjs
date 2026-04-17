#!/usr/bin/env node
import { writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const BASE = 'https://libertymovesorlando.com';
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

const POSTS = [
  'how-professional-packing-services-protect-your-belongings-during-a-move',
  'what-makes-liberty-moves-orlando-different-why-every-resident-deserves-the-best-in-2026',
  'orlando-movers-the-real-difference-between-licensed-and-unlicensed',
  'how-hiring-local-movers-makes-relocation-quick-and-easy',
  'what-you-need-to-know-about-long-distance-moving-services',
];

const OUT = '/Users/reviveagency/liberty-moves-orlando-build/scraped/blog';
await mkdir(OUT, { recursive: true });

function stripTags(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();
}

function extractParagraphs(html) {
  const out = [];
  const re = /<p[^>]*>([\s\S]*?)<\/p>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const text = stripTags(m[1]);
    if (text.length > 30) out.push(text);
  }
  return out;
}

function extractHeadings(html, tag) {
  const out = [];
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'gi');
  let m;
  while ((m = re.exec(html)) !== null) {
    const text = stripTags(m[1]);
    if (text) out.push(text);
  }
  return out;
}

function extractImages(html) {
  const out = new Set();
  const re = /<img[^>]+src=["']([^"']+)["']/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    if (!m[1].startsWith('data:') && (m[1].includes('leadconnectorhq') || m[1].includes('storage.googleapis') || m[1].includes('filesafe'))) {
      out.add(m[1]);
    }
  }
  return [...out];
}

const results = {};
for (const slug of POSTS) {
  const url = `${BASE}/blog/b/${slug}`;
  console.log(`Fetching ${slug}...`);
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  const html = await res.text();

  const title = (html.match(/<title[^>]*>([^<]+)<\/title>/) || [])[1]?.trim();
  const metaDesc = (html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/) || [])[1];
  const h1 = extractHeadings(html, 'h1')[0];
  const h2s = extractHeadings(html, 'h2');
  const h3s = extractHeadings(html, 'h3');
  const paragraphs = extractParagraphs(html);
  const images = extractImages(html);

  results[slug] = { slug, url, title, metaDesc, h1, h2s, h3s, paragraphs, images };
  await writeFile(join(OUT, `${slug}.html`), html);
  console.log(`  ${paragraphs.length} paragraphs, ${h2s.length} h2s, ${images.length} images`);
}

await writeFile(join(OUT, '_extracted.json'), JSON.stringify(results, null, 2));
console.log(`\nSaved ${POSTS.length} blog posts to ${OUT}/`);
