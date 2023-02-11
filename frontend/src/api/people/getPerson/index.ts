import { api } from "../..";

interface getPersonInterface {
  id?: string | number;
}

export const getPerson = async ({ id }: getPersonInterface) => {
  try {
    const result = await api.get(`/people/${id}`);

    return {
      character: result.data,
      status: result.status,
    };
  } catch (error) {
    console.log(error);
  }
};
