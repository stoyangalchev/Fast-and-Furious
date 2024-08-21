const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

module.exports = (app) => {
  // CORS configuration
  app.use(
    cors({
      credentials: true,
      origin: "*", // Allow all origins for testing purposes
      allowedHeaders: ["Content-Type", "X-Authorization"],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    })
  );

  // Handle preflight OPTIONS requests
  app.options("*", cors());

  // Middleware to parse JSON bodies
  app.use(express.json());

  // Example route to test CORS
  app.get("/cars", (req, res) => {
    res.json({ message: "CORS is working!" });
  });
};