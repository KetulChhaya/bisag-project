const mongoose = require("mongoose");

const CONN_STRING =
  "mongodb+srv://ketul:ketul1312@cluster0.auxvh.mongodb.net/?retryWrites=true&w=majority";

const conn = async () => {
  try {
    await mongoose.connect(
      CONN_STRING,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => {
        console.log("DB connected successfully");
      }
    );
  } catch (error) {
    console.log(error);
  }
};
conn();
