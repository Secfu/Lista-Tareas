// // app.js
// const express = require("express");
// const bodyParser = require("body-parser");
// const listViewRouter = require("./list-view-router");
// const listEditRouter = require("./list-edit-router");

// const app = express();
// const port = 3000;

// // Middleware a nivel de aplicación para gestionar métodos HTTP no válidos
// const handleInvalidMethod = (req, res, next) => {
//   if (!["GET", "POST", "PUT", "DELETE"].includes(req.method)) {
//     return res.status(400).json({ error: "Método HTTP no válido." });
//   }
//   next();
// };

// app.use(bodyParser.json());
// app.use(handleInvalidMethod);

// // Monta los routers en rutas específicas
// app.use("/tasks/view", listViewRouter);
// app.use("/tasks/edit", listEditRouter);

// app.listen(port, () => {
//   console.log(`La aplicación está escuchando en http://localhost:${port}`);
// });

// app.js
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const authRouter = require("./auth-router");

dotenv.config();
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Monta el router de autenticación en la ruta /auth
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});
