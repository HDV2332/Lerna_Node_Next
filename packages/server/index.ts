// import dependencies
import express from "express";
import bodyParser from "body-parser";

require("dotenv").config({
  path: "../../.env",
});

const app = express();

app.get("/test", (request: any, response: any) => {
  response.json({ message: "Lerna NodeJs React Application" });
});

const server: any = app.listen(8080, () =>
  console.log("Express server listening on port " + server.address().port)
);
