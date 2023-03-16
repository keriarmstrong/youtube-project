import Video from "./Video"

const VideosList = ({ category, videoList }) => {

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
export default VideosList;
