import axios from 'axios';

const $api = axios.create({
  baseURL: 'https://ala-too-project.herokuapp.com/api',
});

$api.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('access_token');
      if (token) {
        return {
          ...config,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      }
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await $api.post(
          '/auth/token/refresh/',
          localStorage.getItem('refresh_token')
        );
        localStorage.setItem('access_token', response.data.access_token);
        return $api.request(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    throw error;
  }
);

export default $api;
