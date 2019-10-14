import axios, { AxiosInstance } from 'axios';
import { environment } from '../../../environments/environment';

export class AxiosRequest {

  axios: AxiosInstance;
  axiosNoAuth: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: environment.sight.back
    });

    this.axiosNoAuth = axios.create({
      baseURL: environment.sight.back
    });

    this.axios.interceptors.request.use(
      config => {
        return this.preFetchConfig(config);
      },
      err => {
        return Promise.reject(err.response);
      }
    );
  }

  private preFetchConfig(config) {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    };

    config.headers = headers;

    return config;
  }

}
