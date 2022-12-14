import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const searchValue = React.useReducer("");
  const { setSearchTerm } = useGlobalContext();
  const searchContainer = () => {
    setSearchTerm(searchValue.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="search" onSubmit={handleSubmit}>
      <input type="text" onChange={searchContainer} ref={searchValue} />
    </form>
  );
};

export default SearchForm;
