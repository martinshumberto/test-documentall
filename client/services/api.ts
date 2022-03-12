import axios from 'axios';

export const api = axios.create({
  // headers: {
  //   'Access-Control-Allow-Origin': '*',
  // },
  baseURL: 'http://localhost:4000' || '/api',
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
