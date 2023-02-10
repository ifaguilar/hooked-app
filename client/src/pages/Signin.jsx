import React, { useContext, useEffect } from "react";

// Context
import { ThemeContext } from "../context/ThemeContext";

// Helpers
import { darkModePreference, toggleDarkMode } from "../helpers/darkMode";

const Signin = () => {
  const { theme } = useContext(ThemeContext);

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
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">
      <div className="flex flex-col gap-8 text-center">
        <h1 className="text-6xl font-bold">Sign In</h1>
        <p>Under construction...</p>
      </div>
    </div>
  );
};

export default Signin;
