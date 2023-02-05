import React, { useState, useEffect, useRef, useContext } from "react";
import {
  Outlet,
  useLoaderData,
  ScrollRestoration,
  useNavigation,
} from "react-router-dom";

// Components
import Spinner from "./components/Spinner";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

// Context
import { ThemeContext } from "./context/ThemeContext";

// Helpers
import { darkModePreference, toggleDarkMode } from "./helpers/darkMode";

const App = () => {
  const { genres } = useLoaderData();
  const navigation = useNavigation();

  const { theme } = useContext(ThemeContext);

  const [sidebarOpen, setSidebarOpen] = useState();
  const [menuOpen, setMenuOpen] = useState();
  const [themeOpen, setThemeOpen] = useState();
  const [themeIcon, setThemeIcon] = useState();

  const overlayRef = useRef();

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
    setThemeIcon(toggleDarkMode());
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("genres", JSON.stringify(genres));

    darkModePreference.addEventListener("change", () =>
      setThemeIcon(toggleDarkMode())
    );

    document.addEventListener("click", handleOverlay);
  }, []);

  const handleOverlay = (event) => {
    const isClickInside = overlayRef.current.contains(event.target);

    if (isClickInside) {
      closeAllMenus();
    }
  };

  const closeAllMenus = () => {
    setSidebarOpen(false);
    setMenuOpen(false);
    setThemeOpen(false);
  };

  return (
    <>
      <div className="relative min-h-screen font-medium text-neutral-900 dark:text-white bg-white dark:bg-neutral-900">
        {navigation.state === "loading" && <Spinner position="fixed" />}
        <div
          ref={overlayRef}
          className={`${
            sidebarOpen || themeOpen || menuOpen ? "block" : "hidden"
          } absolute top-0 bottom-0 left-0 right-0 z-40`}
        ></div>
        <Navbar
          isSidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          isThemeOpen={themeOpen}
          setThemeOpen={setThemeOpen}
          themeIcon={themeIcon}
          isMenuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          closeAllMenus={closeAllMenus}
        />
        <Sidebar
          genres={genres}
          isOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <Outlet />
        <Footer />
        <ScrollRestoration />
      </div>
    </>
  );
};

export default App;
