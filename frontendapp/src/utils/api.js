import axios from 'axios';

const baseURL = import.meta.env.VITE_REACT_APP_BASE_API_URL || 'http://localhost:5000/';

const api = axios.create({
  baseURL: baseURL
});

export default api;