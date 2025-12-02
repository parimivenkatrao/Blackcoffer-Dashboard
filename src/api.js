import axios from "axios";

// Vite exposes env vars prefixed with VITE_ to the client
const baseURL = import.meta.env.VITE_API_BASE_URL || "https://backend-2-ntny.onrender.com/api" //|| "http://localhost:5000/api";

export const api = axios.create({
  baseURL
});
