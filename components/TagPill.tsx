import Link from 'next/link';
import { getTagBySlug } from '@/lib/data';

interface TagPillProps {
  tag: string;
  size?: 'xs' | 'sm' | 'md';
  clickable?: boolean;
}

export function TagPill({ tag, size = 'sm', clickable = true }: TagPillProps) {
  const tagData = getTagBySlug(tag);
  const displayName = tagData?.name || tag;

  const sizeClasses = {
    xs: 'text-xs px-2 py-0.5',
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm px-3 py-1.5',
  };

  const baseClasses = `inline-block rounded-full font-medium bg-gray-100 text-gray-700 ${sizeClasses[size]}`;

  if (clickable) {
    return (
      <Link
        href={`/tags/${tag}`}
        className={`${baseClasses} hover:bg-gray-200 transition-colors`}
      >
        {displayName}
      </Link>
    );
  }

  return <span className={baseClasses}>{displayName}</span>;
}
