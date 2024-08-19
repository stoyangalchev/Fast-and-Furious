const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

module.exports = (app) => {
  const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:5173",
    process.env.VITE_PROD_BASE_URL,
  ];

  app.use(
    cors({
      credentials: true,
      origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          callback(new Error("CORS policy violation"));
        }
      },
      allowedHeaders: ["Content-Type", "X-Authorization"],
    })
  );
  app.use(express.json());
};