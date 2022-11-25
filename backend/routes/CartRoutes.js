const router = require("express").Router();

// Controller
const CartController = require('../controllers/CartController');

// Middleware to validate token
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../helpers/verify-token")

router.post("/", verifyToken, CartController.create);
router.put("/:id", verifyTokenAndAuthorization, CartController.update);
router.delete("/:id", verifyTokenAndAuthorization, CartController.delete);
router.get("/find/:userId", verifyTokenAndAuthorization, CartController.getCart);
router.get("/", verifyTokenAndAdmin, CartController.getAll);

module.exports = router