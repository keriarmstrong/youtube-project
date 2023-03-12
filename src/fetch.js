const URL = `https://youtube.googleapis.com/youtube/v3/`
// search?part=snippet&maxResults=10&q=${e.target.value}&key=${KEY}`
const KEY = process.env.REACT_APP_API_KEY



export function getData(searchQuery){
return fetch(`${URL}search?part=snippet&maxResults=10&q=${searchQuery}&key=${KEY}`)
.then(resp => resp.json())
}


export function getAllVideos(){
    return fetch(`${URL}videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&key=${KEY}`)
    .then((resp) => resp.json())
    
}