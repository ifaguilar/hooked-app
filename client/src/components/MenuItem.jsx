import React from "react";

const MenuItem = ({ text, icon, isActive, onClick = null }) => (
  <div
    className={`${
      isActive ? "active" : ""
    } flex items-center gap-4 p-4 cursor-pointer hover:bg-neutral-900/5 dark:hover:bg-white/5`}
    onClick={onClick}
  >
    <img className="icon" src={icon} alt="Icon" />
    <span>{text}</span>
  </div>
);

export default MenuItem;
