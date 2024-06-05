/*const cors = require('cors');
const whitelist = ['http://localhost:3000'];

module.exports = (app, express) => {
  app.use(express.static('public'));
  app.use(cors({ origin: whitelist, credentials: true }));
  app.use(express.json());

  app.use((error, req, res, next) => {
    if (res.headerSent) {
      return next(error);
    }
    res.status(error.code || 500).json({ message: error.message || 'An unknown error occurred!' });
  });
};*/
const express = require('express');
const cors = require('cors');

module.exports = (app) => {
    app.use(
        cors({
            credentials: true,
            origin: 'http://localhost:3000',
            allowedHeaders: ['Content-Type', 'X-Authorization']
        })
    );
    app.use(express.json());
};