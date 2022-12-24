import app from "../../src/app";
import supertest from "supertest";
const server = supertest(app);

describe("Get Currency", () => {
  it("Should  get the list of products", async () => {
    const response = await server.get("/currency").expect(200);
    const { body } = response;
    expect(Array.isArray(body)).toBe(true);
  });
});
describe("Show Currency", () => {
  const currency = "EUR";
  it("Should show a currency info with valid symbol", async () => {
    const response = await server.get(`/currency/${currency}`).expect(200);
    const { body } = response;
    const { code, name } = body[0];
    expect(code).not.toBeUndefined();
    expect(name).not.toBeUndefined();
  });
  it("Not should able to show a currency info with invalid symbol", async () => {
    const response = await server.get(`/currency/432fsa`).expect(404);
    const { body } = response;
    expect(body[0]).toBeUndefined();
    expect(body).toHaveProperty("error");
  });
  describe("Update cache currency", () => {
    it("Should update cached currency after 24 hours", async () => {
      jest.useFakeTimers().setSystemTime(new Date("9999-01-01"));
      const response = await server.get("/currency").expect(200);
      const { body } = response;
      expect(Array.isArray(body)).toBe(true);
    });
  });
});
