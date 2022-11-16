require("./db/conn");
require("./db/pdfConn");
const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");
const generalRoutes = require("./routes/general");
const pdfRoutes = require("./db/pdfConn");
const cloudinaryRoute = require("./cloudinary/index");

const app = express();

// MIDDLEWARES
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/general/", generalRoutes);
app.use("/api/pdf", pdfRoutes);
app.use("/cloud", cloudinaryRoute);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// SERVER START CONFIG
const PORT = 8000;
app.listen(PORT, "127.0.0.1", () => {
  console.log("Server Created Successfully at PORT " + PORT);
});
