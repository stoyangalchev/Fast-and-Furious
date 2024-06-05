
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals.js";

import { BrowserRouter } from "react-router-dom";
// import { useState, useEffect } from "react";

// import { WheelLoadingSpinner } from "./utils/WheelLoadingSpinner";

const root = ReactDOM.createRoot(document.getElementById("root"))
// const [isLoading, setIsLoading] = useState(true);

// useEffecleact(() => {
//   const timer = setTimeout(() => {
//     setIsLoading(false);
//   }, 4000);

//   return () => clearTimeout(timer);
// }, []);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* {isLoading ? <WheelLoadingSpinner /> : <App />} */}
    </BrowserRouter>
  </React.StrictMode>
);




reportWebVitals();
