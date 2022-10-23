import { useState } from "react";
import { like } from "../service/data-service";
import "./Post.css";
function Post({ image, createdAt, autor, text, comments, initial_likes, id }) {
  const [likes, setLikes] = useState(initial_likes);
  return (
    <div>
      <div className="card post-card">
        <img
          className="card-img-top"
          src={image}
          alt={autor}
        />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            {/* TODO: Implement years, months, days, hours and minutes friendly date diff */}
            <span className="text-secondary">{((Date.now() - new Date(createdAt))/60000).toFixed(0)}min ago</span>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                setLikes(likes + 1);
                like(id)
                .then((resp) => {console.log(resp)});
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
