import "./index.css";
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals.js";
import { BrowserRouter } from "react-router-dom";
import { WheelLoadingSpinner } from "./shared/WheelLoadingSpinner/WheelLoadingSpinner.jsx";

const Main = () => {
  const [isLoading, setIsLoading] = useState(() => {
    const savedState = sessionStorage.getItem("isLoading");
    return savedState !== null ? JSON.parse(savedState) : true;
  });

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("isLoading", JSON.stringify(false));
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <React.StrictMode>
      <BrowserRouter>
        {isLoading ? <WheelLoadingSpinner /> : <App />}
      </BrowserRouter>
    </React.StrictMode>
  );
}

const rootElement = document.getElementById("root");
createRoot(rootElement).render(<Main />);

reportWebVitals();