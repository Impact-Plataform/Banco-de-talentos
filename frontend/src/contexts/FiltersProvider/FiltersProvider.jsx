import P from "prop-types";
import { useContext, useEffect, useReducer } from "react";
import { FilterContext } from "./context";
import { filters } from "./data";
import { useCharactersContext } from "../CharactersProvider/CharactersProvider";
import { reducer } from "./reducer";
import * as types from "./types";

export const FiltersProvider = ({ children }) => {
  const { characters } = useCharactersContext();
  const [state, dispatch] = useReducer(reducer, filters);

  const updateFilterValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    return dispatch({ type: types.UPDATE_FILTER, payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: types.CLEAR_FILTERS });
  };

  useEffect(() => {
    dispatch({ type: types.FILTER_CHARACTERS });
  }, [characters, state.filters]);

  useEffect(() => {
    dispatch({
      type: types.LOAD_FILTER,
      payload: characters,
    });
  }, [characters]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateFilterValue,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

FiltersProvider.propTypes = {
  children: P.node.isRequired,
};
