import React from "react";

// Helpers
import { getIconURL } from "../helpers/getIconURL";

const MenuItem = ({ icon, text, isActive = false, onClick = null }) => (
  <div
    className={`${
      isActive ? "active" : ""
    } flex items-center gap-4 p-4 hover:bg-neutral-900/5 dark:hover:bg-white/5 cursor-pointer`}
    onClick={onClick}
  >
    <img className="icon" src={getIconURL(icon)} alt="Icon" />
    <span>{text}</span>
  </div>
);

export default MenuItem;
