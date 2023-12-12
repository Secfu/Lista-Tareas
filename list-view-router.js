// list-view-router.js
const express = require("express");
const router = express.Router();

// Middleware para gestionar parámetros incorrectos
const handleInvalidParams = (req, res, next) => {
  // Verifica los parámetros según tus requisitos específicos
  // Este es solo un ejemplo simple y debería ajustarse según tus necesidades

  if (
    !req.query.filter ||
    (req.query.filter !== "completas" && req.query.filter !== "incompletas")
  ) {
    return res
      .status(400)
      .json({ error: "Parámetros de consulta incorrectos." });
  }

  next(); // Continuar al siguiente middleware
};

// Ruta para listar tareas completas
router.get("/completas", handleInvalidParams, (req, res) => {
  // Resto del código
  res.json(completedTasks);
});

// Ruta para listar tareas incompletas
router.get("/incompletas", handleInvalidParams, (req, res) => {
  // Resto del código
  res.json(incompleteTasks);
});

module.exports = router;
