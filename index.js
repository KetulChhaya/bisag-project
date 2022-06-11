const express = require("express");
// const path = require("path");
// const crypto = require("crypto");
// const mongoose = require("mongoose");
// const multer = require("multer");
// const GridFsStorage = require("multer-gridfs-storage");
// const Grid = require("gridfs-stream");
// const methodOverride = require("method-override");
// const bodyParser = require("body-parser");

require("./db/conn");
const userRoutes = require("./routes/user");
const generalRoutes = require("./routes/general");
const pdfRoutes = require("./routes/pdf");

const app = express();

// app.use(bodyParser.json());
// app.use(methodOverride("_method"));
app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/general/", generalRoutes);
app.use("/api/pdf", pdfRoutes);

const PORT = 8000;
app.listen(PORT, "127.0.0.1", () => {
  console.log("Server Created Successfully at PORT " + PORT);
});
