const express = require("express");
const router = express.Router();
const Job = require("../../models/Job");
const auth = require("../../middleware/auth");
const Applicant = require("../../models/Applicant");
const Employer = require("../../models/Employer");

// @route POST api/applications/:id/apply
// @desc Create a job application
// @access Private

router.post("/:id/apply", auth, async (req, res) => {
  const { subject, letter } = req.body;
  if (!subject || !letter)
    return res.status(400).json({ msg: "Please fill in all fields." });

  if (letter.length < 150)
    return res.status(400).json({
      msg: "Your letter is too short, please make it at least 150 characters.",
    });
  try {
    const user = await Applicant.findById(req.user.id);
    if (!user) return res.status(403).json({ msg: "Forbidden access." });

    const job = await Job.findById(req.params.id);
    if (!job)
      return res
        .status(404)
        .json({ msg: "Sorry, Couldn't find this job anymore." });

    const application = {
      applicant_name: `${user.firstname} ${user.lastname}`,
      subject,
      letter,
      email: user.email,
      applicant_id: req.user.id,
    };
    job.applications.push(application);

    await job.save();
    res.json(job);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      msg: "Server Error",
    });
  }
});

// @route GET api/applications/:job_id/:application_id
// @desc Get one application
// @access Private
router.get("/:job_id/:application_id", auth, async (req, res) => {
  try {
    const user = await Employer.findById(req.user.id);
    if (!user) return res.status(403).json({ msg: "Forbidden access." });

    const job = await Job.findById(req.params.job_id);
    if (!job) return res.status(404).json({ msg: "Job Not Found" });

    const application = await job.applications.id(req.params.application_id);
    res.json(application);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      msg: "Server Error",
    });
  }
});
module.exports = router;
