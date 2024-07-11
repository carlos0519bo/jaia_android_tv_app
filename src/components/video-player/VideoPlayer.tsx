import ReactPlayer from 'react-player';

type VideoPlayerProps = {
  url: string;
};

export const VideoPlayer = ({ url }: VideoPlayerProps) => {
  return (
    <div className="w-full h-full bg-red">
      <ReactPlayer
        url={url}
        playing
        controls
        width="100%"
        height="100%"
        wrapper={({ children }) => (
          <div style={{ width: '100%', height: '100%' }}>{children}</div>
        )}
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload',
            },
          },
        }}
      />
    </div>
  );
};
