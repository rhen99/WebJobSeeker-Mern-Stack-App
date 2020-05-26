const mongoose = require("mongoose");
const applicationSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
    },

    letter: {
      type: String,
      required: true,
    },
    applicant_id: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now(),
    },
  }
  //{ autoIndex: false }
);
module.exports = mongoose.model("Application", applicationSchema);
