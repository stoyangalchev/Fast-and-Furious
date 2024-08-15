import * as fetchData from "./fetchData";
import { url } from "./utils";

// const commentsUrl = 'http://localhost:3005/comments';

const baseUrl = `${url}/comments`;

export const getComments = async () => {
  return await fetchData.get(baseUrl);
};

export const createComment = async (data) => {
  return await fetchData.post(baseUrl, data);
};
