const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const db = require("./queries");
const app = express();
const { Client } = require("pg");
const cors = require("cors");
app.post("/leave-form", db.newRecord);

app.use(cors());

const corsOptions = {
  origin: function (origin, callback) {
    // db.loadOrigins is an example call to load
    // a list of origins from a backing database
    db.loadOrigins(function (error, origins) {
      callback(error, origins);
    });
  },
};

// Parse JSON information
app.use(bodyParser.json());

// postgreSQL info
const client = new Client({
  user: "webdev",
  password: "Cl@yt0n42!",
  database: "webdev",
  port: 5433,
  host: "172.16.15.205",
});
client.connect();
