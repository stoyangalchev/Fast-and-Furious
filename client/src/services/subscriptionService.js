import * as fetchData from "./fetchData";

const baseUrl = "http://localhost:3005/subscribe";

export const saveSubscription = async (data) => {
  return await fetchData.post(baseUrl, data);
};



