const express = require("express");
const cors = require("cors");
const itemRouter = require("./routes/itemRoutes");

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// ROUTES
app.use("/api/v1/", itemRouter);

module.exports = app;
