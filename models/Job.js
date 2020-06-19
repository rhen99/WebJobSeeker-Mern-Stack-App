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
    salary: {
      type: String,
      default: "Negotiate",
    },
    currency: String,
    salary_type: {
      type: String,
      required: true,
    },
    job_type: {
      type: String,
      required: true,
    },
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
    applications: [
      {
        applicant_name: {
          type: String,
        },
        subject: {
          type: String,
          required: true,
        },
        letter: {
          type: String,
          required: true,
          min: 150,
        },
        email: {
          type: String,
        },
        applicant_id: {
          type: String,
        },
        created_at: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
  }
  //{ autoIndex: false }
);
module.exports = mongoose.model("Job", jobSchema);
// Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, eligendi libero possimus iusto neque eius beatae delectus incidunt corrupti, dolorum, dolore nulla illo explicabo? Voluptas mollitia inventore aliquam exercitationem, aliquid nulla voluptates placeat, ipsa modi est accusamus nesciunt veniam, tenetur similique culpa reiciendis dolorum laboriosam ea illo. Optio, aperiam. Pariatur, eaque porro error atque accusantium adipisci provident eum eligendi sint totam dicta ratione autem culpa dolor a quam libero rerum illum rem sapiente itaque quaerat! Delectus accusamus ullam modi repellat neque voluptates iste sunt perspiciatis itaque ducimus ipsum laudantium aperiam reprehenderit maiores rem non fugit fuga aut reiciendis consectetur quam, sequi aliquam facilis? Consequuntur, quae! Modi, inventore possimus voluptatem a sed accusantium suscipit ex dicta, sint excepturi cupiditate dolorum quisquam recusandae mollitia, eos placeat exercitationem! Libero nesciunt laudantium atque, aut architecto minima, ipsum, quod sapiente nostrum exercitationem veritatis quasi itaque numquam eaque voluptatum tempore molestias distinctio porro. Quibusdam, architecto natus!
