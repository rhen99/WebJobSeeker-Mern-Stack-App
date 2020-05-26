const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company_name: {
      type: String,
      required: true,
    },
    salary: Number,
    currency: String,

    description: {
      type: String,
      required: true,
    },
    employer_id: {
      type: String,
      required: true,
    },
    keywords: {
      type: String,
    },
    created_at: {
      type: Date,
      default: Date.now(),
    },
    expiring_at: {
      type: Date,
      index: { expires: "43800m" },
      default: Date.now(),
    },
  }
  //{ autoIndex: false }
);
module.exports = mongoose.model("Job", jobSchema);
