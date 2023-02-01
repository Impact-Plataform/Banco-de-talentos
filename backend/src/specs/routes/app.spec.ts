import supertest from "supertest";
import { app } from "../../app";

const agent = supertest(app);

it("should return a status 200", async () => {
  const { status } = await agent.get("/todo");

  expect(status).toBe(200);
});
