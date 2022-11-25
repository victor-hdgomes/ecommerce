const router = require("express").Router();

// Controller
const OrderController = require('../controllers/OrderController');

// Middleware to validate token
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../helpers/verify-token")

router.post("/", verifyToken, OrderController.create);
router.put("/:id", verifyTokenAndAdmin, OrderController.update);
router.delete("/:id", verifyTokenAndAdmin, OrderController.delete);
router.get("/find/:userId", verifyTokenAndAuthorization, OrderController.getUserOrders);
router.get("/income", verifyTokenAndAdmin, OrderController.getIncome);

module.exports = router