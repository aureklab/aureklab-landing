"use client";

export default function YouTubeEmbed({ videoId }: { videoId: string }) {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-gray-800 aspect-video">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="WildDetector Tutorial"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
