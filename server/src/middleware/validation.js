import { body, validationResult } from "express-validator";

export const loginSchema = [
  body("email")
    .isEmail()
    .withMessage("Please enter a valid email.")

    .notEmpty()
    .withMessage("Email is required."),

  body("password").notEmpty().withMessage("Password is required."),
];

export const signupSchema = [
  body("name")
    .isLength({ min: 3 })
    .withMessage("Please enter a name with at least 3 characters.")
    .notEmpty()
    .withMessage("Name is required."),

  body("email")
    .isEmail()
    .withMessage("Please enter a valid email.")
    .notEmpty()
    .withMessage("Email is required."),

  body("password")
    .isLength({ min: 8 })
    .withMessage("Please enter a password with at least 8 characters.")
    .notEmpty()
    .withMessage("Password is required."),

  body("confirmPassword")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords must match.");
      }
      return true;
    })
    .notEmpty()
    .withMessage("Confirm Password is required."),
];

export const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  errors
    .array()
    .forEach((error) => res.status(400).json({ message: error.msg }));
};
