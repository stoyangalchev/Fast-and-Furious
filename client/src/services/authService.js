import * as fetchData from "./fetchData";

const baseUrl = "http://localhost:3005/auth";

export const register = async (data) => {
  return await fetchData.post(`${baseUrl}/register`, data);
};

export const login = async (data) => {
  return await fetchData.post(`${baseUrl}/login`, data);
};

export const logout = async () => {
  return await fetchData.get(`${baseUrl}/logout`);
};
