const router = require("express").Router();

// Controller
const UserController = require('../controllers/UserController');

// Middleware to validate token
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../helpers/verify-token")

router.put("/:id", verifyTokenAndAuthorization, UserController.update);
router.delete("/:id", verifyTokenAndAuthorization, UserController.delete);
router.get("/find/:id", verifyTokenAndAdmin, UserController.getUser);
router.get("/", verifyTokenAndAdmin, UserController.getAllUser);
router.get("/stats", verifyTokenAndAdmin, UserController.getUserStats);

module.exports = router