import "../../assets/styles/components/_post.scss"

const Post = () => {
  return (
    <div className="post-wrapper">

      <div className="post-container">
          <h1>RECENT NEWS</h1>
          <div className="thumbnail">&nbsp;</div>
          <p> SONIC BOOM ANNOUNCES NEW ALBUM ALMOST NOTHING IS NEARLY ENOUGH</p>
          <div className="cta-btn">
            <a href="#article">Read More</a>
          </div>
      </div>

      <div className="post-container">
          <div className="thumbnail">&nbsp;</div>
          <p> SONIC BOOM ANNOUNCES NEW ALBUM ALMOST NOTHING IS NEARLY ENOUGH</p>
          <div className="cta-btn">
            <a href="#article">Read More</a>
          </div>
      </div>
      
    </div>
      
  )
}

export default Post