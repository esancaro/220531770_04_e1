import "./App.css";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Home from "./screens/Home";
import { useState } from "react";
import { Route, Routes } from "react-router";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Logout from "./components/Logout";

const AuthLayout = () => {
  // https://stackoverflow.com/questions/72535191/not-able-to-navigate-when-token-is-null-in-react-js
  const location = useLocation();

  const token = localStorage.getItem("token");

  return token ? (
    <Outlet />
  ) : (
    <Navigate
      to="/login"
      replace
      state={{ from: location }} // pass current location to redirect back
    />
  );
};

const postInitialState = [];

function App() {
  const [posts, setPosts] = useState(postInitialState);
  const [search, setSearch] = useState("");

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <section className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route element={<AuthLayout />}>
            <Route
              path="/"
              element={
                <Home
                  search={search}
                  setSearch={setSearch}
                  posts={posts}
                  setPosts={setPosts}
                />
              }
            />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
