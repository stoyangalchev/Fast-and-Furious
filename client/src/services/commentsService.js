import * as fetchData from "./fetchData";
import { url } from "./utils";

// const baseUrl = 'http://localhost:3005';

const baseUrl = url;

export const getComments = async () => {
  return await fetchData.get(`${baseUrl}/comments`);
};

export const createComment = async (data) => {
  return await fetchData.post(`${baseUrl}/comments`, data);
};
