import { getAllVideos } from "../fetch"
import { useState, useEffect } from "react"
import Video from "./Video"



const VideosList = () => {
const [videoList, setVideoList] = useState([])

useEffect(()=> {
  getAllVideos().then((resp) => {
    console.log(resp.items);
    setVideoList(resp.items);
  })
},[])




  return (
    // <div>VideosList</div>
  
      <section className="section">
        {videoList.map((video) =>{
          return <Video video={video} key={video.etag} />
        })}
      </section>

      
  )
}
export default VideosList