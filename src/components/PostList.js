import Post from "./Post";

function PostList({posts}) {
  return (
    <div className="d-flex flex-wrap justify-content-center pt-4">
      {posts.length === 0
        ? "Loading..."
        : posts
            // .filter((d) => d.text.includes())
            .map((element, i) => (
              <Post
                key={i}
                image={element.image}
                createdAt={element.createdAt}
                autor={element.autor}
                text={element.text}
                comments={element.comments}
                initial_likes={element.likes}
              />
            ))}
    </div>
  );
}

export default PostList;
