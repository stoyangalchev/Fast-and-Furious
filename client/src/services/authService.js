import * as fetchData from "./fetchData";


const baseUrl = import.meta.env.VITE_PROD_BASE_URL;;
//  const baseUrl = "http://localhost:3005";


export const register = async (data) => {
  return await fetchData.post(`${baseUrl}/auth/register`, data);
};

export const login = async (data) => {
  return await fetchData.post(`${baseUrl}/auth/login`, data);
};

export const logout = async () => {
  return await fetchData.get(`${baseUrl}/auth/logout`);
};
