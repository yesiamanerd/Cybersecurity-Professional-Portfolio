import express from "express";
import bp from "body-parser";
import logger from './winston-config.js';
import winston from 'winston';
// const logger = require('./winston-config');
import expressWinston from 'express-winston';
import { dirname } from "path";
import { fileURLToPath } from "url";
import * as path from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT || 3000;
var bandName = "";

app.use(bp.urlencoded({ extended: true }));
app.use(bandNameGenerator);

// Access the environment variables
const elasticHost = process.env.ELASTICSEARCH_HOST;
const logstashHost = process.env.LOGSTASH_HOST;
const logstashPort = process.env.LOGSTASH_PORT || 5000;  // Default to 5000 if not specified.


// log requests
app.use(expressWinston.logger({
  transports: logger.transports,
  format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
  ),
}));

// log errors
app.use(expressWinston.errorLogger({
  transports: logger.transports,

  format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json(),
  ),
}));


function bandNameGenerator(req, res, next) {
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  logger.info(req.body); // Log request body with winston.
  console.log(req.body);
  res.send(`<h1>Your band name is:</h1><h2>${bandName}</h2>`);
});

app.listen(port, () => {
  logger.info(`Listening on port ${port}`); // Log server start with winston.
    console.log(`Listening on port ${port}`);
});
