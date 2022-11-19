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

app.use("/api/users", UserRoutes);
app.use("/api/auth", AuthRoutes);

// Port
app.listen(5000)