import Axios, { AxiosError, type AxiosRequestConfig } from "axios";

export const AXIOS_INSTANCE = Axios.create();

const baseURL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337/api";

const customInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
  const source = Axios.CancelToken.source();
  const promise = AXIOS_INSTANCE({
    baseURL,
    ...config,
    cancelToken: source.token,
  }).then(({ data }) => data);

  //@ts-expect-error @ts-ignore
  promise.cancel = () => {
    source.cancel("Query was cancelled by React Query");
  };

  return promise;
};

AXIOS_INSTANCE.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`;

  return config;
});

export type ErrorType<Error> = AxiosError<Error>;

export default customInstance;
