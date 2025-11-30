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
      {/* Hero Section - Premium SaaS Style */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          {/* Top badge */}
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              AI-Powered App Reviews
            </span>
          </div>

          {/* Main headline */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Find Your Next
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Favorite App
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              In-depth, honest reviews powered by real insights. Discover the perfect tools for work and life — no sponsored content, just real opinions.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Link
              href="#featured"
              className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-6 py-3 rounded-full hover:bg-slate-100 transition-all hover:scale-105 shadow-lg shadow-white/10"
            >
              Explore Reviews
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/categories/ai-tools"
              className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition-all border border-white/10 backdrop-blur-sm"
            >
              <span className="text-lg">🤖</span>
              AI Tools
            </Link>
          </div>

          {/* Video showcase - Hero Video */}
          <div className="relative max-w-6xl mx-auto">
            {/* Glow effect behind video */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl" />

            {/* Video container */}
            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
              {/* Browser-style header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-slate-700/50 rounded-md px-3 py-1 text-xs text-slate-400 text-center max-w-xs mx-auto">
                    appratings.com
                  </div>
                </div>
              </div>

              {/* Video embed */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://app.heygen.com/embedded-player/3112d9377e43433a85161b2aa317f306"
                  title="AppRatings Introduction"
                  allow="encrypted-media; fullscreen"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>

            {/* Floating badges around video */}
            <div className="hidden lg:block absolute -left-16 top-1/4 bg-slate-800/90 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">
                  10+
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Apps Reviewed</div>
                  <div className="text-slate-400 text-xs">And growing</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute -right-16 top-1/3 bg-slate-800/90 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Honest Reviews</div>
                  <div className="text-slate-400 text-xs">No sponsors</div>
                </div>
              </div>
            </div>
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {categoriesWithCounts.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-slate-300 hover:text-white transition-all"
              >
                {category.iconEmoji && <span>{category.iconEmoji}</span>}
                {category.name}
                <span className="text-xs text-slate-500">({category.count})</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Apps */}
      <section id="featured" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-8">
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
