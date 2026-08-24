import axios from 'axios';

/**
 * DHAYAN SE DEKHO BHAI:
 * import.meta.env.VITE_API_URL wo link hai jo humne Vercel me dala tha.
 * Agar wo nahi milega (matlab jab tum computer par chalaoge), tabhi localhost chalega.
 */
export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

export const api = axios.create({
  baseURL: API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true // Isse login aur cookies sahi se kaam karengi
});
