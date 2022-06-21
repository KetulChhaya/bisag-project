const mongoose = require("mongoose");

const PdfSchema = new mongoose.Schema({
  userId: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  title: { type: String },
  fileId: { type: mongoose.SchemaTypes.ObjectId, ref: "uploads.files" },
  desc: { type: String },
  domain: { type: String },
  branch: [{ type: String, default: [] }],
  subject: [{ type: String, default: [] }],
  chapter: [{ type: String, default: [] }],
  refExam: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Exam" }],
  tags: [{ type: String, default: [] }],
  previews: [{ type: mongoose.SchemaTypes.ObjectId }],
  downloads: [{ type: mongoose.SchemaTypes.ObjectId }],
});

module.exports = mongoose.model("Pdf", PdfSchema);
