// app.js
const express = require("express");
const bodyParser = require("body-parser"); // Importa el middleware bodyParser para manejar el cuerpo de las solicitudes
const listEditRouter = require("./list-edit-router");

const app = express();
const port = 8000;

app.use(bodyParser.json()); // Usa bodyParser para analizar el cuerpo de las solicitudes en formato JSON

// Monta el router en una ruta específica
app.use("/tasks", listEditRouter);

app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});
