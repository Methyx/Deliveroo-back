const express = require("express");
const cors = require("cors");
require("dotenv").config();

const data = require("./data.json");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  return res.json(data);
});

app.all("*", (req, res) => {
  return res.statut(404).json({ message: "route not found" });
});

app.listen(process.env.PORT, () => {
  console.log("server operationnal Phil !");
});
