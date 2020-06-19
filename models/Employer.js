const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      min: 8,
    },
    role: {
      type: String,
      default: "employer",
    },
    company: {
      type: String,
      required: true,
    },
    register_date: {
      type: Date,
      default: Date.now(),
    },
  }
  //{ autoIndex: false }
);
module.exports = mongoose.model("Employer", employerSchema);
