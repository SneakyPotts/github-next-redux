import axios from "axios";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const TOKEN = process.env.NEXT_PUBLIC_TOKEN;

const api = axios.create()

api.interceptors.request.use(config => {
  config.headers.Authorization = `token ${TOKEN}`
  config.headers.accept = 'application/vnd.github+json'
  return config;
})

export default api;