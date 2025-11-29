import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Layout } from '@/components/Layout';
import { AppCard } from '@/components/AppCard';
import {
  getAppsByCategory,
  getAllCategorySlugs,
  getCategoryBySlug
} from '@/lib/data';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllCategorySlugs();
  return slugs.map((category) => ({ category }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return { title: 'Category Not Found' };
  }

  return {
    title: `${category.name} Apps - Reviews & Recommendations`,
    description: category.description,
    openGraph: {
      title: `${category.name} Apps | AppRatings`,
      description: category.description,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const apps = getAppsByCategory(categorySlug);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            {category.iconEmoji && (
              <span className="text-4xl">{category.iconEmoji}</span>
            )}
            <h1 className="text-3xl font-bold text-gray-900">
              {category.name} Apps
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl">
            {category.description}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {apps.length} {apps.length === 1 ? 'app' : 'apps'} reviewed
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
            <p className="text-gray-500">No apps in this category yet.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
