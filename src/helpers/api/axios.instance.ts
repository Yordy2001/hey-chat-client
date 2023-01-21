import axios, { AxiosInstance } from "axios";

export default class AxiosApi {
  api: AxiosInstance;
  constructor() {
    this.api = axios.create({
      withCredentials: true,
      baseURL: `${import.meta.env.VITE_SERVER_URL}`,
    });
  }
}
