import axios from "axios";
// import tokenStore from "../stores/TokenStore";
// import userStore from "../stores/UserStore";
export const instance = axios.create({
  baseURL: "http://localhost:3030"
});

instance.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
    if (error.response) {
      if (error.response.status === 401) {
        // if (userStore.User) {
        //   userStore.logout(false);
        // }
      }
    }
    return Promise.reject(error);
  }
);

instance.interceptors.request.use(
  function(config) {
    config.headers["Content-Type"] = "application/json";
    // const token = tokenStore.token;
    // if (token) {
    //   config.headers["Access-Token"] = token;
    // }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
