export const darkModePreference = window.matchMedia(
  "(prefers-color-scheme: dark)"
);

export const toggleDarkMode = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && darkModePreference.matches)
  ) {
    document.body.classList.add("dark");
    return "dark";
  } else {
    document.body.classList.remove("dark");
    return "";
  }
};
