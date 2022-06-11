const mongoose = require("mongoose");
const path = require("path");
const crypto = require("crypto");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage").GridFsStorage;
const Grid = require("gridfs-stream");

const CONN_STRING =
  "mongodb+srv://ketul:ketul1312@cluster0.auxvh.mongodb.net/?retryWrites=true&w=majority";

// FOR NORMAL ROUTES CONNECTION
const connec = async () => {
  mongoose.connect(
    CONN_STRING,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("DB CONNECTED");
    }
  );
};
connec();

// FOR STORING FILES using GRIDFS
const conn = mongoose.createConnection(CONN_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// init gfs
var gfs, gridfsBucket;
conn.once("open", () => {
  console.log("DB Connected");
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
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});
const upload = multer({ storage });

module.exports = { conn, upload };
