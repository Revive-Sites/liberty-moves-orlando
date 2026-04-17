#!/usr/bin/env node
import { writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const BASE = 'https://libertymovesorlando.com';
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

const ROUTES = [
  '/',
  '/home',
  '/About-Us',
  '/about-us',
  '/contact-us',
  '/Contact-Us',
  '/residential',
  '/residential-moving',
  '/Commercial',
  '/commercial-moving',
  '/Distance',
  '/long-distance-moving',
  '/Packing-Services',
  '/packing-services',
  '/gallery',
  '/blog',
  '/faqs',
  '/Why-Choose-Us',
  '/review',
  '/privacy-policy',
  '/terms-and-condition',
  '/Winter-Park-Movers',
  '/winter-park-orlando',
  '/Kissimmee-Movers',
  '/kissimmee-orlando',
  '/Altamonte-Springs-Movers',
  '/altamonte-springs-orlando',
  '/Lake-Mary-Movers',
  '/lake-mary-orlando',
  '/Apopka-Movers',
  '/apopka-orlando',
  '/Oviedo-Movers',
  '/oviedo-orlando',
  '/Sanford-Movers',
  '/sanford-orlando',
  '/Windermere-Movers',
  '/windermere-orlando',
  '/Celebration-Movers',
  '/celebration-orlando',
  '/St-Cloud-Movers',
  '/st-cloud-orlando',
  '/Davenport-Movers',
  '/davenport-orlando',
  '/Gotha-Movers',
  '/gotha-orlando',
  '/Montverde-Movers',
  '/montverde-orlando',
  '/Winter-Garden-Movers',
  '/winter-garden-orlando',
  '/college-park-orlando',
  '/maitland-movers',
  '/winter-springs-movers',
  '/casselberry-movers',
];

const results = [];

async function fetchOne(path) {
  const url = BASE + path;
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': UA, 'Accept': 'text/html,*/*' },
      redirect: 'manual',
    });
    const status = res.status;
    const location = res.headers.get('location') || '';
    let html = '';
    let finalUrl = url;

    if (status >= 300 && status < 400 && location) {
      // follow once manually
      const res2 = await fetch(location.startsWith('http') ? location : new URL(location, url).href, {
        headers: { 'User-Agent': UA, 'Accept': 'text/html,*/*' },
      });
      html = await res2.text();
      finalUrl = res2.url;
      return { path, url, status, redirectedTo: finalUrl, length: html.length, html };
    }

    html = await res.text();
    return { path, url, status, length: html.length, html };
  } catch (e) {
    return { path, url, error: e.message };
  }
}

console.log(`Fetching ${ROUTES.length} routes…`);
const outDir = '/Users/reviveagency/liberty-moves-orlando-build/scraped';
await mkdir(outDir, { recursive: true });

const limit = 6; // concurrency
let idx = 0;
async function worker() {
  while (idx < ROUTES.length) {
    const my = idx++;
    const r = await fetchOne(ROUTES[my]);
    const slug = ROUTES[my] === '/' ? '_root' : ROUTES[my].replace(/\//g, '_').replace(/^_/, '');
    if (r.html) {
      await writeFile(join(outDir, `${slug}.html`), r.html);
      delete r.html;
    }
    results.push(r);
    console.log(`  [${String(my + 1).padStart(2)}/${ROUTES.length}] ${r.status || 'ERR'} ${ROUTES[my]}${r.redirectedTo ? ' → ' + r.redirectedTo : ''}`);
  }
}
await Promise.all(Array.from({ length: limit }, worker));

await writeFile(join(outDir, '_index.json'), JSON.stringify(results, null, 2));
console.log(`\nWrote ${results.length} results to ${outDir}/`);
console.log(`  200 OK: ${results.filter(r => r.status === 200).length}`);
console.log(`  3xx redirect: ${results.filter(r => r.status >= 300 && r.status < 400).length}`);
console.log(`  404 not found: ${results.filter(r => r.status === 404).length}`);
console.log(`  errors: ${results.filter(r => r.error).length}`);
