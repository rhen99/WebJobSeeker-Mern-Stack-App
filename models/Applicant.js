const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema(
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
    register_date: {
      type: Date,
      default: Date.now(),
    },
  }
  //{ autoIndex: false }
);
module.exports = mongoose.model("Applicant", applicantSchema);
