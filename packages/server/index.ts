// import dependencies
import express from "express";
import bodyParser from "body-parser";
import mongoose, { ConnectOptions } from "mongoose";
import cors from "cors";

require("dotenv").config({
  path: "../../.env",
});

const app = express();
const routes = require("./routes/index.routes");

// Allow CORS
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb://" + process.env.NODE_DB_URL + "/admin" || "",
    {} as ConnectOptions
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("Error connecting to database");
  });

app.get("/test", (request: any, response: any) => {
  response.json({ message: "Lerna NodeJs React Application" });
});

app.use("/api", cors(), routes);

const server: any = app.listen(8080, () =>
  console.log("Express server listening on port " + server.address().port)
);
