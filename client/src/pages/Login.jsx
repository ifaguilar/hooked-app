import React, { useContext, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";

// Components
import Button from "../components/Button";
import Input from "../components/Input";
import Logo from "../components/Logo";

// Constants
import { serverBaseURL } from "../constants/constants";

// Context
import { ThemeContext } from "../context/ThemeContext";

// Helpers
import { darkModePreference, toggleDarkMode } from "../helpers/darkMode";
import { loginSchema } from "../helpers/validationSchema";

const Login = () => {
  const { theme } = useContext(ThemeContext);

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
      const response = await fetch(`${serverBaseURL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.ok) {
        localStorage.setItem("token", data.token);
        navigate("/");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error(error.message);
      toast.error(error.message, {
        position: "bottom-right",
      });
    }
  };

  return (
    <div className="relative min-h-screen font-medium text-neutral-900 dark:text-white bg-white dark:bg-neutral-900">
      <div className="absolute inset-0 lg:grid lg:grid-cols-2">
        <div className="hidden lg:block bg-[url('/website-perspective.png')] bg-cover bg-no-repeat bg-center opacity-50"></div>
        <div className="flex flex-col items-center justify-center gap-16 h-full px-4 lg:px-8">
          <Logo />
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            {(props) => (
              <Form className="flex flex-col gap-8 w-full max-w-sm">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-white/80">
                    Email
                  </label>

                  <Field name="email">
                    {({ field, meta }) => (
                      <Input
                        touched={meta.touched ? meta.touched : false}
                        error={meta.error ? meta.error : ""}
                        type="email"
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
                  <label htmlFor="password" className="text-white/80">
                    Password
                  </label>

                  <Field name="password">
                    {({ field, meta }) => (
                      <Input
                        touched={meta.touched ? meta.touched : false}
                        error={meta.error ? meta.error : ""}
                        type="password"
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

                <Button variant="primary" type="submit">
                  Sign In
                </Button>
              </Form>
            )}
          </Formik>
          <div className="flex gap-2">
            <p>New to Hooked?</p>
            <Link to="/signup" className="font-semibold">
              Sign up now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;