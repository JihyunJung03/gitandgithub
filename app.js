const http = require("http");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");


const app = express();

app.use(cors());
app.use(express.json());


app.get("/", async (req, res) => {
  try {
    return res.status(200).json({ message: "Welcome to Team5's server!" });
  } catch (err) {
    console.log(err);
  }
});

const server = http.createServer(app);
require("dotenv").config();
const portNumber = process.env.PORT || 8000;

const start = async () => {
  try {
    await server.listen(portNumber);
    console.log(`Server is listening on ${portNumber}`);
  } catch (err) {
    console.error(err);
  }
};

start();