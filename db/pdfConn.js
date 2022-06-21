const mongoose = require("mongoose");
const path = require("path");
const crypto = require("crypto");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage").GridFsStorage;
const Grid = require("gridfs-stream");
const router = require("express").Router();
const PDF = require("../models/Pdf");

const CONN_STRING =
  "mongodb+srv://ketul:ketul1312@cluster0.auxvh.mongodb.net/?retryWrites=true&w=majority";

// FOR STORING FILES using GRIDFS
const conn = mongoose.createConnection(CONN_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// init gfs
var gfs, gridfsBucket, fileName;
conn.once("open", () => {
  console.log("DB Connected for PDF");
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "uploads",
  });
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

// create gridFs stroage engine
const storage = new GridFsStorage({
  url: CONN_STRING,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        fileName = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: fileName,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});
const upload = multer({ storage });

router.post("/", upload.single("file"), async (req, res) => {
  const { title, desc } = req.body;
  const fileId = req.file.id;

  try {
    const pdf = await new PDF({
      title,
      desc,
      fileId,
    });
    await pdf.save();
    res.status(200).send(pdf);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
