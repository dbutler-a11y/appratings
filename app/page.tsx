import { Layout } from '@/components/Layout';
import { AppCard } from '@/components/AppCard';
import { getAllApps, getCategoriesWithCounts } from '@/lib/data';
import Link from 'next/link';

export default function HomePage() {
  const featuredApps = getAllApps({ featured: true, limit: 3 });
  const recentApps = getAllApps({ limit: 6 });
  const editorsPickApps = getAllApps({ editorsPick: true, limit: 4 });
  const categoriesWithCounts = getCategoriesWithCounts();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Next Favorite App
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              In-depth, honest reviews to help you discover the perfect tools
              for work and life. No sponsored content — just real opinions.
            </p>
            <div className="flex flex-wrap gap-3">
              {categoriesWithCounts.slice(0, 4).map((category) => (
                <Link
                  key={category.slug}
                  href={`/categories/${category.slug}`}
                  className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  {category.iconEmoji && <span>{category.iconEmoji}</span>}
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Apps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Reviews</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredApps.map((app) => (
            <AppCard key={app.id} app={app} variant="featured" />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Browse by Category
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoriesWithCounts.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {category.iconEmoji}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {category.count} {category.count === 1 ? 'app' : 'apps'}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Editor's Picks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="bg-amber-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
            Editor&apos;s Picks
          </span>
          <h2 className="text-2xl font-bold text-gray-900">Our Top Recommendations</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {editorsPickApps.map((app) => (
            <AppCard key={app.id} app={app} variant="default" />
          ))}
        </div>
      </section>

      {/* Recent Reviews */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Latest Reviews
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
