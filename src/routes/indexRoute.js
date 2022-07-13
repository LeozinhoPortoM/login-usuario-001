const express = require("express");
const router = express.Router();

// Controllers
const indexController = require("../controllers/IndexController");

// Middlewares

//  Index home
router.get("/", indexController.home);

module.exports = router;