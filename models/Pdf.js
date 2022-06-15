const mongoose = require("mongoose");

const PdfSchema = new mongoose.Schema({
  userId: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  title: { type: String },
  url: { type: mongoose.SchemaTypes.ObjectId, ref: "uploads.files" },
  desc: { type: String },
  branch: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Branch" }],
  subject: { type: mongoose.SchemaTypes.ObjectId, ref: "Subject" },
  chapter: { type: String },
  refExam: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Exam" }],
  tags: [{ type: String, default: [] }],
  previews: [{ type: mongoose.SchemaTypes.ObjectId }],
  downloads: [{ type: mongoose.SchemaTypes.ObjectId }],
  branchName: { type: String },
});

module.exports = mongoose.model("Pdf", PdfSchema);
