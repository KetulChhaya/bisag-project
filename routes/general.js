const router = require("express").Router();
const Domain = require("../models/Domain");
const Branch = require("../models/Branch");

router.get("/domains", async (req, res) => {
  try {
    const domains = await Domain.find().sort({ DomainName: 1 });
    return res.status(200).send(domains);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/branch/all", async (req, res) => {
  try {
    const branches = await Branch.find();

    return res.status(200).send({ msg: "Fetched Successfully", branches });
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
