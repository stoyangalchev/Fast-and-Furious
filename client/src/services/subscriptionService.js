import * as fetchData from "./fetchData";
import { url } from "./utils";

const baseUrl = "http://localhost:3005/subscribe";

// const baseUrl = `${url}/subscribe`;

export const saveSubscription = async (data) => {
  return await fetchData.post(baseUrl, data);
};

export const checkSubscription = async (userId) => {
  const url = `${baseUrl}/check/${userId}`;
  return await fetchData.get(url);
};
