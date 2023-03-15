import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Video from '../components/Video';

import { getData } from '../fetch';

const SearchResults = () => {
     const { search } = useParams() 
    const [videos, setVideos] = useState([]);

useEffect(() => {
    getData(search).then((resp) => {
        setVideos(resp.items)
    } )
}, [search])


  return (
    <section className="section">
      <div className="thumbnails-center">
        {videos.map(video => <Video video={video} key={video.etag} />)}
      </div>
    </section>
  )
}
export default SearchResults