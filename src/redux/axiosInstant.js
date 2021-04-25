import axios from 'axios';
import queryString from 'query-string';
require('dotenv').config();

const axiosClient = axios.create({
  baseURL: 'https://movie0706.cybersoft.edu.vn',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  const tokenData = JSON.parse(localStorage.getItem('tokenData'));
  if (tokenData !== null) {
    config.headers.Authorization = `Bearer ${tokenData.token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  ({ data, status }) => {
    return { data, status };
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
