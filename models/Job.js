const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
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
  date: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Job", jobSchema);
