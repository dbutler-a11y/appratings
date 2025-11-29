import Link from 'next/link';
import { getCategoryBySlug } from '@/lib/data';

interface CategoryPillProps {
  category: string;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
}

export function CategoryPill({ category, size = 'md', showIcon = false }: CategoryPillProps) {
  const categoryData = getCategoryBySlug(category);
  const displayName = categoryData?.name || category;
  const emoji = categoryData?.iconEmoji;

  const sizeClasses = {
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2',
  };

  return (
    <Link
      href={`/categories/${category}`}
      className={`inline-flex items-center gap-1.5 rounded-full font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors ${sizeClasses[size]}`}
    >
      {showIcon && emoji && <span>{emoji}</span>}
      {displayName}
    </Link>
  );
}
