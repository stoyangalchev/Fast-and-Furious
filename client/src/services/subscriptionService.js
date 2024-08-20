import * as fetchData from "./fetchData";


const baseUrl = import.meta.env.VITE_PROD_BASE_URL;;
// const baseUrl = "http://localhost:3005";



export const saveSubscription = async (data) => {
  return await fetchData.post(`${baseUrl}/subscribe`, data);
};

export const checkSubscription = async (userId) => {
  const url = `${baseUrl}/subscribe/check/${userId}`;
  return await fetchData.get(url);
};
