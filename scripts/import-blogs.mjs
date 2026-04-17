#!/usr/bin/env node
// Import real LM blog posts — preserve paragraph + heading order by walking HTML sequentially.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const DIR = '/Users/reviveagency/liberty-moves-orlando-build/scraped/blog';
const APP = '/Users/reviveagency/liberty-moves-orlando-build/src/app/blog/b';

// Use EXACT live-site slugs under /blog/b/ for SEO preservation
const POSTS = [
  { slug: 'how-professional-packing-services-protect-your-belongings-during-a-move', srcSlug: 'how-professional-packing-services-protect-your-belongings-during-a-move', category: 'Packing', date: '2026-04-10' },
  { slug: 'what-makes-liberty-moves-orlando-different-why-every-resident-deserves-the-best-in-2026', srcSlug: 'what-makes-liberty-moves-orlando-different-why-every-resident-deserves-the-best-in-2026', category: 'Company', date: '2026-03-19' },
  { slug: 'orlando-movers-the-real-difference-between-licensed-and-unlicensed', srcSlug: 'orlando-movers-the-real-difference-between-licensed-and-unlicensed', category: 'Buyer Guide', date: '2026-03-13' },
  { slug: 'how-hiring-local-movers-makes-relocation-quick-and-easy', srcSlug: 'how-hiring-local-movers-makes-relocation-quick-and-easy', category: 'Local', date: '2026-02-20' },
  { slug: 'what-you-need-to-know-about-long-distance-moving-services', srcSlug: 'what-you-need-to-know-about-long-distance-moving-services', category: 'Long Distance', date: '2026-02-13' },
];

function stripTags(s) {
  return s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();
}

/** Walk HTML extracting h2/h3/p/ul in document order, skipping nav/header/footer */
function extractBody(html) {
  // Cut out everything before the main content. GHL blog posts have an <h1> early — start after it.
  const afterH1 = html.split(/<\/h1>/i);
  const body = afterH1.length > 1 ? afterH1.slice(1).join('</h1>') : html;

  // Also cut off anything after footer / script heavy sections
  const stopIdx = body.search(/<footer|<\/main|related-posts|comments-section/i);
  const trimmed = stopIdx > 0 ? body.slice(0, stopIdx) : body;

  const re = /<(h2|h3|p|ul|ol)([^>]*)>([\s\S]*?)<\/\1>/gi;
  const blocks = [];
  let m;
  while ((m = re.exec(trimmed)) !== null) {
    const tag = m[1].toLowerCase();
    const inner = m[3];
    if (tag === 'p') {
      const text = stripTags(inner);
      if (text.length > 40 && !/^(share|copyright|published|subscribe|\d+ min read)/i.test(text)) {
        blocks.push({ tag: 'p', text });
      }
    } else if (tag === 'h2' || tag === 'h3') {
      const text = stripTags(inner);
      if (text && text.length < 200) blocks.push({ tag, text });
    } else if (tag === 'ul' || tag === 'ol') {
      const liRe = /<li[^>]*>([\s\S]*?)<\/li>/gi;
      const items = [];
      let li;
      while ((li = liRe.exec(inner)) !== null) {
        const t = stripTags(li[1]);
        if (t) items.push(t);
      }
      if (items.length >= 2) blocks.push({ tag, items });
    }
  }
  return blocks;
}

function extractHeroImage(html) {
  const matches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)];
  for (const m of matches) {
    const src = m[1];
    if (src.startsWith('data:')) continue;
    if (src.includes('leadconnectorhq.com/image') || src.includes('storage.googleapis.com/msgsndr')) {
      return src;
    }
  }
  return null;
}

function extractTitleMeta(html) {
  const title = (html.match(/<title[^>]*>([^<]+)<\/title>/) || [])[1]?.trim().replace(/ \| Liberty Moves Orlando.*$/i, '').trim();
  const metaDesc = (html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/) || [])[1];
  const h1 = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1];
  return { title, metaDesc, h1: h1 ? stripTags(h1) : null };
}

function esc(s) {
  return s
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, ' ')
    .replace(/\r/g, '');
}

