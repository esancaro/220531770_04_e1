import "./App.css";
import NavBar from "./components/NavBar";
import PostList from "./components/PostList";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <section className="container">
        <SearchBar />
        <PostList />
      </section>
    </div>
  );
}

export default App;
