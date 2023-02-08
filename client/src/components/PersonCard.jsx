import React from "react";

// Helpers
import { getImageURL } from "../helpers/getImageURL";

const PersonCard = ({ person }) => (
  <div className="w-full rounded-2xl overflow-hidden shadow-md border border-neutral-900/5 dark:border-white/5">
    <div className=" aspect-square">
      {person.profile_path ? (
        <img
          className="w-full aspect-square object-cover"
          src={getImageURL("w500", person.profile_path)}
          alt={person.name}
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full bg-[#f3f3f3] dark:bg-[#232323]"></div>
      )}
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

export default PersonCard;
