const mongoose = require("mongoose");

const CONN_STRING =
  "mongodb+srv://ketul:ketul1312@cluster0.auxvh.mongodb.net/?retryWrites=true&w=majority";

// FOR NORMAL ROUTES CONNECTION
const connec = async () => {
  mongoose.connect(
    CONN_STRING,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("DB CONNECTED");
    }
  );
};
connec();
