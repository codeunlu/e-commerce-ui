import axios from "axios";

export const DEFAULT_API = `${import.meta.env.VITE_API_URL}`;
export const ITEMS_PER_PAGE: number = 12;

export const API = axios.create({
  baseURL: DEFAULT_API,
  timeout: 1000,
});
