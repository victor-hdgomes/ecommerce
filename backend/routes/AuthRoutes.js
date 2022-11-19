const router = require("express").Router();

const AuthController = require('../controllers/AuthController')

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

module.exports = router