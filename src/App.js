import "./App.css";
import NavBar from "./components/NavBar";
import { getData, getProfile } from "./service/data-service";
import Profile from "./components/Profile";
import PostList from "./components/PostList";
import SearchBar from "./components/SearchBar";
import { useState, useEffect } from "react";
import Login from "./components/Login";

const postInitialState = [];

function App() {
  const [section, setSection] = useState("index");
  const [posts, setPosts] = useState(postInitialState);
  const [search, setSearch] = useState("");
  const [profileData, setProfileData] = useState({});
  const [loginOk, setLoginOk] = useState(localStorage.token ? true : false);

  function onLogoClick() {
    setSection("index");
  }

  function onProfileClick() {
    setSection("profile");
  }

  useEffect(() => {
    getData().then((data) => {
      setPosts(data?.filter((d) => d.text.includes(search)));
    });
  }, [search]);

  useEffect(() => {
    getProfile("6136944fcd79ba24707e2f82").then((data) => {
      setProfileData(data);
    });
  }, []);

  if (!loginOk) {
    return <Login onLoginComplete={setLoginOk} />;
  } else {
    switch (section) {
      case "profile":
        return (
          <div>
            <header>
              <NavBar
                onLogoClick={onLogoClick}
                onProfileClick={onProfileClick}
              />
            </header>
            <section className="container">
              <Profile
                avatar={profileData?.avatar}
                bio={profileData?.bio}
                username={profileData?.username}
              />
            </section>
          </div>
        );
      default:
        return (
          <div>
            <header>
              <NavBar
                onLogoClick={onLogoClick}
                onProfileClick={onProfileClick}
              />
            </header>
            <section className="container">
              <SearchBar value={search} onSearch={setSearch} />
              <PostList posts={posts} />
            </section>
          </div>
        );
    }
  }
}

export default App;
