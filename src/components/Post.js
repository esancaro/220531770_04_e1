import { useState } from "react";
import "./Post.css";
// https://stackoverflow.com/questions/42395034/how-to-display-binary-data-as-image-in-react
function Post({ image, createdAt, autor, text, comments, initial_likes }) {
  const [likes, setLikes] = useState(initial_likes);
  return (
    <div>
      <div className="card post-card">
        <img
          className="card-img-top"
          src={`data:image/jpeg;base64,${image}`}
          alt={autor}
        />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <span className="text-secondary">{createdAt}min ago</span>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                setLikes(likes + 1);
              }}
            >
              <i className="bi bi-heart-fill"></i>&nbsp;
              {likes > 1000 ? `${(likes / 1000).toFixed(2)}k` : likes}
            </button>
          </div>
          <h5 className="card-text">@{autor}</h5>
          <p className="card-text">{text}</p>

          <span className="text-secondary">
            <i className="bi bi-chat-right"></i>&nbsp;Comments ({comments})
          </span>
        </div>
      </div>
    </div>
  );
}

export default Post;
