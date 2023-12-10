// list-edit-router.js
const express = require("express");
const router = express.Router();

// Mock de datos de tareas (puedes reemplazar esto con una base de datos real)
let tasks = [
  { id: 1, description: "Hacer la compra", completed: true },
  { id: 2, description: "Escribir código", completed: false },
  // Agrega más tareas según sea necesario
];

// Ruta para crear una nueva tarea
router.post("/", (req, res) => {
  const newTask = req.body; // Se asume que los datos de la nueva tarea están en el cuerpo de la solicitud
  tasks.push(newTask);
  res.json(newTask);
});

// Ruta para eliminar una tarea por ID
router.delete("/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter((task) => task.id !== taskId);
  res.json({ message: "Tarea eliminada exitosamente" });
});

// Ruta para actualizar una tarea por ID
router.put("/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedTask = req.body; // Se asume que los datos actualizados están en el cuerpo de la solicitud

  tasks = tasks.map((task) => (task.id === taskId ? updatedTask : task));

  res.json(updatedTask);
});

module.exports = router;
