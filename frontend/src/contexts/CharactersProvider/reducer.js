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
      return { ...state, loading: false, error: true };
    }
    default:
      return { ...state };
  }
};
