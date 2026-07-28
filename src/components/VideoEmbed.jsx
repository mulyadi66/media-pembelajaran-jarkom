import { Play } from 'lucide-react';

export default function VideoEmbed({ videoId, title }) {
  if (!videoId) return null;
  return (
    <div className="video-embed">
      <div className="video-label"><Play size={16} /> {title || 'Video Pembelajaran'}</div>
      <div className="video-wrapper">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
