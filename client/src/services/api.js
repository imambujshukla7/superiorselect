// api.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', //api url to be added  later
});

const api = {
  get: (url, config) => instance.get(url, config),
  post: (url, data, config) => instance.post(url, data, config),
  put: (url, data, config) => instance.put(url, data, config),
  delete: (url, config) => instance.delete(url, config),
};

export default api;
