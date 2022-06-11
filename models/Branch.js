const mongoose = require("mongoose");

const BranchSchema = new mongoose.Schema({
  domainId: { type: mongoose.SchemaTypes.ObjectId, ref: "Domain" },
  branchName: { type: String, required: true },
});

module.exports = mongoose.model("branch", BranchSchema);
