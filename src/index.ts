import express from "express";
import config from "./config.json";
import bodyParser from "body-parser";
import { Sequelize } from "sequelize";
import { Logger } from "tslog";

import api from "./api";

const logger = new Logger();

const app = express();
app.use("/api", api);

const sequelize = new Sequelize(config.database_uri);
app.set("sequelize", sequelize);

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("init");
});

app.listen(config.server.port, async () => {
  logger.info("Server is running");
  await sequelize.authenticate();
  await sequelize.sync();
});