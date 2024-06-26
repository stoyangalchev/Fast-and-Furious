const express = require("express");
const cors = require("cors");

module.exports = (app) => {
  app.use(
    cors({
      credentials: true,
      origin: function (origin, callback) {
        const allowedOrigins = [
          "http://localhost:3000",
          "http://localhost:5173",
        ];
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
