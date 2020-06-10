const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Applicant = require("../../models/Applicant");
const Employer = require("../../models/Employer");

router.get("/user", auth, async (req, res) => {
  try {
    const applicant = await Applicant.findById(req.user.id).select("-password");
    const employer = await Employer.findById(req.user.id).select("-password");
    res.json(!applicant ? employer : applicant);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
