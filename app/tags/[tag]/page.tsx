import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Layout } from '@/components/Layout';
import { AppCard } from '@/components/AppCard';
import {
  getAppsByTag,
  getAllTagSlugs,
  getTagBySlug
} from '@/lib/data';

interface TagPageProps {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllTagSlugs();
  return slugs.map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag: tagSlug } = await params;
  const tag = getTagBySlug(tagSlug);

  if (!tag) {
    return { title: 'Tag Not Found' };
  }

  return {
    title: `${tag.name} Apps - Reviews & Recommendations`,
    description: `Discover the best ${tag.name.toLowerCase()} apps with our in-depth reviews and ratings.`,
    openGraph: {
      title: `${tag.name} Apps | AppRatings`,
      description: `Discover the best ${tag.name.toLowerCase()} apps with our in-depth reviews and ratings.`,
    },
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag: tagSlug } = await params;
  const tag = getTagBySlug(tagSlug);

  if (!tag) {
    notFound();
  }

  const apps = getAppsByTag(tagSlug);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 mb-4">
            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-gray-700">Tag</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {tag.name}
          </h1>
          <p className="text-gray-600">
            Apps tagged with &ldquo;{tag.name}&rdquo;
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {apps.length} {apps.length === 1 ? 'app' : 'apps'} found
          </p>
        </header>

        {/* App Grid */}
        {apps.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No apps with this tag yet.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
