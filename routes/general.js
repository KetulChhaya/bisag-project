const router = require("express").Router();
const Domain = require("../models/Domain");
const Branch = require("../models/Branch");
const Exam = require("../models/Exam");

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
    const branches = await Branch.find().sort({ branchName: 1 });
    return res.status(200).send(branches);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/exams", async (req, res) => {
  try {
    const exams = await Exam.find();
    return res.status(200).send(exams);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
