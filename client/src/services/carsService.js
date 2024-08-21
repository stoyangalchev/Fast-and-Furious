import * as fetchData from "./fetchData";


const baseUrl = import.meta.env.VITE_PROD_BASE_URL;;

// const baseUrl = "http://localhost:3005";

export const getcars = async () => {

  return await fetchData.get(`${baseUrl}/cars`);
};
export const savecar = async (data) => {
  return await fetchData.post(`${baseUrl}/cars`, data);
};

export const getcarDetails = async (carId) => {
  const response = await fetchData.get(`${baseUrl}/cars/${carId}`);
  return response.car;
};

export const editcar = async (car) => {
  return await fetchData.put(`${baseUrl}/cars/${car._id}`, car);
};

export const deletecar = async (carId) => {
  return await fetchData.remove(`${baseUrl}/cars/${carId}`);
};

export const likecar = async (carId, data) => {
  return await fetchData.patch(`${baseUrl}/cars/${carId}`, data);
};

export const getMycars = async (ownerId) => {
  const allcars = await fetchData.get(`${baseUrl}/cars`);
  const mycars = allcars.filter((c) => c.owner === ownerId);
  return mycars;
};
export const getMyLikedcars = async (userId) => {
  const allcars = await fetchData.get(`${baseUrl}/cars`);
  const likedcars = allcars.filter((c) => c.likedBy.includes(userId));
  return likedcars;
};
