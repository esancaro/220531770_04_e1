import axios from "axios";
const url = "https://three-points.herokuapp.com";

//https://stackoverflow.com/questions/47216452/how-to-handle-401-authentication-error-in-axios-and-react
// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response.status === 401) {
//       localStorage.removeItem("token");
//     }
//     return error;
//   }
// );

export function getData() {
  return axios
    .get(`${url}/api/posts`, {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((response) => response.data);
}

export function getProfile(userId) {
  return axios
    .get(`${url}/api/users/${userId}`, {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((response) => response.data);
}

export function like(postId) {
  return axios
    .post(`${url}/api/posts/${postId}/like`, {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((response) => response.data);
}

export function login(username, password) {
  return axios
    .post(`${url}/api/login`, { username, password })
    .then((response) => response.data);
}
