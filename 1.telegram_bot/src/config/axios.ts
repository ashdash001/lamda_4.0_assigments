import axios, { AxiosInstance } from "axios";
import { QUIZE_URI } from "../constants/getEnv";

const options = {
  baseURL: QUIZE_URI,
  withCredentials: true,
};

const API: AxiosInstance = axios.create(options);

export default API;

export const getData = async (endpoint: string) => {
  try {
    const response = await API.get(endpoint);
    if (!response.data) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    return response.data;
  } catch (error) {
    throw new Error(error as string);
  }
};