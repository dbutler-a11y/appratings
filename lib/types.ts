/**
 * Platform-specific download link with optional affiliate tracking
 */
export interface DownloadLink {
  platform: 'ios' | 'android' | 'web' | 'macos' | 'windows' | 'linux';
  url: string;
  affiliateUrl?: string;
  label?: string;
}

/**
 * Video review configuration supporting multiple hosting providers
 */
export interface VideoReview {
  provider: 'youtube' | 'vimeo' | 'self_hosted' | 'other';
  embedUrl: string;
  videoId?: string;
  thumbnailUrl?: string;
  title?: string;
  duration?: string;
}

/**
 * Screenshot with metadata for gallery display
 */
export interface Screenshot {
  src: string;
  alt: string;
  caption?: string;
  platform?: 'ios' | 'android' | 'web' | 'desktop';
}

/**
 * Granular rating breakdown by category
 */
export interface RatingBreakdown {
  overall: number;
  usability?: number;
  performance?: number;
  features?: number;
  value?: number;
  design?: number;
}

/**
 * SEO metadata for the app page
 */
export interface SEOMetadata {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  keywords?: string[];
  noIndex?: boolean;
}

/**
 * Main App entity — the core content model
 */
export interface App {
  id: string;
  slug: string;
  name: string;
  developer: string;
  developerUrl?: string;

  category: string;
  tags: string[];

  pricing: 'free' | 'freemium' | 'paid' | 'subscription';
  priceDisplay?: string;

  iconUrl: string;
  heroImageUrl?: string;
  screenshots: Screenshot[];
  storeScreenshots?: {
    ios?: string[];
    android?: string[];
  };

  videoReview?: VideoReview;

  downloadLinks: DownloadLink[];

  summary: string;
  reviewContent: string;
  pros: string[];
  cons: string[];
  verdict?: string;

  rating: RatingBreakdown;
  userRatingCount?: number;

  seo: SEOMetadata;

  publishedAt: string;
  updatedAt: string;
  featured?: boolean;
  editorsPick?: boolean;
}

/**
 * Category with metadata for category pages
 */
export interface Category {
  slug: string;
  name: string;
  description: string;
  iconEmoji?: string;
}

/**
 * Tag for cross-cutting concerns
 */
export interface Tag {
  slug: string;
  name: string;
}
