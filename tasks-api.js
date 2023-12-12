// tasks-api.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(bodyParser.json());

// Datos de tareas (puedes reemplazar esto con una base de datos real)
let tasks = [
  { id: 1, description: "Hacer la compra", completed: false },
  { id: 2, description: "Escribir código", completed: true },
  // Agrega más tareas según sea necesario
];

// Endpoint para listar todas las tareas
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Endpoint para listar tareas completas
app.get("/tasks/completas", (req, res) => {
  const completedTasks = tasks.filter((task) => task.completed);
  res.json(completedTasks);
});

// Endpoint para listar tareas incompletas
app.get("/tasks/incompletas", (req, res) => {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  res.json(incompleteTasks);
});

// Endpoint para obtener una sola tarea por ID
app.get("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }

  res.json(task);
});

// Endpoint para crear una nueva tarea
app.post("/tasks", (req, res) => {
  const newTask = req.body;

  // Valida que la tarea tenga una descripción
  if (!newTask.description) {
    return res
      .status(400)
      .json({ error: "La descripción de la tarea es obligatoria" });
  }

  // Genera un nuevo ID para la tarea
  newTask.id = tasks.length + 1;
  tasks.push(newTask);

  res.status(201).json(newTask);
});

// Endpoint para actualizar una tarea por ID
app.put("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedTask = req.body;

  // Busca la tarea por ID
  const taskIndex = tasks.findIndex((t) => t.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }

  // Actualiza la tarea
  tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };

  res.json(tasks[taskIndex]);
});

// Endpoint para eliminar una tarea por ID
app.delete("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);

  // Filtra las tareas, excluyendo la tarea a eliminar
  tasks = tasks.filter((t) => t.id !== taskId);

  res.json({ message: "Tarea eliminada exitosamente" });
});

app.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
