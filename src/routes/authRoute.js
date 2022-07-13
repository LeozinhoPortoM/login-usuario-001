const express = require("express");
const router = express.Router();

// Controllers
const authController = require('../controllers/AuthController');

// Rota para página login
router.get("/login", authController.login);
// Rota para página registrar
router.get("/register", authController.register);

module.exports = router;