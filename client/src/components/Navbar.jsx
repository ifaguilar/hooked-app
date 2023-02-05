import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Components
import RoundedButton from "./RoundedButton";
import Logo from "./Logo";
import Dropdown from "./Dropdown";
import Button from "./Button";
import Separator from "./Separator";
import MenuHeading from "./MenuHeading";
import MenuItem from "./MenuItem";

// Constants
import { themeOptions } from "../constants/constants";

// Context
import { ThemeContext } from "../context/ThemeContext";

// Helpers
import { getIconURL } from "../helpers/getIconURL";

const Navbar = ({
  isSidebarOpen,
  setSidebarOpen,
  isThemeOpen,
  setThemeOpen,
  themeIcon,
  isMenuOpen,
  setMenuOpen,
  closeAllMenus,
}) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between px-4 py-2 shadow-md bg-white dark:bg-neutral-900">
      <div className="flex items-center gap-4">
        <RoundedButton
          variant="secondary"
          onClick={() => {
            closeAllMenus();
            setSidebarOpen(!isSidebarOpen);
          }}
        >
          <img className="icon" src={getIconURL("menu--v1")} alt="Sidebar" />
        </RoundedButton>
        <Logo onClick={closeAllMenus} />
      </div>
      <div className="flex items-center gap-4">
        <Link to="/search" onClick={closeAllMenus}>
          <RoundedButton variant="secondary">
            <img className="icon" src={getIconURL("search")} alt="Search" />
          </RoundedButton>
        </Link>
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <div className="relative">
            <RoundedButton
              variant="secondary"
              onClick={() => {
                closeAllMenus();
                setThemeOpen(!isThemeOpen);
              }}
            >
              {themeIcon === "dark" ? (
                <img
                  className="icon"
                  src={getIconURL("crescent-moon")}
                  alt="Dark"
                />
              ) : (
                <img className="icon" src={getIconURL("sun")} alt="Light" />
              )}
            </RoundedButton>
            <Dropdown isOpen={isThemeOpen}>
              {themeOptions.map((option) => (
                <MenuItem
                  key={option.name}
                  text={option.name}
                  icon={getIconURL(option.icon)}
                  isActive={theme === option.name.toLowerCase()}
                  onClick={() => setTheme(option.name.toLowerCase())}
                />
              ))}
            </Dropdown>
          </div>
          <Link to="/signin">
            <Button variant="primary">Sign In</Button>
          </Link>
        </div>
        <div className="relative lg:hidden">
          <RoundedButton
            variant="secondary"
            onClick={() => {
              closeAllMenus();
              setMenuOpen(!isMenuOpen);
            }}
          >
            <img className="icon" src={getIconURL("menu-2--v1")} alt="Menu" />
          </RoundedButton>
          <Dropdown isOpen={isMenuOpen}>
            <Link to="/signin" className="flex flex-col px-4">
              <Button variant="primary">Sign In</Button>
            </Link>
            <Separator />
            <MenuHeading>Change theme</MenuHeading>
            {themeOptions.map((option) => (
              <MenuItem
                key={option.name}
                text={option.name}
                icon={getIconURL(option.icon)}
                isActive={theme === option.name.toLowerCase()}
                onClick={() => setTheme(option.name.toLowerCase())}
              />
            ))}
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
