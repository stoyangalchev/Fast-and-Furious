const express = require("express");

const expressConfig = require("./config/express");
const databaseConfig = require("./config/db");
const routesConfig = require("./config/routes");
const middlewaresConfig = require("./config/middlewares.js");
require("dotenv").config();

start();

async function start() {
  const app = express();
  const port = process.env.PORT || 3005;
  expressConfig(app);
  await databaseConfig(app);
  await middlewaresConfig(app);
  routesConfig(app);

  app.get("/", (req, res) => {
    res.send(`
        <h1 style=" text-align: center; font-family: Arial, sans-serif; margin:200px; font-size:80px">
            Server is READY to use!
        </h1>
    `);
  });

  app.listen(port, () =>
    console.log(`Application started at http://localhost:3005...`)
  );
}
