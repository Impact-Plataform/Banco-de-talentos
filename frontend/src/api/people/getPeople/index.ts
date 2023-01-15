import { api } from "../..";

interface getPeopleInterface {
  page?: string | number;
}

export const getPeople = async ({ page = 1 }: getPeopleInterface) => {
  try {
    const result = await api.get(`/people/?page=${page}`);
    console.log(result.data.results);
  } catch (error) {
    console.log(error);
  }
};
