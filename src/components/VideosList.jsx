import Video from "./Video"

const VideosList = ({ category, videoList }) => {

  return (
    <section className="section">
      <section className="category">
        <div><h3>{category} <span style={{color: "red"}}>Videos</span></h3></div>
      </section>
      <div className="thumbnails-center">
        {videoList.map((video) => {
          return <Video video={video} key={video.etag} />
        })}
      </div>
    </section>

  )
}
export default VideosList;
