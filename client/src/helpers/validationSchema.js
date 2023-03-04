import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email("Invalid email.").required("Email is required."),
  password: Yup.string().required("Password is required."),
});

export const signupSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name should be at least 3 characters long.")
    .required("Name is required."),
  email: Yup.string().email("Invalid email.").required("Email is required."),
  password: Yup.string()
    .min(8, "Password should be at least 8 characters long.")
    .required("Password is required."),
  confirmPassword: Yup.string()
    .required("Confirm Password is required.")
    .oneOf([Yup.ref("password"), null], "Passwords must match."),
});
