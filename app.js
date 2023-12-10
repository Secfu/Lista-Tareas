// app.js
const express = require("express");
const bodyParser = require("body-parser");
const listViewRouter = require("./list-view-router");
const listEditRouter = require("./list-edit-router");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Monta los routers en rutas específicas
app.use("/tasks/view", listViewRouter);
app.use("/tasks/edit", listEditRouter);

app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});
