import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Video from '../components/Video';
import { getData } from '../fetch';

const SearchResults = () => {
  const { search } = useParams();
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getData(search).then((resp) => {
      setVideos(resp.items)
    })
    .catch((error) => console.log(error))
  }, [search]);

  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  return (
    <section className="section">
    <div className="thumbnails-center">
      {videos.map((video) => (
        video.id.videoId && (
          <div onClick={() => handleVideoClick(video.id.videoId)} key={video.etag}>
            <Video video={video} />
          </div>
        )  
      ))}
    </div>
  </section>
  );
}

export default SearchResults;