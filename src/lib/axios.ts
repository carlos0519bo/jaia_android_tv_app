import Axios, {
    AxiosResponse,
    InternalAxiosRequestConfig,
    AxiosError,
  } from 'axios';
  import { JAIA_TV_API } from '../config';
  
  interface ApiError {
    message: string;
    status?: number;
    code?: string;
  }
  
  function authRequestInterceptor(
    config: InternalAxiosRequestConfig
  ): InternalAxiosRequestConfig {  
    return config;
  }
  
  function onFulfilled(response: AxiosResponse) {
    return response.data;
  }
  
  function onRejected(error: AxiosError<ApiError>) {
    if (error.response) {
      console.error('Error de servidor:', error.response.data);
      const apiError = error.response.data as ApiError;
      return Promise.reject({
        message: apiError.message || 'Error del servidor',
        status: apiError.status || error.response.status,
        code: apiError.code,
      });
    }
    if (error.request) {
      console.error('No hay respuesta del servidor.');
      return Promise.reject({
        message: 'No hay respuesta del servidor.',
        status: -1,
      });
    }
    console.error('Error al realizar la solicitud:', error.message);
    return Promise.reject({
      message: 'Error al realizar la solicitud.',
      status: -1,
    });
  }
  
  function baseFactory(baseURL: string) {
    return Axios.create({
      baseURL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }
  
  const factory = (baseURL: string) => {
    const instance = baseFactory(baseURL);
    instance.interceptors.request.use(authRequestInterceptor);
    instance.interceptors.response.use(onFulfilled, onRejected);
    return instance;
  };
  
  export const jaiaApi = factory(JAIA_TV_API);
  