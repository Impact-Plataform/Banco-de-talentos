import app from "../../src/app";
import supertest from "supertest";
const server = supertest(app);
describe("Get  redirected to docs trying to acess invalid route", () => {
  it("Should  redirected", async () => {
    await server.get("/notexist").expect(302);
    await server.post("/notexist").expect(302);
    await server.put("/notexist").expect(302);
    await server.patch("/notexist").expect(302);
    await server.delete("/notexist").expect(302);
  });
});
