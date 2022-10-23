import { useState } from "react";
import { login } from "../service/data-service";

function Login({ onLoginComplete }) {
  const [error, setError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    login(form.username.value, form.password.value)
      .then((data) => {
        if (data && data.token) {
          onLoginComplete(true);
          localStorage.setItem("token", data.token);
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        setError(error);
      });
  }

  return (
    <div className="container">
      {error === false ? null : (
        <div className="alert alert-danger mt-3" role="alert">
          Invalid Email or Password
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <label htmlFor="username">Email</label>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="username"
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="password"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-3">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
