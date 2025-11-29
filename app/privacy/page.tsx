import { Metadata } from 'next';
import { Layout } from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'AppRatings Privacy Policy - Learn how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-500">Last updated: November 2024</p>
        </header>

        <div className="prose-review space-y-8">
          <section>
            <h2>Introduction</h2>
            <p>
              At AppRatings, we respect your privacy and are committed to protecting your personal data.
              This privacy policy explains how we collect, use, and safeguard your information when you
              visit our website.
            </p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Usage Data:</strong> Information about how you interact with our website,
                including pages visited, time spent, and navigation patterns.
              </li>
              <li>
                <strong>Device Information:</strong> Browser type, operating system, and device
                identifiers for analytics purposes.
              </li>
              <li>
                <strong>Contact Information:</strong> If you contact us directly, we may collect
                your name and email address.
              </li>
            </ul>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Improve and optimize our website content and user experience</li>
              <li>Analyze traffic patterns and user behavior</li>
              <li>Respond to your inquiries and provide support</li>
              <li>Send newsletters (only if you opt in)</li>
            </ul>
          </section>

          <section>
            <h2>Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to collect usage data and improve
              your browsing experience. You can control cookie preferences through your browser settings.
            </p>
            <p>We may use the following types of cookies:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
          </section>

          <section>
            <h2>Third-Party Services</h2>
            <p>We may use third-party services that collect and process data:</p>
            <ul>
              <li><strong>Google Analytics:</strong> For website analytics and traffic analysis</li>
              <li><strong>YouTube/Vimeo:</strong> For embedded video content</li>
              <li><strong>Affiliate Networks:</strong> For tracking affiliate link clicks</li>
            </ul>
            <p>
              These services have their own privacy policies governing how they use your data.
            </p>
          </section>

          <section>
            <h2>Affiliate Links</h2>
            <p>
              Our website contains affiliate links to apps and services we review. When you click
              these links and make a purchase, we may earn a commission at no extra cost to you.
              This does not influence our reviews or ratings.
            </p>
          </section>

          <section>
            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your information. However, no
              method of transmission over the internet is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          <section>
            <h2>Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
              <li>Object to certain processing activities</li>
            </ul>
          </section>

          <section>
            <h2>Children&apos;s Privacy</h2>
            <p>
              Our website is not intended for children under 13 years of age. We do not knowingly
              collect personal information from children.
            </p>
          </section>

          <section>
            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes
              by posting the new policy on this page and updating the &ldquo;Last updated&rdquo; date.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have questions about this privacy policy or our data practices, please contact
              us at:
            </p>
            <p className="bg-gray-50 p-4 rounded-lg">
              <strong>Email:</strong> privacy@appratings.com<br />
              <strong>Website:</strong> appratings.com/contact
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
