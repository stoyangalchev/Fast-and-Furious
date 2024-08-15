
const mongoose = require('mongoose');
require("dotenv").config();
const  dbConnection  = process.env.DB_CONNECTION_STRING

module.exports = (app) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(dbConnection, {
          useUnifiedTopology: true,
          useNewUrlParser: true,
        });

        const db = mongoose.connection;

        db.on('error', err => {
            console.error('Database error: ', err.message);
            reject(err.message);
        });

        db.on('open', () => {
            console.log('Database connected');
            resolve();
        });
    });
};
