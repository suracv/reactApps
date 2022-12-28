import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  HANDLE_PAGE,
  HANDLE_SEARCH,
  REMOVE_STORY,
  SET_LOADING,
  SET_STORIES,
} from "../actions";
import reducer from "../reducer";

const APIENDPOINT = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  hits: [],
  query: "react",
  page: 0,
  nbPages: 0,
};

export const MainContext = createContext();
export const useAppContext = () => useContext(MainContext);
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStories = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({
        type: SET_STORIES,
        payload: { hits: data.hits, nbPages: data.nbPages },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeStory = (id) => {
    dispatch({ type: REMOVE_STORY, payload: id });
    console.log(id);
  };
  const handleSearch = (query) => {
    dispatch({ type: HANDLE_SEARCH, payload: query });
    console.log(query);
  };
  const handlePage = (value) => {
    dispatch({ type: HANDLE_PAGE, payload: value });
  };
  useEffect(() => {
    fetchStories(`${APIENDPOINT}query=${state.query}&page=${state.page}`);
  }, [state.query]);
  return (
    <MainContext.Provider
      value={{ ...state, removeStory, handleSearch, handlePage }}
    >
      {children}
    </MainContext.Provider>
  );
};
