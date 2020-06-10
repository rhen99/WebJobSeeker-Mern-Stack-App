const express = require("express");
const router = express.Router();
const Applicant = require("../../../models/Applicant");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../../../middleware/auth");

// @route POST api/applicant/auth
// @desc Authenticate a Applicant User
// @access Public

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({
      msg: "Please fill in all required fields.",
    });
  try {
    const user = await Applicant.findOne({ email });
    if (!user)
      return res
        .status(400)
        .json({ msg: "This email might not be registered." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({
        msg: "Password is incorrect.",
      });
    jwt.sign(
      { id: user.id },
      config.get("jwtSecret"),
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({
          token,
          user: {
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            role: user.role,
          },
        });
      }
    );
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
