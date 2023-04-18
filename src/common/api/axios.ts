import { default as ax } from 'axios';

const axiosInstance = ax.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  // config.headers.Authorization = process.env.REACT_APP_API_KEY;

  return config;
});

export default axiosInstance;
