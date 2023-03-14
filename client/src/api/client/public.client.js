import axios from "axios";
import queryString from "query-string";
const baseURL = "http://127.0.0.1:5000/api/v1/";

const publicClient = axios.create({
  baseURL,
  paramsSerializer: (params) => queryString.stringify(params),
});
publicClient.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
    },
  };
});

publicClient.interceptors.response.use(
  (response) => {
    if (response.data && response) return response.data;
    return response;
  },
  (err) => {
    throw err.data.response;
  }
);

export default publicClient;
