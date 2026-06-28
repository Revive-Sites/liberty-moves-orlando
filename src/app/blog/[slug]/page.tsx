import PageHero from '@/components/sections/PageHero';
import CTA from '@/components/sections/CTA';
import BlogPostingLd from '@/components/BlogPostingLd';
import RelatedPosts from '@/components/RelatedPosts';
import { BreadcrumbsLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getBlogPost, listBlogPosts } from '@/data/blog-posts-manifest';

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  return listBlogPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: 'Post not found' };
  // Shorter SEO <title> overrides for posts whose editorial H1 runs long
  // (keeps the on-page H1 intact while the meta title stays ≤60 chars).
  const SEO_TITLE_OVERRIDES: Record<string, string> = {
    'orlando-apartment-move-checklist-30-day-plan': 'Orlando Apartment Move Checklist (30-Day Plan)',
    'how-to-choose-the-best-moving-company-in-orlando-without-getting-burned-by':
      'How to Choose the Best Orlando Moving Company',
    'moving-with-kids-in-orlando-how-to-make-the-transition-easier-for-the-whole-fami':
      'Moving with Kids in Orlando — Family Guide',
    'apartment-moving-in-orlando-what-nobody-tells-you-before-move-in-day':
      'Apartment Moving in Orlando — What to Know',
    'the-real-cost-of-hiring-the-wrong-movers-in-orlando-and-how-to-avoid-it':
      'The Real Cost of Hiring the Wrong Movers',
    'why-liberty-moves-orlando-is-one-of-the-top-movers-in-lake-mary':
      'Top-Rated Movers in Lake Mary | Liberty Moves',
  };
  // Use an absolute title so the root brand template isn't appended a second
  // time. Only add the brand when there's room to stay near a sane length.
  const titleAbsolute =
    SEO_TITLE_OVERRIDES[slug] ??
    (post.title.length <= 44
      ? `${post.title} | Liberty Moves`
      : post.title);
  return {
    title: { absolute: titleAbsolute },
    description: post.metaDescription || post.excerpt,
    alternates: { canonical: `${SITE.url}/blog/${slug}` },
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
  const post = getBlogPost(slug);
  if (!post) notFound();

  const body =
    post.contentHtml ||
    (post.contentBlocks || []).map((p) => `<p>${p}</p>`).join('\n');

  return (
    <>
      <BlogPostingLd
        slug={slug}
        title={post.title}
        description={post.metaDescription || post.excerpt}
        date={post.isoDate}
        updated={post.isoDate}
      />
      <BreadcrumbsLd
        items={[
          { name: 'Home', url: SITE.url },
          { name: 'Blog', url: `${SITE.url}/blog` },
          { name: post.title, url: `${SITE.url}/blog/${slug}` },
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
      <RelatedPosts currentSlug={slug} />
      <CTA />
    </>
  );
}
