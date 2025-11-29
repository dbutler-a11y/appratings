import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://appratings.com'),
  title: {
    default: 'AppRatings - In-Depth App Reviews & Recommendations',
    template: '%s | AppRatings',
  },
  description: 'Discover the best apps with our comprehensive, honest reviews. No sponsored content — just real opinions on productivity, photography, AI tools, and more.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'AppRatings',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
