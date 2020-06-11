const express = require("express");
const router = express.Router();
const Job = require("../../models/Job");
const auth = require("../../middleware/auth");
const Employer = require("../../models/Employer");

// @route GET api/jobs
// @desc Get all jobs
// @access Public

router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      msg: "Server Error",
    });
  }
});

// @route GET api/jobs/top_paying
// @desc Get the 6 highest paying job in the database
// @access Public

router.get("/top_paying", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ salary: -1 }).limit(6);
    res.json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      msg: "Server Error",
    });
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
      res.status(500).json({
        msg: "Server Error",
      });
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
    res.status(500).json({
      msg: "Server Error",
    });
  }
});

// @route POST api/jobs/create
// @desc Create a job.
// @access Private

router.post("/create", auth, async (req, res) => {
  const { title, company_name, salary, currency, description } = req.body;
  const keywords = title.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  if (!title || !company_name || !description)
    return res.status(400).json({ msg: "Please fill in all required fields." });

  try {
    const user = await Employer.findById(req.user.id);
    if (!user) return res.status(403).json({ msg: "Forbidden access." });
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
    res.json({ msg: "Update Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json("Server Error");
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
    res.json({ msg: "Deleted Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json("Server Error");
  }
});

module.exports = router;
