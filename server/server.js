// server.js

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const apiRouter = require("./api/api");

const app = express();
const PORT =  5000;
require("dotenv").config();
// Middleware
app.use(cors());
app.use(bodyParser.json());

// API routes
app.use("/api", apiRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
