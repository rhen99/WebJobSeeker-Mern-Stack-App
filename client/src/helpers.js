export const checkForErrors = (type, hasErrors, noErrors = null) => {
  return type === "REGISTER_FAIL" || type === "LOGIN_FAIL"
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
