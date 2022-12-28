import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const MainContext = createContext();
export const useAppContext = () => useContext(MainContext);

export const AppContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("as");
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [searchTerm]);
  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);
  return (
    <MainContext.Provider
      value={{ loading, searchTerm, setSearchTerm, cocktails }}
    >
      {children}
    </MainContext.Provider>
  );
};
