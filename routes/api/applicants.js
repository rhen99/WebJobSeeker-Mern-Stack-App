const express = require("express");
const router = express.Router();
const Applicant = require("../../models/Applicant");
const bcrypt = require("bcryptjs");

// @route POST api/applicants/register
// @desc Creates a Applicant User
// @access Public

router.post("/register", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  if (!firstname || !lastname || !email || !password)
    return res.status(400).json({
      msg: "Please fill in all fields.",
    });
  try {
    const user = await Applicant.findOne({ email });
    if (user)
      return res.status(400).json({ msg: "This email has already been used." });

    const newUser = new Applicant({
      firstname,
      lastname,
      email,
      password,
    });
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
      });
    });
    await newUser.save();
    res.json({
      firstname,
      lastname,
      email,
    });
  } catch (err) {
    console.error(err);
  }
});

// @route POST api/applicant/login
// @desc Authenticates a user.
// @access Public

router.post("/login", (req, res) => {});

module.exports = router;
