// lib/axios.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, 
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Optional: Add interceptors
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.error("Axios Error:", error?.response || error.message);
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
