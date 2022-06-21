const mongoose = require("mongoose");

const BranchSchema = new mongoose.Schema({
  domainId: { type: mongoose.Schema.Types.ObjectId, ref: "domains" },
  branchName: { type: String, required: true },
});

module.exports = mongoose.model("branch", BranchSchema);
