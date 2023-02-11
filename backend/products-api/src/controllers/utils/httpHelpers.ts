import { HttpResponse } from "../ports/httpResponse";

const httpHelperBase = (
  statusCodeNumber: number,
  bodyMessage: any
): HttpResponse => {
  return {
    statusCode: statusCodeNumber,
    body: bodyMessage,
  };
};

export const create = (bodyMessage: any): HttpResponse => {
  const createResponse = httpHelperBase(201, bodyMessage);
  return createResponse;
};

export const clientError = (bodyMessage: any): HttpResponse => {
  const createResponse = httpHelperBase(400, bodyMessage);
  return createResponse;
};

export const ok = (bodyMessage: any): HttpResponse => {
  const createResponse = httpHelperBase(200, bodyMessage);
  return createResponse;
};
