import { apps, categories, tags } from '@/data/apps';
import { App, Category, Tag } from '@/lib/types';

/**
 * Retrieve a single app by its URL slug.
 */
export function getAppBySlug(slug: string): App | undefined {
  return apps.find((app) => app.slug === slug);
}

/**
 * Retrieve all apps, optionally filtered.
 */
export function getAllApps(options?: {
  featured?: boolean;
  editorsPick?: boolean;
  limit?: number;
}): App[] {
  let result = [...apps];

  if (options?.featured !== undefined) {
    result = result.filter((app) => app.featured === options.featured);
  }

  if (options?.editorsPick !== undefined) {
    result = result.filter((app) => app.editorsPick === options.editorsPick);
  }

  result.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  if (options?.limit) {
    result = result.slice(0, options.limit);
  }

  return result;
}

/**
 * Retrieve apps by category slug.
 */
export function getAppsByCategory(categorySlug: string): App[] {
  return apps
    .filter((app) => app.category === categorySlug)
    .sort((a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

/**
 * Retrieve apps by tag slug.
 */
export function getAppsByTag(tagSlug: string): App[] {
  return apps
    .filter((app) => app.tags.includes(tagSlug))
    .sort((a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

/**
 * Get all unique category slugs.
 */
export function getAllCategorySlugs(): string[] {
  return categories.map((cat) => cat.slug);
}

/**
 * Get all unique tag slugs.
 */
export function getAllTagSlugs(): string[] {
  return tags.map((tag) => tag.slug);
}

/**
 * Get category metadata by slug.
 */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}

/**
 * Get tag metadata by slug.
 */
export function getTagBySlug(slug: string): Tag | undefined {
  return tags.find((tag) => tag.slug === slug);
}

/**
 * Get all app slugs.
 */
export function getAllAppSlugs(): string[] {
  return apps.map((app) => app.slug);
}

/**
 * Get all categories with app counts.
 */
export function getCategoriesWithCounts(): (Category & { count: number })[] {
  return categories.map((cat) => ({
    ...cat,
    count: apps.filter((app) => app.category === cat.slug).length,
  }));
}

/**
 * Get related apps (same category, excluding current).
 */
export function getRelatedApps(currentSlug: string, limit = 3): App[] {
  const current = getAppBySlug(currentSlug);
  if (!current) return [];

  return apps
    .filter((app) => app.slug !== currentSlug && app.category === current.category)
    .slice(0, limit);
}
