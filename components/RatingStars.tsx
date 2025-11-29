interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  showValue?: boolean;
}

export function RatingStars({
  rating,
  maxRating = 5,
  size = 'md',
  showValue = false
}: RatingStarsProps) {
  const sizeClasses = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const starSize = sizeClasses[size];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: fullStars }).map((_, i) => (
        <svg
          key={`full-${i}`}
          className={`${starSize} text-amber-400`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}

      {hasHalfStar && (
        <svg className={`${starSize} text-amber-400`} viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half-gradient">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half-gradient)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      )}

      {Array.from({ length: emptyStars }).map((_, i) => (
        <svg
          key={`empty-${i}`}
          className={`${starSize} text-gray-300`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}

      {showValue && (
        <span className="ml-1 text-sm text-gray-600 font-medium">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}

interface RatingBreakdownDisplayProps {
  breakdown: {
    overall: number;
    usability?: number;
    performance?: number;
    features?: number;
    value?: number;
    design?: number;
  };
}

export function RatingBreakdownDisplay({ breakdown }: RatingBreakdownDisplayProps) {
  const categories = [
    { key: 'usability', label: 'Usability' },
    { key: 'performance', label: 'Performance' },
    { key: 'features', label: 'Features' },
    { key: 'value', label: 'Value' },
    { key: 'design', label: 'Design' },
  ] as const;

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
        <div>
          <div className="text-4xl font-bold text-gray-900">
            {breakdown.overall.toFixed(1)}
          </div>
          <div className="text-sm text-gray-500">Overall Score</div>
        </div>
        <RatingStars rating={breakdown.overall} size="lg" />
      </div>

      <div className="space-y-3">
        {categories.map(({ key, label }) => {
          const value = breakdown[key];
          if (value === undefined) return null;

          return (
            <div key={key} className="flex items-center gap-3">
              <span className="text-sm text-gray-600 w-24">{label}</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-300"
                  style={{ width: `${(value / 5) * 100}%` }}
                />
              </div>
              <span className="text-sm font-medium text-gray-700 w-8">
                {value.toFixed(1)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
