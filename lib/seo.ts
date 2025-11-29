import { App } from '@/lib/types';

/**
 * Generate Schema.org SoftwareApplication structured data
 */
export function generateAppSchemaOrg(app: App): Record<string, unknown> {
  const operatingSystems = app.downloadLinks
    .map((link) => {
      switch (link.platform) {
        case 'ios': return 'iOS';
        case 'android': return 'Android';
        case 'macos': return 'macOS';
        case 'windows': return 'Windows';
        case 'linux': return 'Linux';
        case 'web': return 'Web';
        default: return null;
      }
    })
    .filter(Boolean)
    .join(', ');

  const schema: Record<string, unknown> = {
    '@type': 'SoftwareApplication',
    name: app.name,
    description: app.summary,
    applicationCategory: mapCategoryToSchema(app.category),
    operatingSystem: operatingSystems,
    author: {
      '@type': 'Organization',
      name: app.developer,
      url: app.developerUrl,
    },
    image: app.iconUrl,
    screenshot: app.screenshots.map((s) => s.src),
    datePublished: app.publishedAt,
    dateModified: app.updatedAt,
  };

  if (app.pricing === 'free') {
    schema.offers = {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    };
  } else if (app.priceDisplay) {
    const priceMatch = app.priceDisplay.match(/\$(\d+\.?\d*)/);
    if (priceMatch) {
      schema.offers = {
        '@type': 'Offer',
        price: priceMatch[1],
        priceCurrency: 'USD',
      };
    }
  }

  if (app.userRatingCount) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: app.rating.overall,
      ratingCount: app.userRatingCount,
      bestRating: 5,
      worstRating: 1,
    };
  }

  if (app.videoReview) {
    schema.video = {
      '@type': 'VideoObject',
      name: app.videoReview.title || `${app.name} Review`,
      description: `Video review of ${app.name}`,
      thumbnailUrl: app.videoReview.thumbnailUrl,
      contentUrl: app.videoReview.embedUrl,
      duration: app.videoReview.duration,
    };
  }

  schema.downloadUrl = app.downloadLinks[0]?.url;
  schema.installUrl = app.downloadLinks[0]?.url;

  return schema;
}

function mapCategoryToSchema(category: string): string {
  const mapping: Record<string, string> = {
    'productivity': 'BusinessApplication',
    'photography': 'MultimediaApplication',
    'ai-tools': 'DeveloperApplication',
    'social': 'SocialNetworkingApplication',
    'entertainment': 'EntertainmentApplication',
    'education': 'EducationalApplication',
    'finance': 'FinanceApplication',
    'health': 'HealthApplication',
    'games': 'GameApplication',
    'utilities': 'UtilitiesApplication',
  };

  return mapping[category] || 'Application';
}
