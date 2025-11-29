import Link from 'next/link';
import { ReactNode } from 'react';
import { getCategoriesWithCounts } from '@/lib/data';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const categoriesWithCounts = getCategoriesWithCounts();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AR</span>
              </div>
              <span className="font-semibold text-xl text-gray-900">
                AppRatings
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Home
              </Link>
              {categoriesWithCounts.slice(0, 4).map((category) => (
                <Link
                  key={category.slug}
                  href={`/categories/${category.slug}`}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </nav>

            <button
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AR</span>
                </div>
                <span className="font-semibold text-xl text-white">
                  AppRatings
                </span>
              </div>
              <p className="text-sm max-w-md">
                In-depth, honest app reviews to help you find the perfect tools
                for work and life. No sponsored content, just real opinions.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-sm">
                {categoriesWithCounts.map((category) => (
                  <li key={category.slug}>
                    <Link
                      href={`/categories/${category.slug}`}
                      className="hover:text-white transition-colors"
                    >
                      {category.name} ({category.count})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} AppRatings. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
