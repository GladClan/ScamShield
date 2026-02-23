interface VideoEmbedProps {
  videoUrl: string;
  title?: string;
  caption?: string;
}

export function VideoEmbed({ videoUrl, title, caption }: VideoEmbedProps) {
  const getYouTubeEmbedUrl = (url: string): string => {
    const videoId = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([\w-]{11})/)?.[1];
    return videoId ? `https://www.youtube-nocookie.com/embed/${videoId}` : url;
  };

  if (!videoUrl) return null;

  return (
    <div className="my-6">
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src={getYouTubeEmbedUrl(videoUrl)}
          title={title || 'Educational video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {caption && <p className="text-sm text-gray-600 mt-2">{caption}</p>}
    </div>
  );
}
