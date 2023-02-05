import React, { useContext } from "react";

// Context
import { ThemeContext } from "../context/ThemeContext";

// Helpers
import { getImageURL, getPlaceholderURL } from "../helpers/getImageURL";

const PersonCard = ({ person }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="rounded-2xl overflow-hidden shadow-md border border-neutral-900/5 dark:border-white/5">
      <div>
        <img
          className="w-full aspect-square object-cover"
          src={
            person.profile_path
              ? getImageURL("w500", person.profile_path)
              : getPlaceholderURL(theme)
          }
          alt={person.name}
        />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <span
          className="font-semibold text-lg whitespace-nowrap text-ellipsis overflow-hidden"
          title={person.name}
        >
          {person.name}
        </span>
        <p
          className="text-sm whitespace-nowrap text-ellipsis overflow-hidden"
          title={person.character || "Unknow"}
        >
          {person.character || "Unknow"}
        </p>
      </div>
    </div>
  );
};

export default PersonCard;
