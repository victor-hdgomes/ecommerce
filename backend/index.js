const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const UserRoutes = require("./routes/UserRoutes")

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Mongoose is running"))
    .catch((err) => console.log(err))

app.use(express.json());

app.use("/api/users", UserRoutes);

app.listen(process.env.PORT || 5000, () => {
    console.log("backend is running")
})