const express = require("express");
const router = express.Router();
const Job = require("../../models/Job");
const uuid = require("uuid");

// @route GET api/jobs
// @desc Get all jobs
// @access Public
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    console.error(err);
  }
});

// @route GET api/jobs/:id
// @desc Get One Job
// @acces Public

router.get("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    res.json(job);
  } catch (err) {
    console.error(err);
    res.status(404).json("Not Found");
  }
});

// @route POST api/jobs/create
// @desc Create a job.
// @access Public

router.post("/create", async (req, res) => {
  const {
    title,
    company_name,
    salary,
    currency,
    description,
    employer_id,
  } = req.body;
  try {
    const newJob = new Job({
      title,
      company_name,
      salary,
      currency,
      description,
      employer_id,
    });
    await newJob.save();
    res.json(newJob);
  } catch (err) {
    console.error(err);
    res.status(500).json("Server Error");
  }
});

module.exports = router;
