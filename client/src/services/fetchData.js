import { getAuthToken } from './getToken'

export const fetchData = async (method, url, data) => {
  try {
    const options = {
      method,
      headers: {
        "content-type": "application/json",
        "X-Authorization": getAuthToken(),
      },
    };

    if (data && (method === "POST" || method === "PUT")) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);

    // Check if the response is JSON
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
      throw new Error(result);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};


export const get = fetchData.bind(null, 'GET');
export const put = fetchData.bind(null, 'PUT');
export const post = fetchData.bind(null, 'POST');
export const remove = fetchData.bind(null, 'DELETE');
export const patch = fetchData.bind(null, 'PATCH');