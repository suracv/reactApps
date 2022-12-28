import React from "react";
import { useAppContext } from "../context/context";

const SearchForm = () => {
  const { handleSearch, query } = useAppContext();
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
