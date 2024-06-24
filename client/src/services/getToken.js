export const getAuthToken = () => {
  try {

    const auth = localStorage.getItem("auth");
    return JSON.parse(auth);

  }
  catch (error) {

    return error;

  }
};
