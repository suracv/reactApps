import React, { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleSearchChange}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          handleSearch(searchTerm);
        }
      }}
    />
  );
};

export default SearchBar;
