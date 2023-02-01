import supertest from "supertest";
import { app } from "../../app";

const agent = supertest(app);

describe("Products route behavior", () => {
  const BASE_URL = "/products";
  let product;

  describe("When creating a new product...", () => {
    it("should create a new product successful", async () => {
      const { body, status } = await agent.post(BASE_URL).send({
        title: "Smartphone",
        description: "dual-chip, display 6'6, octa-core",
        price: 400,
      });
      product = { ...body };

      console.log(body);

      expect(status).toBe(201);
      expect(body.title).toBe("Smartphone");
    });

    it("should fail if the new product don't have title", async () => {
      const { body, status } = await agent.post(BASE_URL).send({
        description: "dual-chip, display 6'6, octa-core",
        price: 400,
      });

      expect(status).toBe(400);
      expect(body.message).toBe("Título é um atributo obrigatório");
    });

    it("should fail if the new product title ins't string type", async () => {
      const { body, status } = await agent.post(BASE_URL).send({
        title: 850,
        description: "dual-chip, display 6'6, octa-core",
        price: 400,
      });

      expect(status).toBe(400);
      expect(body.message).toBe("Título é um atributo do tipo string");
    });

    it("should fail if the new product don't have description", async () => {
      const { body, status } = await agent.post(BASE_URL).send({
        title: "Smartphone",
        price: 400,
      });

      expect(status).toBe(400);
      expect(body.message).toBe("Descrição é um atributo obrigatório");
    });

    it("should fail if the new product description ins't string type", async () => {
      const { body, status } = await agent.post(BASE_URL).send({
        title: "Smartphone",
        description: 999,
        price: 400,
      });

      expect(status).toBe(400);
      expect(body.message).toBe("Descrição é um atributo do tipo string");
    });

    it("should fail if the new product don't have price", async () => {
      const { body, status } = await agent.post(BASE_URL).send({
        title: "Smartphone",
        description: "dual-chip, display 6'6, octa-core",
      });

      expect(status).toBe(400);
      expect(body.message).toBe("Preço é um atributo obrigatório");
    });

    it("should fail if the new product price ins't number type", async () => {
      const { body, status } = await agent.post(BASE_URL).send({
        title: "Smartphone",
        description: "dual-chip, display 6'6, octa-core",
        price: "400",
      });

      expect(status).toBe(400);
      expect(body.message).toBe("Preço é um atributo do tipo number");
    });
  });
});
