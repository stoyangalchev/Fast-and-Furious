import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals.js";

import { BrowserRouter } from "react-router-dom";




// import WheelLoadingSpinner from "./utils/WheelLoadingSpinner/WheelLoadingSpinner.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"))
// const [isLoading, setIsLoading] = useState(true);

// useEffect(() => {
//   const timer = setTimeout(() => {
//     setIsLoading(false);
//   }, 4000);

//   return () => clearTimeout(timer);
// }, []);

root.render(
  <React.StrictMode>
    <BrowserRouter>

      <App />

    </BrowserRouter>
  </React.StrictMode>
);




reportWebVitals();