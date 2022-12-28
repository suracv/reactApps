import React from "react";
import Cocktail from "./Cocktail";
import { useAppContext } from "../context/AppContext";
import Loading from "../Loading";
const CocktailList = () => {
  const { cocktails, loading } = useAppContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    <h2>there is no match</h2>;
  }
  return (
    <div className="cocktails-container">
      {cocktails.map((item) => {
        return <Cocktail key={item.id} {...item} />;
      })}
    </div>
  );
};

export default CocktailList;
