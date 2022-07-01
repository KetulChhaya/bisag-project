const mongoose = require("mongoose");

const PdfSchema = new mongoose.Schema({
  // userId: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  title: { type: String },
  fileId: { type: mongoose.SchemaTypes.ObjectId, ref: "uploads.files" },
  desc: { type: String },
  domain: { type: String },
  branch: [{ type: mongoose.SchemaTypes.ObjectId, ref: "branches" }],
  subject: { type: String },
  chapter: { type: String },
  // refExam: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Exam" }],
  tags: [{ type: String }],
  //previews: [{ type: mongoose.SchemaTypes.ObjectId }],
  //downloads: [{ type: mongoose.SchemaTypes.ObjectId }],
});

module.exports = mongoose.model("Pdf", PdfSchema);
