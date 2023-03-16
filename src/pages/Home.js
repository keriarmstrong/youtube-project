import { useState, useEffect } from "react";
import VideosList from "../components/VideosList";
import { getAllVideos } from "../fetch";

const Home = () => {
  const [videoList, setVideoList] = useState([])
  
  useEffect(() => {
    getAllVideos().then((resp) => {
      console.log(resp);
      setVideoList(resp.items);
    })
  }, [])

  return (
    <section className='section'>
      <h1 style={{textAlign:"center", color:"red"}}>Videos</h1>
      <VideosList videoList={videoList}  />
    </section>
  )
}
export default Home;



