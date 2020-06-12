const express = require("express");
const router = express.Router();
const Employer = require("../../../models/Employer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../../../middleware/auth");

// @route POST api/employer/auth
// @desc Authenticate a Employer User
// @access Public

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({
      msg: "Please fill in all required fields.",
    });
  try {
    const user = await Employer.findOne({ email });
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
      { expiresIn: 2628000 },
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
