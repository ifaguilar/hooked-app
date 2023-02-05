import React from "react";

// Assets
import { ReactComponent as TMDB } from "../assets/tmdb-logo.svg";
import { ReactComponent as Icons8 } from "../assets/icons8-logo.svg";
import { ReactComponent as Portfolio } from "../assets/isaac-aguilar-logo.svg";

const FooterLogo = ({ name, url }) => {
  const tailwindClassname =
    "w-auto h-5 opacity-20 brightness-0 hover:opacity-100 hover:brightness-100 dark:invert dark:hover:invert-0 transition";

  const icons8Classname = "text-[#1a1a1a] dark:text-white";

  const portfolioClassname = "text-[#121212] dark:text-white";

  return (
    <a href={url} target="_blank">
      {name === "tmdb" ? (
        <TMDB className={tailwindClassname} />
      ) : name === "icons8" ? (
        <Icons8 className={`${tailwindClassname} ${icons8Classname}`} />
      ) : (
        <Portfolio className={`${tailwindClassname} ${portfolioClassname}`} />
      )}
    </a>
  );
};

export default FooterLogo;
