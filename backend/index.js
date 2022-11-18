// Express
const express = require("express");

const app = express();

// Database Connection
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Mongoose is running"))
    .catch((err) => console.log(err))

// Config JSON Response
app.use(express.json());

// Routes
const UserRoutes = require("./routes/UserRoutes");
const AuthRoutes = require("./routes/AuthRoutes");

app.use("/api/users", UserRoutes);
app.use("/api/auth", AuthRoutes);

// Port
app.listen(process.env.PORT || 5000, () => {
    console.log("backend is running")
})