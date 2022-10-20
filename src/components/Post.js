import "./Post.css";
// https://stackoverflow.com/questions/42395034/how-to-display-binary-data-as-image-in-react
function Post({ image, date_post, likes, author, description, comment_count }) {
  return (
    <div>
      <div className="card post-card">
        <img
          className="card-img-top"
          src={`data:image/jpeg;base64,${image}`}
          alt={author}
        />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <span className="text-secondary">{date_post}min ago</span>
            <button type="button" className="btn btn-danger">
              <i className="bi bi-heart-fill"></i>&nbsp;
              {likes}k
            </button>
          </div>
          <h5 className="card-text">@{author}</h5>
          <p className="card-text">{description}</p>

          <span className="text-secondary">
            <i className="bi bi-chat-right"></i>&nbsp;Comments ({comment_count})
          </span>
        </div>
      </div>
    </div>
  );
}

export default Post;
