import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Layout } from '@/components/Layout';
import { AppCard } from '@/components/AppCard';
import { VideoReviewSection } from '@/components/VideoReviewSection';
import { ScreenshotGallery } from '@/components/ScreenshotGallery';
import { RatingStars, RatingBreakdownDisplay } from '@/components/RatingStars';
import { ProsCons } from '@/components/ProsCons';
import { TagPill } from '@/components/TagPill';
import { CategoryPill } from '@/components/CategoryPill';
import { DownloadButtons } from '@/components/DownloadButtons';
import { JsonLd } from '@/components/SEO/JsonLd';
import {
  getAppBySlug,
  getAllAppSlugs,
  getRelatedApps,
  getCategoryBySlug
} from '@/lib/data';
import { generateAppSchemaOrg } from '@/lib/seo';

interface AppPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllAppSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: AppPageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    return { title: 'App Not Found' };
  }

  return {
    title: app.seo.title,
    description: app.seo.description,
    keywords: app.seo.keywords,
    openGraph: {
      title: app.seo.title,
      description: app.seo.description,
      images: app.seo.ogImage ? [app.seo.ogImage] : [app.heroImageUrl || app.iconUrl],
      type: 'article',
      publishedTime: app.publishedAt,
      modifiedTime: app.updatedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: app.seo.title,
      description: app.seo.description,
      images: app.seo.ogImage ? [app.seo.ogImage] : undefined,
    },
    alternates: {
      canonical: app.seo.canonicalUrl || `/apps/${app.slug}`,
    },
  };
}

export default async function AppPage({ params }: AppPageProps) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  const relatedApps = getRelatedApps(slug, 3);
  const category = getCategoryBySlug(app.category);
  const schemaOrg = generateAppSchemaOrg(app);

  return (
    <Layout>
      <JsonLd data={schemaOrg} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <Link href={`/categories/${app.category}`} className="hover:text-gray-700">
              {category?.name || app.category}
            </Link>
            <span>/</span>
            <span className="text-gray-900">{app.name}</span>
          </nav>

          <div className="flex items-start gap-6">
            {/* App Icon */}
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image
                src={app.iconUrl}
                alt={`${app.name} icon`}
                fill
                className="rounded-2xl object-cover shadow-lg"
                priority
              />
            </div>

            {/* App Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{app.name}</h1>
                {app.editorsPick && (
                  <span className="bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    Editor&apos;s Pick
                  </span>
                )}
              </div>

              <p className="text-gray-600 mb-3">
                by{' '}
                {app.developerUrl ? (
                  <a href={app.developerUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {app.developer}
                  </a>
                ) : (
                  app.developer
                )}
              </p>

              <div className="flex items-center gap-4 mb-4">
                <RatingStars rating={app.rating.overall} size="lg" showValue />
                {app.userRatingCount && (
                  <span className="text-sm text-gray-500">
                    ({app.userRatingCount.toLocaleString()} ratings)
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <CategoryPill category={app.category} showIcon />
                {app.tags.map((tag) => (
                  <TagPill key={tag} tag={tag} />
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Download Buttons */}
        <section className="mb-10 p-6 bg-gray-50 rounded-xl">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Get the App</h2>
          <DownloadButtons links={app.downloadLinks} />
          {app.priceDisplay && (
            <p className="mt-3 text-sm text-gray-600">
              Pricing: <span className="font-medium">{app.priceDisplay}</span>
            </p>
          )}
        </section>

        {/* Summary */}
        <section className="mb-10">
          <p className="text-xl text-gray-700 leading-relaxed">
            {app.summary}
          </p>
        </section>

        {/* Video Review */}
        {app.videoReview && (
          <VideoReviewSection video={app.videoReview} appName={app.name} />
        )}

        {/* Screenshots */}
        <ScreenshotGallery screenshots={app.screenshots} appName={app.name} />

        {/* Long-form Review */}
        <section className="my-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Review</h2>
          <div
            className="prose-review"
            dangerouslySetInnerHTML={{ __html: markdownToHtml(app.reviewContent) }}
          />
        </section>

        {/* Pros & Cons */}
        <ProsCons pros={app.pros} cons={app.cons} />

        {/* Verdict */}
        {app.verdict && (
          <section className="my-10 p-6 bg-blue-50 border border-blue-100 rounded-xl">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">The Verdict</h3>
            <p className="text-blue-800">{app.verdict}</p>
          </section>
        )}

        {/* Rating Breakdown */}
        <section className="my-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Rating Breakdown</h2>
          <RatingBreakdownDisplay breakdown={app.rating} />
        </section>

        {/* Metadata */}
        <footer className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500">
          <p>
            Published: {new Date(app.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
            {app.updatedAt !== app.publishedAt && (
              <> • Updated: {new Date(app.updatedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</>
            )}
          </p>
        </footer>
      </article>

      {/* Related Apps */}
      {relatedApps.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Similar Apps You Might Like
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedApps.map((relatedApp) => (
                <AppCard key={relatedApp.id} app={relatedApp} variant="compact" />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}

function markdownToHtml(markdown: string): string {
  return markdown
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .split('\n\n')
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return '';
      if (trimmed.startsWith('<h')) return trimmed;
      return `<p>${trimmed}</p>`;
    })
    .join('\n');
}