function toJSXText(text) {
  // JSX text — we'll keep straight ASCII to avoid React warnings
  return text
    .replace(/’/g, "\u2019")  // curly apostrophe is OK in JSX
    .replace(/"/g, '\u201c')
    .replace(/"/g, '\u201d');
}

function renderBlock(b) {
  if (b.tag === 'h2') return `        <h2 className="text-2xl md:text-3xl font-extrabold mt-10">${toJSXText(b.text)}</h2>`;
  if (b.tag === 'h3') return `        <h3 className="text-xl md:text-2xl font-extrabold mt-8">${toJSXText(b.text)}</h3>`;
  if (b.tag === 'p') return `        <p>${toJSXText(b.text)}</p>`;
  if (b.tag === 'ul' || b.tag === 'ol') {
    const tag = b.tag;
    const items = b.items.map((it) => `          <li>${toJSXText(it)}</li>`).join('\n');
    return `        <${tag}${tag === 'ul' ? ' className="list-disc pl-6 space-y-2"' : ' className="list-decimal pl-6 space-y-2"'}>\n${items}\n        </${tag}>`;
  }
  return '';
}

for (const post of POSTS) {
  const srcHtml = await readFile(join(DIR, `${post.srcSlug}.html`), 'utf-8');
  const { title, metaDesc, h1 } = extractTitleMeta(srcHtml);
  const heroImage = extractHeroImage(srcHtml);
  const blocks = extractBody(srcHtml);

  console.log(`${post.slug}: ${blocks.length} blocks, title="${title}", image=${heroImage ? 'yes' : 'no'}`);

  const metaTitle = title || post.slug.replace(/-/g, ' ');
  const metaDescSafe = (metaDesc || `${h1 || title} — from Liberty Moves Orlando, licensed Orlando moving company.`).replace(/"/g, "\\'");
  const h1Safe = (h1 || title || post.slug).replace(/"/g, "\\'");

  const rendered = blocks.map(renderBlock).join('\n');

  const pageContent = `import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import BlogPostingLd from '@/components/BlogPostingLd';
import RelatedPosts from '@/components/RelatedPosts';
import { BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export const metadata = {
  title: ${JSON.stringify(metaTitle)},
  description: ${JSON.stringify(metaDesc || `${h1Safe} — from Liberty Moves Orlando.`)},
  alternates: { canonical: \`\${SITE.url}/blog/b/${post.slug}\` },
};

export default function Post() {
  return (
    <>
      <BlogPostingLd slug=${JSON.stringify('b/' + post.slug)} title=${JSON.stringify(metaTitle)} description=${JSON.stringify(metaDesc || '')} date=${JSON.stringify(post.date)} />
      <BreadcrumbsLd items={[
        { name: 'Home', url: SITE.url },
        { name: 'Blog', url: \`\${SITE.url}/blog\` },
        { name: ${JSON.stringify(metaTitle.slice(0, 60))}, url: \`\${SITE.url}/blog/b/${post.slug}\` },
      ]} />
      <PageHero eyebrow=${JSON.stringify(post.category + ' · ' + new Date(post.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }))} title=${JSON.stringify(h1Safe)} />
      ${heroImage ? `<section className="pt-8">
        <div className="container-site max-w-3xl">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
            <Image src=${JSON.stringify(heroImage)} alt=${JSON.stringify(metaTitle)} fill sizes="(min-width: 768px) 768px, 100vw" className="object-cover" priority />
          </div>
        </div>
      </section>` : ''}
      <article className="section-pad">
        <div className="container-site max-w-3xl prose-ink">
${rendered}

          <div className="mt-10 pt-8 border-t border-[var(--color-border)] flex flex-wrap gap-3">
            <Link href="/contact-us" className="btn btn-primary">Get a Free Quote</Link>
            <a href={SITE.phoneLink} className="btn btn-outline"><Phone size={16}/> Call {SITE.phoneDisplay}</a>
          </div>
        </div>
      </article>
      <RelatedPosts currentSlug=${JSON.stringify(post.slug)} />
      <CTA />
    </>
  );
}
`;

  await mkdir(join(APP, post.slug), { recursive: true });
  await writeFile(join(APP, post.slug, 'page.tsx'), pageContent);
}

console.log(`\nGenerated ${POSTS.length} blog post pages`);
