import { api } from "../..";

interface getPeopleInterface {
  page?: string | number;
  search?: string;
}

export const getPeople = async ({ page = 1, search = ""}: getPeopleInterface) => {
  try {
    const result = await api.get(`/people/?page=${page}&search=${search}`);
    return {
      nextPage: result.data.next,
      previousPage: result.data.previous,
      characters: result.data.results,
    };
  } catch (error) {
    console.log(error);
  }
};
