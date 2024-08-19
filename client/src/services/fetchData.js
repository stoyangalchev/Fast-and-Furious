import { getAuthToken } from "./getToken";

export const fetchData = async (method, url, data) => {
  const response = await fetch(url, {
    method,
    headers: {
      "content-type": "application/json",
      "X-Authorization": getAuthToken(),
    },
    body: method !== "GET" ? JSON.stringify(data) : undefined,
  });

  const contentType = response.headers.get("content-type");
  let result;

  if (contentType && contentType.includes("application/json")) {
    result = await response.json();
  } else {
    result = await response.text();
  }

  if (response.ok) {
    return result;
  } else {
    throw result;
  }
};

export const get = fetchData.bind(null, "GET");
export const put = fetchData.bind(null, "PUT");
export const post = fetchData.bind(null, "POST");
export const remove = fetchData.bind(null, "DELETE");
export const patch = fetchData.bind(null, "PATCH");
