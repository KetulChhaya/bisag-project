const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
  branchId: { type: mongoose.SchemaTypes.ObjectId, ref: "Branch" },
  subjectName: { type: String, required: true },
  chapters: { type: Array, default: [] },
});

module.exports = mongoose.model("Subject", SubjectSchema);
