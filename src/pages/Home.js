import { useState, useEffect } from "react";
import VideosList from "../components/VideosList";
import { getAllVideos } from "../fetch";


const Home = ({error, setError}) => {
  const [videoList, setVideoList] = useState([])
  
  useEffect(() => {
    getAllVideos().then((resp) => {
  
      setVideoList(resp.items)
      console.log(videoList);
    })
    .catch((error)=>{
      setError(true)
    })
  },[setError])

  return (
    <section className='section'>
      <h1 style={{textAlign:"center", color:"red"}}>Videos</h1>
      <VideosList videoList={videoList}  />
    </section>
  )
}
export default Home;



