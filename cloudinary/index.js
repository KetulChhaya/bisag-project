const cloudinary = require("cloudinary").v2;
const router = require("express").Router();
const crypto = require("crypto");
const PDF = require("../models/Pdf");
const CLOUDINARY_URL =
  "cloudinary://251556915581984:K_9UHXtpmTRv_u_KgABuOdhQ6CU@king13";

cloudinary.config({
  cloud_name: "king13",
  api_key: "251556915581984",
  api_secret: "K_9UHXtpmTRv_u_KgABuOdhQ6CU",
  secure: true,
});

const multer = require("multer");
const upload = multer({ dest: "./cloudinary/uploads" });

router.post("/", upload.single("file"), function (req, res) {
  console.log(req.body);
  const path = req.file.path;
  const uniqueFileName = new Date().toISOString();
  console.log("unique", uniqueFileName);
  cloudinary.uploader.upload(
    path,
    { public_id: `pdf/${uniqueFileName}`, tags: `${req.body.tags}` },
    async function (err, pdf) {
      if (err) {
        return res.send("File Format Invalid");
      }
      console.log("File Uploaded Successfully");
      console.log(pdf);

      // remove file from server
      const fs = require("fs");
      fs.unlinkSync(path);

      const document = new PDF({
        pdf_main_id: pdf.asset_id,
        pdf_main_url: pdf.secure_url,
        userId: "",
        title: req.body.title,
        desc: req.body.desc,
        domain: req.body.domain,
        branch: req.body.branches,
        subject: req.body.subject,
        chapter: req.body.chapter,
        tags: req.body.tags,
      });
      await document.save();
      // res.status(201).json(document);
    }
  );
});

module.exports = router;
