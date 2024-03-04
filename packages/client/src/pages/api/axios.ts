import configs from "@/config";
import Axios from "axios";

const axiosInstance = Axios.create({
  timeout: 3 * 60 * 1000,
  baseURL: configs.API_DOMAIN,
  withCredentials: true,
});

// configing axios request
axiosInstance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// configging axios response
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const errorHandler = (url: string, err: any) => {};

// request methods
const sendGet = (url: string, params?: any) =>
  axiosInstance
    .get(url, { params })
    .then((res) => res.data)
    .catch((err) => errorHandler(url, err));

const sendPost = (url: string, params?: any) =>
  axiosInstance
    .post(url, { params })
    .then((res) => res.data)
    .catch((err) => errorHandler(url, err));

const sendPut = (url: string, params?: any) =>
  axiosInstance
    .put(url, params)
    .then((res) => res.data)
    .catch((err) => errorHandler(url, err));

const sendPatch = (url: string, params?: any) =>
  axiosInstance
    .patch(url, params)
    .then((res) => res.data)
    .catch((err) => errorHandler(url, err));

const sendDelete = (url: string, params?: any) =>
  axiosInstance
    .delete(url, { params })
    .then((res) => res.data)
    .catch((err) => errorHandler(url, err));

export { sendGet, sendPost, sendPatch, sendPut, sendDelete };
