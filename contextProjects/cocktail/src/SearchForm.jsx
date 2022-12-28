import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useAppContext } from "./context/AppContext";

const SearchForm = () => {
  const { setSearchTerm } = useAppContext();
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="search" onSubmit={handleSubmit}>
      <input type="text" onChange={searchCocktail} ref={searchValue} />
    </form>
  );
};

export default SearchForm;
