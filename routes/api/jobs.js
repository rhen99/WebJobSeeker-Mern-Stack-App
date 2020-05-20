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
    res.status(404).json("404 Not Found");
  }
});

// @route GET api/jobs/search
// @desc Search Jobs
// @access Public

router.get("/search", async (req, res) => {
  const q = req.query.q;
  if (q) {
    const searchStr = new RegExp(q, "gi");
    try {
      const jobs = await Job.find({
        keywords: searchStr,
      });
      res.json(jobs);
    } catch (err) {
      console.error(err);
      res.status(404).json("404 Not Found");
    }
  } else {
    res.status(400).json("Please Enter Something...");
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
    res.status(404).json("404 Not Found");
  }
});

// @route POST api/jobs/create
// @desc Create a job.
// @access Public

router.post("/create", async (req, res) => {
  const { title, company_name, salary, currency, description } = req.body;

  const sanitizedStr = title.replace(/[^a-zA-Z0-9]/g, "");

  const keywords = sanitizedStr.toLowerCase();

  try {
    const newJob = new Job({
      title,
      company_name,
      salary,
      currency,
      description,
      employer_id: uuid.v4(),
      keywords,
    });
    await newJob.save();
    res.json(newJob);
  } catch (err) {
    console.error(err);
    res.status(500).json("Server Error");
  }
});

// @route PUT api/jobs/:id
// @desc Update a Job
// @access Public

router.put("/:id", async (req, res) => {
  try {
    await Job.updateOne({ _id: req.params.id }, { ...req.body });
    res.json("Updated Successfully");
  } catch (err) {
    console.error(err);
    res.status(404).json("404 Not Found");
  }
});

// @route Delete api/jobs/:id
// @desc Delete a Job
// @access Public

router.delete("/:id", async (req, res) => {
  try {
    await Job.deleteOne({ _id: req.params.id });
    res.json("Deleted Successfully");
  } catch (err) {
    console.error(err);
    res.status(404).json("404 Not Found");
  }
});
module.exports = router;
