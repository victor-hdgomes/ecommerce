// Express
const express = require("express");

const app = express();

// CORS
const cors = require("cors");

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

// Config JSON Response
app.use(express.json());

// Routes
const UserRoutes = require("./routes/UserRoutes");
const AuthRoutes = require("./routes/AuthRoutes");
const ProductRoutes = require("./routes/ProductRoutes");
const CartRoutes = require("./routes/CartRoutes");
const OrderRoutes = require("./routes/OrderRoutes");

app.use("/api/users", UserRoutes);
app.use("/api/auth", AuthRoutes);
app.use("/api/products", ProductRoutes);
app.use("/api/carts", CartRoutes);
app.use("/api/orders", OrderRoutes);

// Port
app.listen(5000)