const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Define Routes

app.use("/api/jobs", require("./routes/api/jobs"));
app.use("/api/applicants", require("./routes/api/applicants/applicants"));
app.use("/api/applicants/auth", require("./routes/api/applicants/auth"));
app.use("/api/employer", require("./routes/api/employers/employers"));
app.use("/api/emloyer/auth", require("./routes/api/employers/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
