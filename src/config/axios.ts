import axios from "axios";

// Secure instance with token and credentials
export const authAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// Interceptor to attach token from localStorage
authAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Normal public instance (no token, no credentials)
export const publicAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
