import { chromium } from 'playwright';

const BASE = process.env.BASE || 'https://www.libertymovesorlando.com';
const PAGES = [
  '', 'residential-moving', 'commercial-moving', 'long-distance-moving',
  'packing-services', 'local-movers', 'about', 'why-choose-us',
  'orlando-moving-cost', 'orlando-moving-cost-calculator', 'faqs',
  'gallery', 'contact-us', 'review', 'winter-park-orlando',
];

function luminance([r, g, b]) {
  const a = [r, g, b].map(v => {
    v = v / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}
function contrast(fg, bg) {
  const l1 = luminance(fg), l2 = luminance(bg);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}
function parseRgb(s) {
  const m = s.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  return m ? [+m[1], +m[2], +m[3]] : null;
}

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });

for (const slug of PAGES) {
  const url = `${BASE}/${slug}`;
  const page = await ctx.newPage();
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
    await page.waitForTimeout(800);

    const offenders = await page.evaluate(() => {
      function getEffectiveBg(el) {
        let node = el;
        while (node && node !== document.body) {
          const s = getComputedStyle(node);
          if (s.backgroundColor && s.backgroundColor !== 'rgba(0, 0, 0, 0)' && s.backgroundColor !== 'transparent') {
            return s.backgroundColor;
          }
          node = node.parentElement;
        }
        return getComputedStyle(document.body).backgroundColor;
      }
      const results = [];
      const els = document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,span,div,a,li,strong,em,button');
      for (const el of els) {
        const text = el.innerText?.trim();
        if (!text || text.length < 2) continue;
        // skip containers that only hold other elements with text
        const direct = Array.from(el.childNodes).some(n => n.nodeType === 3 && n.textContent.trim());
        if (!direct) continue;
        const s = getComputedStyle(el);
        const fgStr = s.color;
        const bgStr = getEffectiveBg(el);
        results.push({
          tag: el.tagName.toLowerCase(),
          text: text.slice(0, 60),
          fg: fgStr,
          bg: bgStr,
          cls: el.className?.toString?.().slice(0, 120) || '',
          rect: (() => { const r = el.getBoundingClientRect(); return { x: Math.round(r.x), y: Math.round(r.y + window.scrollY), w: Math.round(r.width), h: Math.round(r.height) }; })(),
        });
      }
      return results;
    });

    const flagged = [];
    for (const o of offenders) {
      const fg = parseRgb(o.fg);
      const bg = parseRgb(o.bg);
      if (!fg || !bg) continue;
      const c = contrast(fg, bg);
      // "blue on dark" heuristic: blue-ish foreground (blue > red, blue > green), dark bg (luminance < 0.25), contrast < 4.5
      const isBlueFg = fg[2] > fg[0] && fg[2] > fg[1];
      const isDarkBg = luminance(bg) < 0.25;
      if (c < 4.5 && isBlueFg && isDarkBg) {
        flagged.push({ ...o, contrast: c.toFixed(2) });
      }
    }

    if (flagged.length) {
      console.log(`\n=== /${slug || 'home'} — ${flagged.length} blue-on-dark issues ===`);
      for (const f of flagged.slice(0, 20)) {
        console.log(`  [${f.contrast}] <${f.tag}> "${f.text}" | fg=${f.fg} bg=${f.bg}`);
        console.log(`    class: ${f.cls}`);
        console.log(`    at y=${f.rect.y}`);
      }
    } else {
      console.log(`/${slug || 'home'}: clean`);
    }
  } catch (e) {
    console.log(`/${slug}: ERROR ${e.message}`);
  } finally {
    await page.close();
  }
}

await ctx.close();
await browser.close();
