import { createContext, useState } from "react";

export const FormValidatorContext = createContext();

export const FormValidatorProvider = ({ children }) => {
  const [errors, setErrors] = useState({});

  const carValidator = (e) => {
    const value = e.target.value;
    const target = e.target.name;
    const formErrors = {};
    const urlRegex = new RegExp(/^https?:\/\//);

    if (target === "name" && value.length < 2) {
      formErrors.name =
        "The name of the car must be at least 2 characters long";
    }
    if (target === "category" && value.length < 1) {
      formErrors.category = "Category is required";
    }
    if (target === "date" && value.length < 1) {
      formErrors.date = "Date is required";
    }
    if (target === "imageUrl" && urlRegex.test(value) === false) {
      formErrors.imageUrl = "Please enter a valid url";
    }
    if (target === "mode" && value.length < 1) {
      formErrors.mode = "Mode is required";
    }
    if (target === "description" && value.length < 10) {
      formErrors.description =
        "The description must be at least 10 characters long";
    }
    setErrors(formErrors);
  };

  const UserValidator = (e) => {
    const value = e.target.value;
    const target = e.target.name;
    const formErrors = {};
    const emailRegex = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);


    if (target === "firstname" && value.length === 0) {
      formErrors.firstname = "First Name is required";
    }
    if (target === "lastname" && value.length === 0) {
      formErrors.lastname = "Last Name is required";
    }
    if (target === "username" && value.length === 0) {
      formErrors.username = "Username is required";
    }
    if (target === "email" && emailRegex.test(value) === false) {
      formErrors.email = "Please enter a valid email address";
    }
    if (target === "password" && value.length === 0) {
      formErrors.password = "Password is required";
    }
    setErrors(formErrors);
  };

  const clearErrors = () => {
    setErrors({});
  };

  const contextValues = {
    carValidator,
    UserValidator,
    clearErrors,
    errors,
  };
  return (
    <>
      <FormValidatorContext.Provider value={contextValues}>
        {children}
      </FormValidatorContext.Provider>
    </>
  );
};
