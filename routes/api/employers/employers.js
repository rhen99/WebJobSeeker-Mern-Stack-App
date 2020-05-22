const express = require("express");
const router = express.Router();
const Employer = require("../../../models/Employer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

// @route POST api/employer/register
// @desc Creates a Employer User
// @access Public

router.post("/register", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  if (!firstname || !lastname || !email || !password)
    return res.status(400).json({
      msg: "Please fill in all fields.",
    });
  try {
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
