import { useState, useEffect } from "react";
import VideosList from "../components/VideosList";
import { getData } from "../fetch";
import { useState, useEffect } from "react";
import { getAllVideos } from "../fetch";


import { getAllVideos } from "../fetch"


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
      <VideosList videoList={videoList}  />
    </section>
  )
}
export default Home;



