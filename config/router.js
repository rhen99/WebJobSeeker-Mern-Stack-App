const defineRoute = (app) => {
  app.use("/api/jobs", require("../routes/api/jobs"));
  app.use("/api/applications", require("../routes/api/applications"));
  app.use("/api/applicants", require("../routes/api/applicants/applicants"));
  app.use("/api/applicants/auth", require("../routes/api/applicants/auth"));
  app.use("/api/employers", require("../routes/api/employers/employers"));
  app.use("/api/employers/auth", require("../routes/api/employers/auth"));
  app.use("/api/auth", require("../routes/api/user"));
};
module.exports = defineRoute;
