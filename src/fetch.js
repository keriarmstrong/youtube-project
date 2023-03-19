const URL = `https://youtube.googleapis.com/youtube/v3/`
// search?part=snippet&maxResults=10&q=${e.target.value}&key=${KEY}`
const KEY = process.env.REACT_APP_API_KEY


// (`${URL}search?part=snippet&maxResults=10&q=${search}&order=${order}&key=${KEY}`)
export function getData(search) {
    return fetch(`${URL}search?part=snippet&maxResults=10&q=${search}&key=${KEY}`)
        .then(resp => resp.json())
}


export function getAllVideos() {
    return fetch(`${URL}videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&key=${KEY}`)
        .then((resp) => resp.json())
        }


// get one video
export function getVideoDetails(id) {
    return fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${KEY}`).then(res => res.json())
}

