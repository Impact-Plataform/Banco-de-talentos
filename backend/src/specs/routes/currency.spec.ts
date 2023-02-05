import supertest from "supertest";
import { app } from "../../app";

const agent = supertest(app);

describe("currency route behavior", () => {
  const BASE_URL = "/currency";
  describe("when getting currency...", () => {
    it("should return all currency", async () => {
      const { status, body } = await agent.get(BASE_URL);

      expect(status).toBe(200);
      expect(body).toHaveProperty("currency");
    });

    it("should return a currency specified", async () => {
      const { status, body } = await agent.get(`${BASE_URL}/USD`);

      expect(status).toBe(200);
      expect(body.code).toBe("USD");
    });

    test("symbol currency should be read in case insensitive ", async () => {
      const { status, body } = await agent.get(`${BASE_URL}/usd`);

      expect(status).toBe(200);
      expect(body.code).toBe("USD");
    });

    it("should fail if symbol currency ins't right", async () => {
      const { status, body } = await agent.get(`${BASE_URL}/foo`);

      expect(status).toBe(400);
      expect(body.code).toBe("Moeda não encontrada");
    });
  });
});
