import { Metadata } from 'next';
import { Layout } from '@/components/Layout';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the AppRatings team. Suggest apps to review, report issues, or share feedback.',
};

export default function ContactPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a question, suggestion, or feedback? We&apos;d love to hear from you.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Send Us a Message</h2>
            <ContactForm />
            <p className="mt-4 text-sm text-gray-500 text-center">
              We typically respond within 1-2 business days.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Other Ways to Reach Us</h2>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">hello@appratings.com</p>
                </div>
              </div>

              {/* Twitter */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-sky-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">X (Twitter)</h3>
                  <p className="text-gray-600">@appratings</p>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Response Time</h3>
                  <p className="text-gray-600">Usually within 24-48 hours</p>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-2">Looking for Quick Answers?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Check out our About page to learn more about how we review apps and our rating system.
              </p>
              <a
                href="/about"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Learn more about us
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
