const mongoose = require("mongoose");

const ExamSchema = new mongoose.Schema({
  examName: { type: String, required: true },
  isCompetetive: { type: Boolean, required: true },
});

module.exports = mongoose.model("Exam", ExamSchema);
