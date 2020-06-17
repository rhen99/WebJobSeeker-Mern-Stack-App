export const checkForErrors = (type, hasErrors, noErrors = null) => {
  return type === "REGISTER_FAIL" ||
    type === "LOGIN_FAIL" ||
    type === "JOB_FAIL"
    ? hasErrors
    : noErrors;
};
export const renderElem = (current, applicant, employer) => {
  switch (current) {
    case "applicant":
      return applicant;
    case "employer":
      return employer;
    default:
      return null;
  }
};
export const isAuth = (isAuth, notAuth) => {
  return localStorage.getItem("token") ? isAuth : notAuth;
};
export const isEmployer = (employer, applicant = "") => {
  return localStorage.getItem("role") === "employer" ? employer : applicant;
};
export const tokenConfig = () => {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
};
