import { getAuthToken } from "./getToken";

export const fetchData = async (method, url, data) => {
  const response = await fetch(url, {
    method,
    headers: {
      "content-type": "application/json",
      "X-Authorization": getAuthToken(),
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (response.ok) {
    return result;
  } else {
    throw result;
  }
};
