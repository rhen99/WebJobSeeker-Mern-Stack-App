const express = require("express");
const router = express.Router();
const Job = require("../../models/Job");
const auth = require("../../middleware/auth");
const Employer = require("../../models/Employer");
const moment = require("moment");

// @route GET api/jobs
// @desc Get all jobs
// @access Public

router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find();
    const expiredJobs = await Job.deleteMany({
      expiration_date: { $lte: Date.now() },
    });
    console.log(expiredJobs);
    res.json(jobs);
  } catch (err) {
    console.error(err);
    res.status(404).json("404 Not Found");
  }
});
// @route GET api/jobs
// @desc Get all jobs
// @access Public

router.delete("/", async (req, res) => {
  try {
    res.json(expiredJobs);
  } catch (err) {
    console.error(err);
    res.status(404).json("404 Not Found");
  }
});

// @route GET api/jobs/search
// @desc Search Jobs
// @access Private

router.get("/search", auth, async (req, res) => {
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
// @acces Private

router.get("/:id", auth, async (req, res) => {
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
// @access Private

router.post("/create", auth, async (req, res) => {
  const { title, company_name, salary, currency, description } = req.body;

  try {
    const user = await Employer.findById(req.user.id);
    if (!user) return res.status(403).json({ msg: "Forbidden access." });
    const keywords = title.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const newJob = new Job({
      title,
      company_name,
      salary,
      currency,
      description,
      employer_id: req.user.id,
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
// @access Private

router.put("/:id", auth, async (req, res) => {
  const user = await Employer.findById(req.user.id);
  if (!user) return res.status(403).json({ msg: "Forbidden access." });
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
// @access Private

router.delete("/:id", auth, async (req, res) => {
  const user = await Employer.findById(req.user.id);
  if (!user) return res.status(403).json({ msg: "Forbidden access." });
  try {
    await Job.deleteOne({ _id: req.params.id });
    res.json("Deleted Successfully");
  } catch (err) {
    console.error(err);
    res.status(404).json("404 Not Found");
  }
});
module.exports = router;
