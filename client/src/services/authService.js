import * as fetchData from "./fetchData";
import { baseUrl } from "./utils";

// const baseUrl = "http://localhost:3005";
// const baseUrl = url;

export const register = async (data) => {
  return await fetchData.post(`${baseUrl}/auth/register`, data);
};

export const login = async (data) => {
  return await fetchData.post(`${baseUrl}/auth/login`, data);
};

export const logout = async () => {
  return await fetchData.get(`${baseUrl}/auth/logout`);
};
