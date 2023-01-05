import { useEffect, useReducer, useRef, useContext } from "react";
import { loadCharacters, loadFilms, loadSpecies } from "./actions";
import { CharactersContext } from "./context";
import { data } from "./data";
import { reducer } from "./reducer";
import * as types from "./types";
import P from "prop-types";

export const CharactersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, data);

  const searchCharacters = (text) => {
    dispatch({ type: types.SEARCH_CHARACTERS, payload: text });
  };

  const clearSearch = () => {
    dispatch({ type: types.CLEAR_SEARCH });
  };

  const isMounted = useRef(true);

  useEffect(() => {
    loadCharacters(dispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });
    return () => {
      isMounted.current = false;
    };
  }, [dispatch]);

  useEffect(() => {
    loadFilms(dispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [dispatch]);

  useEffect(() => {
    loadSpecies(dispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [dispatch]);

  return (
    <CharactersContext.Provider
      value={{
        ...state,
        searchCharacters,
        clearSearch,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

CharactersProvider.propTypes = {
  children: P.node.isRequired,
};

export const useCharactersContext = () => {
  return useContext(CharactersContext);
};
