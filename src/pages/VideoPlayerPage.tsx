import { useParams, useNavigate } from 'react-router-dom';
import { VideoPlayer } from '../components';
import { ArrowLeft } from 'lucide-react';
import { useContent } from '../api/content';

const VideoPlayerPage = () => {
  const { video_slug } = useParams<{ video_slug: string }>();
  const navigate = useNavigate();

  const { data: content } = useContent({
    slug: video_slug,
  });

  const { content_url, nft_link = '' } = content || {};

  return (
    <div className="h-screen">
      <VideoPlayer url={content_url || ''} />
      <div
        className="absolute top-4 left-4 tooltip tooltip-right"
        data-tip="Atrás"
      >
        <ArrowLeft
          size={34}
          onClick={() => navigate(-1)}
          className="cursor-pointer"
        />
      </div>
      {nft_link && (
        <a href={nft_link} target="_blank">
          <button className="btn btn-outline absolute top-4 right-4 text-white bg-[#98A9B8]">
            Comprar NFT
          </button>
        </a>
      )}
    </div>
  );
};

export default VideoPlayerPage;
