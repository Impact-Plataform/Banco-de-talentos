import { api } from "../..";

interface getPeopleInterface {
  page?: string | number;
}

export const getPeople = async ({ page = 1 }: getPeopleInterface) => {
  try {
    const result = await api.get(`/people/?page=${page}`);
    return {
      nextPage: result.data.next,
      previousPage: result.data.previous,
      characters: result.data.results,
    };
  } catch (error) {
    console.log(error);
  }
};
