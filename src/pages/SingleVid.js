import YouTube from "react-youtube";
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

  const { title, channelTitle, publishedAt } = video.snippet;
  const publishedDate = new Date(publishedAt).toLocaleDateString();

  return (
    <section className="section">
      <div className="video-player-container">
        <YouTube videoId={id} />
        <div className="video-info-container">
          <h2 className="video-title">{title}</h2>
          <h4 className="channel-title">{channelTitle}</h4>
          <p className="published-date">{publishedDate}</p>
        </div>
      </div>
    </section>
  );
};

export default SingleVid;