import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../Loading";

const SingleCocktail = () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        console.log(data);
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    <h2>no cocktail to display</h2>;
  }
  const { name, image, info, category, glass, instructions, ingredients } =
    cocktail;
  return (
    <div>
      <Link to="/">Back to home</Link>
      <img src={image} alt="" />
      <h2>{name}</h2>
      <h2>{info}</h2>
      <h2>{category}</h2>
      <h2>{glass}</h2>
      <h2>{instructions}</h2>
      <p>
        <span>instructions: </span>

        {instructions}
      </p>
      <p>
        <span>ingredients:</span>
        {ingredients.map((item, index) => {
          return item ? <span key={index}>{item}</span> : null;
        })}{" "}
      </p>
    </div>
  );
};

export default SingleCocktail;
