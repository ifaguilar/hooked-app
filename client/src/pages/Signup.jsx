import React, { useContext, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Button from "../components/Button";
import Input from "../components/Input";
import Logo from "../components/Logo";

// Constants
import { serverBaseURL, websitePerspectiveBg } from "../constants/constants";

// Context
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

// Helpers
import { darkModePreference, toggleDarkMode } from "../helpers/darkMode";
import { signupSchema } from "../helpers/validationSchema";

const Signup = () => {
  const { theme } = useContext(ThemeContext);
  const { isAuthenticated, login } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    switch (theme) {
      case "light":
        localStorage.setItem("theme", "light");
        break;
      case "dark":
        localStorage.setItem("theme", "dark");
        break;
      case "system":
        localStorage.removeItem("theme");
        break;
    }
    toggleDarkMode();
  }, [theme]);

  useEffect(() => {
    darkModePreference.addEventListener("change", toggleDarkMode);

    return () => {
      darkModePreference.removeEventListener("change", toggleDarkMode);
    };
  }, []);

  const handleSubmit = async (values) => {
    try {
      const response = await fetch(`${serverBaseURL}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.ok) {
        login(data.token, data.user);
        navigate("/");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error(error.message);
      toast.error(error.message, {
        position: "bottom-right",
        className:
          "text-neutral-900 dark:text-white bg-white dark:bg-neutral-800",
      });
    }
  };

  if (isAuthenticated) {
    return (
      <div className="relative min-h-screen font-medium text-neutral-900 dark:text-white bg-white dark:bg-neutral-900">
        <Navigate to="/" />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen font-medium text-neutral-900 dark:text-white bg-white dark:bg-neutral-900">
      <div className="absolute inset-0 lg:grid lg:grid-cols-2">
        <div
          className="hidden lg:block bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url('${websitePerspectiveBg}')` }}
        ></div>
        <div className="flex flex-col items-center justify-center gap-16 h-full px-4 lg:px-8">
          <Logo />
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={signupSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-8 w-full max-w-sm">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Name</label>

                  <Field name="name">
                    {({ field, meta }) => (
                      <Input
                        touched={meta.touched ? meta.touched : false}
                        error={meta.error ? meta.error : ""}
                        type="text"
                        placeholder="John Doe"
                        {...field}
                      />
                    )}
                  </Field>

                  <ErrorMessage name="name">
                    {(message) => (
                      <span className="text-red-600">{message}</span>
                    )}
                  </ErrorMessage>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Email</label>

                  <Field name="email">
                    {({ field, meta }) => (
                      <Input
                        touched={meta.touched ? meta.touched : false}
                        error={meta.error ? meta.error : ""}
                        type="email"
                        placeholder="john@example.com"
                        {...field}
                      />
                    )}
                  </Field>

                  <ErrorMessage name="email">
                    {(message) => (
                      <span className="text-red-600">{message}</span>
                    )}
                  </ErrorMessage>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="password">Password</label>

                  <Field name="password">
                    {({ field, meta }) => (
                      <Input
                        touched={meta.touched ? meta.touched : false}
                        error={meta.error ? meta.error : ""}
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    )}
                  </Field>

                  <ErrorMessage name="password">
                    {(message) => (
                      <span className="text-red-600">{message}</span>
                    )}
                  </ErrorMessage>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="confirmPassword">Confirm Password</label>

                  <Field name="confirmPassword">
                    {({ field, meta }) => (
                      <Input
                        touched={meta.touched ? meta.touched : false}
                        error={meta.error ? meta.error : ""}
                        type="password"
                        placeholder="Confirm your password"
                        {...field}
                      />
                    )}
                  </Field>

                  <ErrorMessage name="confirmPassword">
                    {(message) => (
                      <span className="text-red-600">{message}</span>
                    )}
                  </ErrorMessage>
                </div>

                <Button variant="primary" type="submit" disabled={isSubmitting}>
                  Create account
                </Button>
              </Form>
            )}
          </Formik>
          <div className="flex gap-2">
            <p>Already have an account?</p>
            <Link to="/login" className="font-semibold">
              Sign in
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
