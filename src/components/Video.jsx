import { Link } from "react-router-dom"


const Video = ({ video }) => {
  // console.log(video)
  return (
    <article className="videos">
      <Link to={`/video/${video.id}`}>
        <div className="img/container">
          <img src={video.snippet.thumbnails.medium.url} alt="video" />
        </div>
        <h3 className="videos-footer">
          {video.snippet.title}
        </h3>
      </Link>

    </article >

  )
}
export default Video