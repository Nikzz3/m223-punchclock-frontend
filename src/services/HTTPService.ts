import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8081/'
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
