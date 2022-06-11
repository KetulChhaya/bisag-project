const mongoose = require("mongoose");

const DomainSchema = new mongoose.Schema({
  DomainName: { type: String, required: true },
});

module.exports = mongoose.model("domain", DomainSchema);
