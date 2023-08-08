const express = require("express");
const bp = require("body-parser");
const logger = require('./winston-config.js');
// const winston = require('winston');
// const expressWinston = require('express-winston');
// const path = require("path");
// const { dirname } = require("path");
// const { fileURLToPath } = require("url");
const { MongoClient } = require('mongodb');
const { setInterval } = require('timers');

const app = express();
const port = process.env.PORT || 3000;

app.use(bp.urlencoded({ extended: true }));
app.use(bandNameGenerator);

// MongoDB connection
const mongoUrl = process.env.MONGODB_URI || 'mongodb://external-mongodb:27017/bandNameDB';
const client = new MongoClient(mongoUrl);
client.connect().then(() => {
  console.log("Connected to MongoDB");
});
const db = client.db('bandNameDB');
const collection = db.collection('bandNames');

// Heartbeat log
setInterval(() => {
  logger.info('Heartbeat: Application is alive');
}, 60000); // Log every minute

function bandNameGenerator(req, res, next) {
  if (req.body["street"] && req.body["pet"]) {
    const bandName = req.body["street"] + req.body["pet"];
    req.bandName = bandName;
    // Store in MongoDB
    collection.insertOne({ street: req.body["street"], pet: req.body["pet"], bandName });
  }
  next();
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/latest", async (req, res) => {
  try {
    // Find the last 10 band names, sorted by the _id field (which is automatically indexed and contains a timestamp)
    const latestBandNames = await collection.find().sort({ _id: -1 }).limit(10).toArray();

    // Send the band names as a JSON response
    res.json(latestBandNames);
  } catch (error) {
    logger.error(error); // Log error with winston.
    res.status(500).send("An error occurred while retrieving the latest band names.");
  }
});

app.post("/submit", (req, res) => {
  logger.info(`Band name generated: ${req.bandName}`); // Log band name with winston.
  res.send(`<h1>Your band name is:</h1><h2>${req.bandName}</h2>`);
});

app.listen(port, () => {
  logger.info(`Listening on port ${port}`); // Log server start with winston.
});
