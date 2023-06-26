import * as Yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const emailRules = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/;
export const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email!")
    .matches(emailRules, { message: " Not valid :{" })
    .required("Email Required !"),
  password: Yup.string()
    .matches(passwordRules, { message: "Please create a stronger password !" })
    .required("Password Required !"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password") || null], "Passwords must match")
    .required("Confirm-Password Required !"),
});
