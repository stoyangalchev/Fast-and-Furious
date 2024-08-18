import * as fetchData from "./fetchData";
import { url } from "./utils";

// const baseUrl = "http://localhost:3005";

const baseUrl = url;

export const saveSubscription = async (data) => {
  return await fetchData.post(`${baseUrl}/subscribe`, data);
};

export const checkSubscription = async (userId) => {
  const url = `${baseUrl}/subscribe/check/${userId}`;
  return await fetchData.get(url);
};
