// Express
const express = require("express");

const app = express();

// Config JSON Response
app.use(express.json());

// CORS
const cors = require("cors");

app.use(cors())

// Routes
const UserRoutes = require("./routes/UserRoutes");
const AuthRoutes = require("./routes/AuthRoutes");
const ProductRoutes = require("./routes/ProductRoutes");
const CartRoutes = require("./routes/CartRoutes");
const OrderRoutes = require("./routes/OrderRoutes");
const StripeRoutes = require("./routes/StripeRoutes");

app.use("/api/users", UserRoutes);
app.use("/api/auth", AuthRoutes);
app.use("/api/products", ProductRoutes);
app.use("/api/carts", CartRoutes);
app.use("/api/orders", OrderRoutes);
app.use("/api/checkout", StripeRoutes);

// Port
app.listen(5000)