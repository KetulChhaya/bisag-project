const mongoose = require("mongoose");

const DomainSchema = new mongoose.Schema({
  domainName: { type: String, required: true },
});

module.exports = mongoose.model("Domain", DomainSchema);
