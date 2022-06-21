const mongoose = require("mongoose");

const DomainSchema = new mongoose.Schema(
  {
    DomainName: { type: String, required: true },
  },
  {
    toJSON: { virtuals: true },
  }
);

DomainSchema.virtual("branches", {
  ref: "branch",
  foreignField: "domainId",
  localField: "_id",
});

module.exports = mongoose.model("domain", DomainSchema);
