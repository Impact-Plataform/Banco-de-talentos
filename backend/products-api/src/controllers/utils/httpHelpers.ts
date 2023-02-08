import { HttpResponse } from "../ports/httpResponse";

export const create = (bodyMessage: any): HttpResponse => {
  return {
    statusCode: 201,
    body: bodyMessage,
  };
};

export const clientError = (bodyMessage: any): HttpResponse => {
  return {
    statusCode: 400,
    body: bodyMessage,
  };
};
