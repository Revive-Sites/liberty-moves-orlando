import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import BlogPostingLd from '@/components/BlogPostingLd';
import RelatedPosts from '@/components/RelatedPosts';
import { BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const revalidate = 60;
export const dynamicParams = true;

interface GeneratedPost {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription?: string;
  category: string;
  readTime: string;
  date: string;
  isoDate: string;
  author: string;
  tags: string[];
  heroImage?: string;
  heroImageAlt?: string;
  contentHtml?: string;
  contentBlocks?: string[];
}

// Dynamic import with a static prefix — webpack creates code-split chunks for
// every matching JSON file at build time, so all posts are reliably bundled
// into the serverless function. fs.readFileSync(process.cwd(), ...) is NOT
// reliably traced by Next.js for files added between builds.
async function loadPost(slug: string): Promise<GeneratedPost | null> {
  try {
    const mod = await import(`@/data/generated-blog-posts/${slug}.json`);
    return (mod.default ?? mod) as GeneratedPost;
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  // Filesystem read is safe at build time (Node runtime, full FS access).
  // Only the runtime serverless function needed the dynamic-import fix above.
  const fs = await import('node:fs');
  const path = await import('node:path');
  try {
    const dir = path.join(process.cwd(), 'src/data/generated-blog-posts');
    if (!fs.existsSync(dir)) return [];
    return fs
      .readdirSync(dir)
      .filter((f) => f.endsWith('.json'))
      .map((f) => ({ slug: f.replace(/\.json$/, '') }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await loadPost(slug);
  if (!post) return { title: 'Post not found' };
  return {
    title: `${post.title} — Liberty Moves Orlando`,
    description: post.metaDescription || post.excerpt,
    alternates: { canonical: `${SITE.url}/blog/b/${slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription || post.excerpt,
      type: 'article',
      publishedTime: post.isoDate,
      authors: [post.author],
      images: post.heroImage ? [{ url: post.heroImage }] : undefined,
    },
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await loadPost(slug);
  if (!post) notFound();

  const body =
    post.contentHtml ||
    (post.contentBlocks || []).map((p) => `<p>${p}</p>`).join('\n');

  return (
    <>
      <BlogPostingLd
        slug={`b/${slug}`}
        title={post.title}
        description={post.metaDescription || post.excerpt}
        date={post.isoDate}
        updated={post.isoDate}
      />
      <BreadcrumbsLd
        items={[
          { name: 'Home', url: SITE.url },
          { name: 'Blog', url: `${SITE.url}/blog` },
          { name: post.title, url: `${SITE.url}/blog/b/${slug}` },
        ]}
      />
      <PageHero
        eyebrow={`${post.category} · ${post.date}`}
        title={post.title}
        subtitle={post.excerpt}
      />
      <article className="section-pad">
        <div className="container-site max-w-3xl prose-ink">
          {post.heroImage ? (
            <figure className="mb-8">
              <img
                src={post.heroImage}
                alt={post.heroImageAlt || post.title}
                loading="eager"
                className="w-full rounded-xl border border-[var(--color-border)]"
              />
            </figure>
          ) : null}
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </div>
      </article>
      <RelatedPosts currentSlug={`b/${slug}`} />
      <CTA />
    </>
  );
}
