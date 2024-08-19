import { getAuthToken } from "./getToken";

export const fetchData = async (method, url, data) => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        "content-type": "application/json",
        "X-Authorization": getAuthToken(),
      },
      body: JSON.stringify(data),
    });

    const contentType = response.headers.get("content-type");
    let result;

    if (contentType && contentType.includes("application/json")) {
      result = await response.json();
    } else {
      result = await response.text(); // Handle non-JSON responses
    }

    if (response.ok) {
      return result;
    } else {
        console.log(result)
      throw new Error(result);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
