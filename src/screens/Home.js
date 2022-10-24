import PostList from "../components/PostList";
import SearchBar from "../components/SearchBar";

function Home({ search, setSearch, posts, setPosts }) {
  return (
    <section className="container">
      <SearchBar value={search} onSearch={setSearch} />
      <PostList posts={posts} setPosts={setPosts} search={search} />
    </section>
  );
}

export default Home;
