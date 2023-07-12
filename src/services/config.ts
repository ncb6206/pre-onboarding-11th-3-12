import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.github.com/repos',
  headers: { Authorization: `Bearer ${process.env.REACT_APP_GIT_TOKEN}` },
  timeout: 5000,
});

instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default instance;
