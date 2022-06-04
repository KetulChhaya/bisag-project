const mongoose = require("mongoose");

const PdfSchema = new mongoose.Schema({
  userId: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  pdfTitle: { type: String, required: true },
  desc: { type: String },
  branch: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Branch" }],
  subject: { type: mongoose.SchemaTypes.ObjectId, ref: "Subject" },
  chapter: { type: String },
  refExam: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Exam" }],
  tags: [{ type: String, default: [] }],
  previews: [{ type: mongoose.SchemaTypes.ObjectId }],
  downloads: [{ type: mongoose.SchemaTypes.ObjectId }],
  branchName: { type: String, required: true },
});

module.exports = mongoose.model("Pdf", PdfSchema);
