// list-edit-router.js
const express = require("express");
const router = express.Router();

// Middleware para manejar errores en las solicitudes POST y PUT
const handleErrors = (req, res, next) => {
  if ((req.method === "POST" || req.method === "PUT") && !req.body) {
    // Solicitud POST o PUT con el cuerpo vacío
    return res
      .status(400)
      .json({ error: "El cuerpo de la solicitud no puede estar vacío." });
  }

  // Verifica la validez de los datos según tus requisitos específicos
  // Este es solo un ejemplo simple y debería ajustarse según tus necesidades

  if (
    req.method === "POST" &&
    (!req.body.description || typeof req.body.completed !== "boolean")
  ) {
    // Solicitud POST con información no válida o atributos faltantes
    return res.status(400).json({
      error: "La información proporcionada no es válida para crear una tarea.",
    });
  }

  if (
    req.method === "PUT" &&
    (!req.body.description || typeof req.body.completed !== "boolean")
  ) {
    // Solicitud PUT con información no válida o atributos faltantes
    return res.status(400).json({
      error:
        "La información proporcionada no es válida para actualizar una tarea.",
    });
  }

  next(); // Continuar al siguiente middleware
};

// Ruta para crear una nueva tarea
router.post("/", handleErrors, (req, res) => {
  const newTask = req.body;
  // Resto del código
  res.json(newTask);
});

// Ruta para eliminar una tarea por ID
router.delete("/:id", (req, res) => {
  // Resto del código
  res.json({ message: "Tarea eliminada exitosamente" });
});

// Ruta para actualizar una tarea por ID
router.put("/:id", handleErrors, (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedTask = req.body;
  // Resto del código
  res.json(updatedTask);
});

module.exports = router;
