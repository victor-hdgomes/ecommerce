const router = require("express").Router();

// Controller
const ProductController = require('../controllers/ProductController');

// Middleware to validate token
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../helpers/verify-token")

router.post("/", verifyTokenAndAdmin, ProductController.create);
router.put("/:id", verifyTokenAndAdmin, ProductController.update);
router.delete("/:id", verifyTokenAndAdmin, ProductController.delete);
router.get("/find/:id", ProductController.getProduct);
router.get("/", ProductController.getAllProducts);

module.exports = router