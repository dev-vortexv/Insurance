import express from "express";

import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connectdb";

import cors from "cors";

//Setup Express App
const app = express();

// Set up CORS
app.use(cors());

//Set Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  const allowedOrigins = ["*"];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

//Load Routes

import mainRoutes from "./routes/mainRoutes";

app.use("/api", mainRoutes);

// Get port from environment and store in Express.
const port = process.env.PORT || "4000";
app.listen(port, () => {
  console.log(`Server listining at http://localhost:${port}`);
});

//Database Connection
const DATABASE_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;
connectDB(DATABASE_URL, DB_NAME);
