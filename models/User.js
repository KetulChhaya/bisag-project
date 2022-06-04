const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  institute: { type: String, required: true },
  phone: { type: Number, minlength: 10, maxlength: 10, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  downloads: [{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }],
  uploads: [{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("User", UserSchema);
