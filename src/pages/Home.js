import SearchForm from "../components/SearchForm";
import VideosList from "../components/VideosList";
import { getData } from "../fetch";
import { useState, useEffect } from "react";
import { getAllVideos } from "../fetch";


const Home = () => {
  const [videoList, setVideoList] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [category, setCatergory] = useState('')

//Keep for now-------------------  
const handleSubmit = (event) =>{
// setSubmit(true)
event.preventDefault();
if(searchQuery){
        getData(searchQuery).then((resp)=>{
          setVideoList(resp.items);
          setCatergory(searchQuery);
      setSearchQuery('');
        })
      }if(searchQuery === '') 
      {
        getAllVideos().then((resp)=>{
          setCatergory('Trending');
        setVideoList(resp.items);
        
      }) 
    } 
}

useEffect(() => {
    
      getAllVideos().then((resp)=>{
        setVideoList(resp.items)
        setCatergory('Trending')
      })
  }, [])


  return (
    <main>
      <SearchForm handleSubmit={handleSubmit} setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
      <VideosList category={category} videoList={videoList}/>
    </main>
  )
}
export default Home
