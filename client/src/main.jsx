import "./main.css";
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals.js";
import { BrowserRouter } from "react-router-dom";
import { WheelLoadingSpinner } from "./utils/WheelLoadingSpinner/WheelLoadingSpinner.jsx";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
