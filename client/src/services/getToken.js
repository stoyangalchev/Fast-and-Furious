export const getAuthToken = () => {
  try {

    const auth = localStorage.getItem("auth");
    return JSON.parse(auth);

  }
  catch (error) {
console.error("Get Auth Token error", error);
    return error;

  }
};
