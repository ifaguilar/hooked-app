import React from "react";

// Helpers
import { getIconURL } from "../helpers/getIconURL";

const RoundedButton = ({
  onClick,
  icon,
  alt,
  hasShadow = false,
  isActive = false,
}) => (
  <button
    className={`${
      hasShadow
        ? "shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
        : ""
    } ${
      isActive ? "active" : ""
    } text-neutral-900 dark:text-white bg-white dark:bg-neutral-900 hover:brightness-90 dark:hover:bg-neutral-800 rounded-full inline-flex items-center justify-center h-12 w-12`}
    onClick={onClick}
  >
    <img className="icon" src={getIconURL(icon)} alt={alt} />
  </button>
);

export default RoundedButton;
