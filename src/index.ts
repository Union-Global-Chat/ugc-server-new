import express from "express";
import config from "./config.json";

const app = express();

app.get("/", (req, res) => {
  res.send("init");
});

app.listen(config.server.port, () => {
  console.log("Server is running");
});