const mongoose = require("mongoose");

const PdfSchema = new mongoose.Schema({
  // userId: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  pdf_main_id: { type: String },
  pdf_main_url: { type: String },
  title: { type: String },
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
