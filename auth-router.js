// auth-router.js
const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const router = express.Router();

// Usuarios predefinidos (podrías obtener estos datos de una base de datos)
const users = [
  { id: 1, username: "usuario1", password: "contraseña1" },
  { id: 2, username: "usuario2", password: "contraseña2" },
];

// Ruta para autenticación
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Verifica las credenciales
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ error: "Credenciales incorrectas" });
  }

  // Crea un token JWT
  const token = jwt.sign(
    { userId: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

// Middleware para validar el token
const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ error: "Acceso no autorizado. Token no proporcionado." });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res
        .status(403)
        .json({ error: "Acceso prohibido. Token inválido." });
    }

    req.user = user;
    next();
  });
};

// Ruta protegida
router.get("/protected", authenticateToken, (req, res) => {
  res.json({
    message: "Ruta protegida. Bienvenido, " + req.user.username + "!",
  });
});

module.exports = router;
