import { VideoReview } from '@/lib/types';

interface VideoReviewSectionProps {
  video: VideoReview;
  appName: string;
}

export function VideoReviewSection({ video, appName }: VideoReviewSectionProps) {
  const renderVideo = () => {
    switch (video.provider) {
      case 'youtube':
        return (
          <iframe
            src={video.embedUrl}
            title={video.title || `${appName} Video Review`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            loading="lazy"
          />
        );

      case 'vimeo':
        return (
          <iframe
            src={video.embedUrl}
            title={video.title || `${appName} Video Review`}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            loading="lazy"
          />
        );

      case 'self_hosted':
        return (
          <video
            src={video.embedUrl}
            poster={video.thumbnailUrl}
            controls
            preload="metadata"
            className="absolute inset-0 w-full h-full object-contain bg-black"
          >
            <track kind="captions" />
            Your browser does not support the video tag.
          </video>
        );

      case 'other':
        return (
          <iframe
            src={video.embedUrl}
            title={video.title || `${appName} Video Review`}
            allow="encrypted-media; fullscreen"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            loading="lazy"
          />
        );

      default:
        return (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
            Video unavailable
          </div>
        );
    }
  };

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Video Review
      </h2>

      <div className="relative w-full rounded-xl overflow-hidden shadow-lg bg-black" style={{ paddingBottom: '56.25%' }}>
        {renderVideo()}
      </div>

      {video.title && (
        <p className="mt-3 text-sm text-gray-600 text-center">
          {video.title}
          {video.duration && (
            <span className="text-gray-400 ml-2">
              ({formatDuration(video.duration)})
            </span>
          )}
        </p>
      )}
    </section>
  );
}

function formatDuration(isoDuration: string): string {
  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return isoDuration;

  const hours = parseInt(match[1] || '0', 10);
  const minutes = parseInt(match[2] || '0', 10);
  const seconds = parseInt(match[3] || '0', 10);

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
