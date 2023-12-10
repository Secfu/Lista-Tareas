// list-view-router.js
const express = require("express");
const router = express.Router();

// Mock de datos de tareas (puedes reemplazar esto con una base de datos real)
const tasks = [
  { id: 1, description: "Hacer la compra", completed: true },
  { id: 2, description: "Escribir código", completed: false },
  // Agrega más tareas según sea necesario
];

// Ruta para listar tareas completas
router.get("/completas", (req, res) => {
  const completedTasks = tasks.filter((task) => task.completed);
  res.json(completedTasks);
});

// Ruta para listar tareas incompletas
router.get("/incompletas", (req, res) => {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  res.json(incompleteTasks);
});

module.exports = router;
