import { getAllVideos } from "../fetch"
import { useState, useEffect } from "react"
import Video from "./Video"

const VideosList = () => {
  const [videoList, setVideoList] = useState([])

  useEffect(() => {
    getAllVideos().then((resp) => {
      console.log(resp.items);
      setVideoList(resp.items);
    })
  }, [])

  return (

    <section className="section">
      <div className="thumbnails-center">
        {videoList.map((video) => {
          return <Video video={video} key={video.etag} />
        })}
      </div>
    </section>

  )
}
export default VideosList