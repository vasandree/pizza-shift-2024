import axios from 'axios';
import { BASE_URL } from '../consts';
import { getToken } from '../helpers';
import { BaseResponse } from '@api/types.ts';

const apiInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

apiInstance.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiInstance.interceptors.response.use(
  (response) => {
    if ((response.data as BaseResponse).success) {
      console.log('Response:', response.data);
    } else {
      console.error('Error response:', response.data.reason);
    }
    return response;
  },
  (error) => {
    console.error(error);
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
    }
    return Promise.reject(error);
  }
);

export { apiInstance };
