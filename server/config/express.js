const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

module.exports = (app) => {
  app.use(
    cors({
      credentials: true,
      origin: "*", // Allow all origins for testing purposes
      allowedHeaders: ["Content-Type", "X-Authorization"],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    })
  );

  // Handle preflight OPTIONS requests
  app.options("*", cors());

  app.use(express.json());
};
