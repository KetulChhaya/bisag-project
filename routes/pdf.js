const router = require("express").Router();
const { conn, upload } = require("../db/pdfConn");
const MYmodule = require("../db/conn");

router.post("/", upload.single("file"), (req, res) => {
  return res.status(200).json({ msg: req.body });
});

// Loads FORM
// router.get("/", async (req, res) => {
//   gfs.files.find().toArray((err, files) => {
//     // Check if files
//     if (!files || files.length == 0) {
//       return res.render("index", { files: false });
//     } else {
//       files.map((file) => {
//         if (
//           file.contentType === "image/png" ||
//           file.contentType === "image/jpeg"
//         ) {
//           file.isImage = true;
//         } else {
//           file.isImage = false;
//         }
//       });
//       res.render("index", { files: files });
//     }
//   });
// });

// GET /files ==> displays of file in json
router.get("/files", (req, res) => {
  console.log("GFS", MYmodule.gfs);
  console.log("upload", upload);
  console.log("gridfsbucket", MYmodule.gridfsBucket);
  console.log("conn", conn);
  // gridfsBucket.files.find().toArray((err, files) => {
  //   // Check if files
  //   console.log(files);
  //   if (!files || files.length == 0) {
  //     return res.status(404).json({
  //       err: "No Files Exist!",
  //     });
  //   }

  //   // Files exist
  // return res
  //   .status(200)
  //   .json({ gfs: gfs, upload: upload, gridfsbucket: gridfsBucket, conn: conn });
  // });
});

module.exports = router;
