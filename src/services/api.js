import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com/",
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default api;
