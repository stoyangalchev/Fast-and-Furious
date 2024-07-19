import * as fetchData from './fetchData';
const baseUrl = 'http://localhost:3005/comments';

export const getComments = async () => {
    return await fetchData.get(baseUrl);
}

export const createComment = async (data) => {
    return await fetchData.post(baseUrl, data);
}