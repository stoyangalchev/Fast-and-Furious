import * as fetchData from "./fetchData";


const baseUrl = import.meta.env.VITE_PROD_BASE_URL;;
// const baseUrl = 'http://localhost:3005';


export const getComments = async () => {
  return await fetchData.get(`${baseUrl}/comments`);
};

export const createComment = async (data) => {
  return await fetchData.post(`${baseUrl}/comments`, data);
};
