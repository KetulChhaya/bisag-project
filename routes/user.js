const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//  CREATE NEW USER
router.post("/create", async (req, res) => {
  try {
    const { name, institute, phone, email, password, downloads, uploads } =
      req.body;
    if (req.body) {
      // HASHING OF PASSWORD
      const salt = await bcrypt.genSalt(12);
      const hashedPassword = await bcrypt.hash(password, salt);
      //   CREATING NEW USER
      const newUser = await new User({
        name,
        email,
        institute,
        phone,
        password: hashedPassword,
        downloads,
        uploads,
      });
      await newUser.save();
      res.status(200).send(newUser);
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
});

// GET USERS
router.get("/getUsers", async (req, res) => {
  try {
    const users = await User.find();
    if (users) {
      res.status(200).send(users);
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
});

// UPDATE ANY USER DETAILS
router.patch("/:userId/update", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (user) {
      if (req.body.password) {
        const salt = await bcrypt.genSalt(12);
        const newHasedPass = await bcrypt.hash(req.body.password, salt);
        req.body.password = newHasedPass;
      }
      const updateUser = await User.findByIdAndUpdate(
        req.params.userId,
        {
          $set: req.body,
        },
        { new: true }
      );
      if (updateUser) {
        return res.status(200).send({
          updateUser,
          msg: "User Details has been updated successfully",
        });
      }
    } else {
      return res.status(500).send({ error: "No UserID found" });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
});

module.exports = router;
