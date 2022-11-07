const express = require("express");
const cors = require("cors");

const data = require("./data.json");

const app = expres();
app.use(cors());

app.get("/", (req, res) => {
  return res.json(data);
});

app.all("*", (req, res) => {
  return res.statut(404).json({ message: "route not found" });
});

app.listen(4000, () => {
  console.log("server operationnal !");
});
