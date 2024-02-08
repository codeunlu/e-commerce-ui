import axios from "axios";

export const DEFAULT_API = `http://localhost:3000/`;

export const API = axios.create({
  baseURL: import.meta.env.API_URL || DEFAULT_API,
  timeout: 1000,
});
