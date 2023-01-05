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
    default:
      return { ...state };
  }
};
