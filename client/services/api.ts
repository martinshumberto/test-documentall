import axios from 'axios';

export const api = axios.create({
  baseURL:
    import.meta.env.VITE_APP_API_URL ||
    'https://truephone-server.herokuapp.com/',
});

api.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json';
    config.headers['Accept'] = 'application/json';

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

api.interceptors.response.use(undefined, (error: any) => {
  if (error.message === 'Network Error' && !error.response) {
    console.log('Network: ', error.response);
  }
  if (error && error.response && [401, 403].includes(error.response.status)) {
    console.log('Unathorized: ', error.response);
  }

  return Promise.reject(error);
});
