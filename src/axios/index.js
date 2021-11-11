import axios from "axios";

export const requestInterceptor = () => {
  axios.interceptors.request.use((config) => {
    config.baseURL = "https://cors-anywhere.herokuapp.com/http://omdbapi.com/https://nextar.flip.id/";
    return config;
  });
};

export const responseInterceptor = () => {
  axios.interceptors.response.use(
    (response) => response,
    (e) => {
      if (axios.isCancel(e)) {
        return Promise.reject(e);
      }

      if (e.response && e.response.status) {
        if (e.response.status >= 400) {
          console.error("error", e.response.data.message);
          throw e;
        }
      }

      throw e;
    }
  );
};
