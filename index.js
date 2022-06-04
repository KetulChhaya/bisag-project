const express = require("express");

require("./db/conn");
const userRoutes = require("./routes/user");

const app = express();

app.use(express.json());
app.use("/api/user", userRoutes);

const PORT = 8000;
app.listen(PORT, "127.0.0.1", () => {
  console.log("Server Created Successfully");
});
