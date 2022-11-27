const router = require("express").Router();

// Controller
const StripeController = require('../controllers/StripeController');

router.post("/payment", StripeController.payment)

module.exports = router