import React, { useEffect, useReducer, useRef, useState } from "react";
import { Form, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/search");
    }
  };
  return (
    <form className="search" onSubmit={handleSubmit}>
      <input type="text" ref={searchValue} placeholder="Arama" />
    </form>
  );
};

export default SearchBar;
