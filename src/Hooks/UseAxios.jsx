import axios from "axios";
import UseAuth from "./UseAuth";

const UseAxios = () => {
  const { user } = UseAuth();

  const axiosSecure = axios.create({
    baseURL: "https://my-server-eleventh.onrender.com",
  });

  axiosSecure.interceptors.request.use(
    (config) => {
      if (user?.accessToken) {
        config.headers.Authorization = `Bearer ${user.accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default UseAxios;
