import * as types from "./types";
import axios from "axios";

const API = "https://swapi.py4e.com/api/";

const loadAllData = async (api, count, currentData, dispatch, typeSuccess) => {
  let allData = [];
  const totalPages = Math.ceil((count - 1) / currentData.length);
  let promises = [];

  for (let i = 2; i <= totalPages; i++) {
    promises.push(axios(api + `?page=${i}`));
  }

  const results = Promise.all(promises);

  allData = (await results).reduce(
    (acc, data) => [...acc, ...data.data.results],
    currentData,
  );

  dispatch({ type: typeSuccess, payload: allData });
};

const APIcharacters = API + "people";

export const loadCharacters = async (dispatch) => {
  dispatch({ type: types.CHARACTERS_LOADING });
  try {
    const response = await axios.get(APIcharacters);
    const characters = await response.data.results;
    const count = response.data.count;

    loadAllData(
      APIcharacters,
      count,
      characters,
      dispatch,
      "CHARACTERS_SUCCESS",
    );
  } catch (error) {
    dispatch({ type: types.CHARACTERS_ERROR });
  }
};
