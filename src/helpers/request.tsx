import axios from "axios";
import { parseCookies } from "nookies";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API;

const ApiClient = () => {
  const instance = axios.create({
    baseURL: API_BASE_URL,
  });

  instance.interceptors.request.use(
    async (request) => {
      return request;
    },
    (error) => {
      throw error;
    }
  );

  return instance;
};

export default ApiClient();
