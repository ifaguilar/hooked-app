import React, { useState } from "react";

const SearchBox = ({ setSearchTerm }) => {
  return (
    <div className="flex justify-center">
      <input
        className="w-full max-w-lg p-4 rounded-md border-2 border-neutral-900/10 dark:border-white/10 bg-white dark:bg-neutral-900 placeholder-neutral-900/40 dark:placeholder-white/40 focus:outline-none hover:border-neutral-900/40 dark:hover:border-white/40 focus:border-neutral-900 dark:focus:border-white"
        placeholder="Search for movies"
        onChange={(e) => setSearchTerm(e.target.value)}
        autoFocus
      />
    </div>
  );
};

export default SearchBox;
