import "./App.css";
import NavBar from "./components/NavBar";
import profileData from "./data/profile_data.json";
import Profile from "./components/Profile";
import PostList from "./components/PostList";
import SearchBar from "./components/SearchBar";
import { getData } from "./service/data-service";
import { useState, useEffect } from "react";

const postInitialState = [];

function App() {
  const [section, setSection] = useState("index");
  const [posts, setPosts] = useState(postInitialState);
  const [search, setSearch] = useState('');

  function onLogoClick() {
    setSection("index");
  }

  function onProfileClick() {
    setSection("profile");
  }

  function onSearchChanged(value) {
    setSearch(value);
  }

  useEffect(() => {
    getData().then((data) => {
      setPosts(data.filter((d) => d.text.includes(search)));
    });
  }, [search]);

  switch (section) {
    case "profile":
      return (
        <div>
          <header>
            <NavBar onLogoClick={onLogoClick} onProfileClick={onProfileClick} />
          </header>
          <section className="container">
            <Profile
              avatar={profileData.avatar}
              bio={profileData.bio}
              username={profileData.username}
            />
          </section>
        </div>
      );
    default:
      return (
        <div>
          <header>
            <NavBar onLogoClick={onLogoClick} onProfileClick={onProfileClick} />
          </header>
          <section className="container">
            <SearchBar value={search} onSearch={onSearchChanged}/>
            <PostList posts={posts} />
          </section>
        </div>
      );
  }
}

export default App;
