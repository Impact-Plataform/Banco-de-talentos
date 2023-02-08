import { HttpResponse } from "../ports/httpResponse";

export const create = (bodyMessage: any): HttpResponse => {
  return {
    statusCode: 201,
    body: bodyMessage,
  };
};
