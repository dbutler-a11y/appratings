import Image from 'next/image';
import Link from 'next/link';
import { App } from '@/lib/types';
import { RatingStars } from './RatingStars';
import { TagPill } from './TagPill';

interface AppCardProps {
  app: App;
  variant?: 'default' | 'compact' | 'featured';
}

export function AppCard({ app, variant = 'default' }: AppCardProps) {
  const pricingColors: Record<App['pricing'], string> = {
    free: 'bg-green-100 text-green-800',
    freemium: 'bg-blue-100 text-blue-800',
    paid: 'bg-amber-100 text-amber-800',
    subscription: 'bg-purple-100 text-purple-800',
  };

  if (variant === 'compact') {
    return (
      <Link
        href={`/apps/${app.slug}`}
        className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
      >
        <div className="relative w-12 h-12 flex-shrink-0">
          <Image
            src={app.iconUrl}
            alt={`${app.name} icon`}
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-900 truncate">{app.name}</h3>
          <p className="text-sm text-gray-500 truncate">{app.developer}</p>
        </div>
        <RatingStars rating={app.rating.overall} size="sm" />
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <Link
        href={`/apps/${app.slug}`}
        className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300"
      >
        {app.heroImageUrl && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={app.heroImageUrl}
              alt={`${app.name} hero`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            {app.editorsPick && (
              <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Editor&apos;s Pick
              </div>
            )}
          </div>
        )}

        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src={app.iconUrl}
                alt={`${app.name} icon`}
                fill
                className="rounded-2xl object-cover shadow-md"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                {app.name}
              </h3>
              <p className="text-sm text-gray-500">{app.developer}</p>
              <div className="flex items-center gap-2 mt-1">
                <RatingStars rating={app.rating.overall} size="sm" />
                <span className="text-sm text-gray-500">
                  ({app.rating.overall.toFixed(1)})
                </span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-gray-600 text-sm line-clamp-2">
            {app.summary}
          </p>

          <div className="flex items-center justify-between mt-4">
            <div className="flex flex-wrap gap-2">
              {app.tags.slice(0, 2).map((tag) => (
                <TagPill key={tag} tag={tag} size="sm" clickable={false} />
              ))}
            </div>
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${pricingColors[app.pricing]}`}>
              {app.priceDisplay || app.pricing}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/apps/${app.slug}`}
      className="group block bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 overflow-hidden"
    >
      <div className="p-5">
        <div className="flex items-start gap-4">
          <div className="relative w-14 h-14 flex-shrink-0">
            <Image
              src={app.iconUrl}
              alt={`${app.name} icon`}
              fill
              className="rounded-xl object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                {app.name}
              </h3>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0 ml-2 ${pricingColors[app.pricing]}`}>
                {app.pricing}
              </span>
            </div>
            <p className="text-sm text-gray-500 truncate">{app.developer}</p>
            <div className="flex items-center gap-2 mt-1">
              <RatingStars rating={app.rating.overall} size="sm" />
              <span className="text-xs text-gray-500">
                {app.rating.overall.toFixed(1)}
              </span>
            </div>
          </div>
        </div>

        <p className="mt-3 text-sm text-gray-600 line-clamp-2">
          {app.summary}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-3">
          {app.tags.slice(0, 3).map((tag) => (
            <TagPill key={tag} tag={tag} size="xs" clickable={false} />
          ))}
        </div>
      </div>
    </Link>
  );
}
