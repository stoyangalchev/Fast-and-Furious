//const mongoose = require('mongoose');

//const options = { useNewUrlParser: true, useUnifiedTopology: true };

//module.exports = (dbConnection) => mongoose.connect(dbConnection, options);

const mongoose = require('mongoose');
const DB_CONNECTION_STRING  = "mongodb://127.0.0.1/fast-furious"

module.exports = (app) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_CONNECTION_STRING, {
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
