import axios, { AxiosInstance } from "axios";

export default class AxiosApi {
  api: AxiosInstance;
  constructor() {
    this.api = axios.create({
      withCredentials: true,
      baseURL: `${process.env.VITE_SERVER_URL}`,
    });
  }
}
