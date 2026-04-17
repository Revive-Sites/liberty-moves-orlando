#!/usr/bin/env node
import { readFile, readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const DIR = '/Users/reviveagency/liberty-moves-orlando-build/scraped';

function textBetween(html, openRe, closeRe) {
  const m = html.match(openRe);
  if (!m) return null;
  const start = m.index + m[0].length;
  const rest = html.slice(start);
  const end = rest.match(closeRe);
  if (!end) return null;
  return rest.slice(0, end.index).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function allBetween(html, regex) {
  const out = [];
  let m;
  while ((m = regex.exec(html)) !== null) {
    out.push(m[1] || m[0]);
  }
  return out;
}

function stripTags(s) {
  return (s || '').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();
}

async function analyzeFile(filename) {
  const html = await readFile(join(DIR, filename), 'utf-8');

  const title = (html.match(/<title[^>]*>([^<]+)<\/title>/) || [])[1]?.trim();
  const metaDesc = (html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/) || [])[1];
  const metaKeywords = (html.match(/<meta\s+name=["']keywords["']\s+content=["']([^"']+)["']/) || [])[1];
  const ogImage = (html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/) || [])[1];

  // H1s and H2s
  const h1s = allBetween(html, /<h1[^>]*>([\s\S]*?)<\/h1>/gi).map(stripTags).filter(Boolean);
  const h2s = allBetween(html, /<h2[^>]*>([\s\S]*?)<\/h2>/gi).map(stripTags).filter(Boolean);
  const h3s = allBetween(html, /<h3[^>]*>([\s\S]*?)<\/h3>/gi).map(stripTags).filter(Boolean);

  // iframes
  const iframes = allBetween(html, /<iframe[^>]+src=["']([^"']+)["'][^>]*>/gi);

  // Scripts (external)
  const scripts = allBetween(html, /<script[^>]+src=["']([^"']+)["'][^>]*>/gi).filter(s => !s.includes('stcdn.leadconnectorhq.com/libphonenumber') && !s.includes('intl-tel'));

  // Chat widget (GHL chat widget typically from widgets.leadconnectorhq.com or similar)
  const chatWidgetScripts = scripts.filter(s => /widget|chat|conversations/i.test(s));

  // Forms — look for form IDs (GHL pattern: form-XXXX)
  const formIds = [...new Set(allBetween(html, /class="form-([A-Za-z0-9]+)"/g))];
  const formEmbedIds = [...new Set(allBetween(html, /id="inline-([A-Za-z0-9]+)"/g))];

  // Phone + tel links
  const phones = [...new Set(allBetween(html, /href="tel:([^"]+)"/gi))];
  const emails = [...new Set(allBetween(html, /href="mailto:([^"]+)"/gi))];

  // CTAs (button text for a href=tel: or submit)
  const telButtons = allBetween(html, /<a[^>]+href="tel:[^"]*"[^>]*>([\s\S]*?)<\/a>/gi).map(stripTags).filter(Boolean);

  // Images (non-decorative)
  const images = [...new Set(allBetween(html, /<img[^>]+src=["']([^"']+)["']/gi))].filter(s => !s.startsWith('data:'));

  // Image alts paired
  const imgWithAlts = [];
  const imgRe = /<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["']/gi;
  let m;
  while ((m = imgRe.exec(html)) !== null) {
    imgWithAlts.push({ src: m[1], alt: m[2] });
  }

  // Paragraphs (first 20)
  const paragraphs = allBetween(html, /<p[^>]*>([\s\S]*?)<\/p>/gi).map(stripTags).filter(p => p.length > 20 && p.length < 1000).slice(0, 40);

  // Canonical
  const canonical = (html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/) || [])[1];

  // Detect chat widget inline blocks (look for common GHL chat-widget markers)
  const hasChatWidget = /leadconnector.*chat|msgsndr.*chat|chat-widget|widget\.leadconnectorhq\.com|embedconfig|livechat-widget/i.test(html);
  const hasCallWidget = /call-widget|click-to-call/i.test(html);

  return {
    file: filename,
    title,
    metaDesc,
    metaKeywords,
    ogImage,
    canonical,
    h1s,
    h2s: h2s.slice(0, 30),
    h3s: h3s.slice(0, 30),
    iframes,
    scripts: scripts.slice(0, 20),
    chatWidgetScripts,
    hasChatWidget,
    hasCallWidget,
    formIds,
    formEmbedIds,
    phones,
    emails,
    telButtons: [...new Set(telButtons)].slice(0, 10),
    images: images.slice(0, 30),
    imgWithAlts: imgWithAlts.slice(0, 20),
    paragraphs,
    htmlBytes: html.length,
  };
}

const files = (await readdir(DIR)).filter(f => f.endsWith('.html'));
const out = {};
for (const f of files) {
  out[f] = await analyzeFile(f);
}
await writeFile(join(DIR, '_extracted.json'), JSON.stringify(out, null, 2));
console.log(`Extracted ${files.length} pages → _extracted.json`);

// Quick report
const root = out['_root.html'];
console.log('\n=== HOMEPAGE SUMMARY ===');
console.log('Title:', root.title);
console.log('Desc:', root.metaDesc);
console.log('H1s:', root.h1s);
console.log('H2s (first 10):', root.h2s.slice(0, 10));
console.log('Iframes:', root.iframes);
console.log('Chat widget detected:', root.hasChatWidget);
console.log('Chat scripts:', root.chatWidgetScripts);
console.log('Form IDs:', root.formIds);
console.log('Form embed IDs:', root.formEmbedIds);
console.log('Phones:', root.phones);
console.log('Tel buttons:', root.telButtons);
console.log('OG Image:', root.ogImage);
console.log('Canonical:', root.canonical);
console.log('Images count:', root.images.length);

console.log('\n=== CONTACT PAGE ===');
const contact = out['contact-us.html'];
if (contact) {
  console.log('H1s:', contact.h1s);
  console.log('H2s (first 10):', contact.h2s.slice(0, 10));
  console.log('Iframes:', contact.iframes);
  console.log('Form IDs:', contact.formIds);
  console.log('Chat widget:', contact.hasChatWidget);
  console.log('Chat scripts:', contact.chatWidgetScripts);
}
