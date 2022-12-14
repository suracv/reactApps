import React from "react";
import CocktailList from "../CocktailList";
import SearchForm from "../SearchForm";

const Home = () => {
  return (
    <div>
      <SearchForm />
      <CocktailList />
    </div>
  );
};

export default Home;
