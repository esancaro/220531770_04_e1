import Post from "./Post";
import data from "../api/data.json";

function PostList() {
  return (
    <div className="d-flex flex-wrap justify-content-center pt-4">
      {data.map((element, i) => (
        <Post
          key={i}
          image={element.image}
          date_post={element.date_post}
          likes={element.likes}
          author={element.author}
          description={element.description}
          comment_count={element.comment_count}
        />
      ))}
    </div>
  );
}

export default PostList;
