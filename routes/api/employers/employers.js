const express = require("express");
const router = express.Router();
const Employer = require("../../../models/Employer");
const Applicant = require("../../../models/Applicant");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

// @route POST api/employer/register
// @desc Creates a Employer User
// @access Public

router.post("/register", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  const emailRegex = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
  const nameRegex = /^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/;
  if (!firstname || !lastname || !email || !password)
    return res.status(400).json({
      msg: "Please fill in all required fields.",
    });
  if (!nameRegex.test(firstname) || !nameRegex.test(lastname))
    return res
      .status(400)
      .json({ msg: "Your name should start with a capital letter." });
  if (!emailRegex.test(email))
    return res.status(400).json({ msg: "Please use a proper email." });

  if (password.length < 8)
    return res
      .status(400)
      .json({ msg: "Password must be at least 8 characters" });
  try {
    const applicant = await Applicant.findOne({ email });
    if (applicant)
      return res.status(400).json({
        msg:
          "This email is already used as an applicant, please use a different email.",
      });
    const user = await Employer.findOne({ email });
    if (user)
      return res.status(400).json({ msg: "This email has already been used." });

    const newUser = new Employer({
      firstname,
      lastname,
      email,
      password,
    });
    bcrypt.genSalt(10, (err, salt) => {
      if (err) throw err;
      bcrypt.hash(newUser.password, salt, async (err, hash) => {
        if (err) throw err;
        try {
          newUser.password = hash;
          await newUser.save();

          jwt.sign(
            { id: newUser.id },
            config.get("jwtSecret"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: newUser.id,
                  firstname: newUser.firstname,
                  lastname: newUser.lastname,
                  email: newUser.email,
                  role: newUser.role,
                },
              });
            }
          );
        } catch (err) {
          console.error(err);
        }
      });
    });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
