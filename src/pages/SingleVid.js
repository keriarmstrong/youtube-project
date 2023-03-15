import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getVideoDetails } from "../fetch";


const SingleVid = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    getVideoDetails(id).then((resp) => {
      setVideo(resp.items[0]);  
    });
  }, [id]);

  if (!video) {
    return <div className="loading-container">Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id}`;

  return (
    <section className="section">
    <div className="video-player-container">
      <iframe
        className="video-player"
        title={video.snippet.title}
        src={videoSrc}
        allowFullScreen
      />
      <div className="video-info-container">
        <h2 className="video-title">{video.snippet.title}</h2>
        <h4 className="channel-title">{video.snippet.channelTitle}</h4>
        <p className="published-date">
          {video.snippet.publishedAt.slice(5, 7)}-
          {video.snippet.publishedAt.slice(8, 10)}-
          {video.snippet.publishedAt.slice(0, 4)}
        </p>
      </div>
    </div>
    </section>
  );
};

export default SingleVid;