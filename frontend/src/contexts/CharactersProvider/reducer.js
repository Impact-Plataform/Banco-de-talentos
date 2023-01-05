import * as types from "./types";

export const reducer = (state, action) => {
  switch (action.type) {
    case types.CHARACTERS_SUCCESS: {
      return { ...state, characters: action.payload, loading: false };
    }
    case types.CHARACTERS_LOADING: {
      return { ...state, loading: true };
    }
    case types.CHARACTERS_ERROR: {
      return { ...state, error: true, loading: false };
    }
    case types.FILMS_SUCCESS: {
      return { ...state, filmsData: action.payload, loading: false };
    }
    case types.FILMS_LOADING: {
      return { ...state, loading: true };
    }
    case types.FILMS_ERROR: {
      return { ...state, error: true, loading: false };
    }
    case types.SPECIES_SUCCESS: {
      return { ...state, speciesData: action.payload, loading: false };
    }
    case types.SPECIES_LOADING: {
      return { ...state, loading: true };
    }
    case types.SPECIES_ERROR: {
      return { ...state, error: true, loading: false };
    }
    // SEARCH ACTIONS
    case types.SEARCH_CHARACTERS: {
      return {
        ...state,
        search: state.characters.filter((item) => {
          const regex = new RegExp(`${action.payload}`, "ig");
          return item.name.match(regex);
        }),
      };
    }
    case types.CLEAR_SEARCH:
      return {
        ...state,
        search: null,
      };
    default:
      return { ...state };
  }
};
