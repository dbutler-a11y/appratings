import { Metadata } from 'next';
import { Layout } from '@/components/Layout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about AppRatings - our mission to provide honest, in-depth app reviews to help you find the perfect tools for work and life.',
};

export default function AboutPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About AppRatings
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Honest, in-depth app reviews to help you find the perfect tools for work and life.
          </p>
        </header>

        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <div className="prose-review">
            <p>
              In a world overflowing with apps, finding the right one can feel overwhelming.
              That&apos;s why we created AppRatings — to cut through the noise and provide you with
              genuine, thoughtful reviews that actually help you make decisions.
            </p>
            <p>
              We believe in transparency, thoroughness, and putting the user first. Every app
              we review gets the same treatment: hands-on testing, honest assessment of pros
              and cons, and a clear verdict.
            </p>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Makes Us Different</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                🎯
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">No Sponsored Content</h3>
              <p className="text-gray-600 text-sm">
                Our reviews are never paid for. We may use affiliate links, but they never
                influence our ratings or recommendations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                🔍
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Hands-On Testing</h3>
              <p className="text-gray-600 text-sm">
                Every app is tested extensively before we write a single word. We use them
                in real workflows to understand their true strengths and weaknesses.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                ⚖️
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Balanced Reviews</h3>
              <p className="text-gray-600 text-sm">
                No app is perfect. We highlight both the good and the bad, so you can make
                an informed decision based on what matters to you.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                🔄
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Regularly Updated</h3>
              <p className="text-gray-600 text-sm">
                Apps evolve, and so do our reviews. We revisit and update our content to
                ensure it stays accurate and relevant.
              </p>
            </div>
          </div>
        </section>

        {/* How We Rate */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Rate Apps</h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-700 mb-4">
              Our rating system evaluates apps across five key dimensions:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="font-semibold text-gray-900 w-28">Usability</span>
                <span className="text-gray-600">How intuitive and easy to use is the app?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-gray-900 w-28">Performance</span>
                <span className="text-gray-600">Speed, stability, and resource usage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-gray-900 w-28">Features</span>
                <span className="text-gray-600">Depth and breadth of functionality</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-gray-900 w-28">Value</span>
                <span className="text-gray-600">Is it worth the price (or is the free tier sufficient)?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-gray-900 w-28">Design</span>
                <span className="text-gray-600">Visual appeal and attention to detail</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Have Questions or Suggestions?</h2>
          <p className="text-blue-100 mb-6 max-w-lg mx-auto">
            We&apos;d love to hear from you. Whether you have an app you&apos;d like us to review
            or feedback on our content, reach out anytime.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </Layout>
  );
}
