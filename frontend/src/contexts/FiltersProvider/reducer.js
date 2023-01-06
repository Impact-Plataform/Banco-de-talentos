/* eslint-disable no-case-declarations */
import * as types from "./types";

export const reducer = (state, action) => {
  switch (action.type) {
    case types.LOAD_FILTER:
      return {
        ...state,
        filter_characters: [...action.payload],
        all_characters: [...action.payload],
        filters: { ...state.filters },
      };
    case types.UPDATE_FILTER:
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    case types.FILTER_CHARACTERS:
      let { all_characters } = state;
      let filterCharacter = [...all_characters];

      const { genders, species, films } = state.filters;

      if (genders !== "all") {
        filterCharacter = filterCharacter.filter(
          (item) => item.gender === genders,
        );
      }
      if (species !== "all") {
        filterCharacter = filterCharacter.filter((item) =>
          item.species.includes(species),
        );
      }
      if (films !== "all") {
        filterCharacter = filterCharacter.filter((item) =>
          item.films.includes(films),
        );
      }

      return {
        ...state,
        filter_character: filterCharacter,
      };

    case types.CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          genders: "all",
          films: "all",
          species: "all",
        },
      };
    default:
      return state;
  }
};
