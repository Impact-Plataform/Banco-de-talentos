import { useEffect, useReducer, useRef, useContext } from "react";
import { loadCharacters } from "./actions";
import { CharactersContext } from "./context";
import { data } from "./data";
import { reducer } from "./reducer";
import P from "prop-types";

export const CharactersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, data);

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

  return (
    <CharactersContext.Provider
      value={{
        ...state,
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
