import { Products } from "@prisma/client";
import supertest from "supertest";
import { prisma } from "../../../prisma";
import { app } from "../../app";

const agent = supertest(app);

describe("Products route behavior", () => {
  const BASE_URL = "/products";
  let product: Products;

  beforeAll(async () => {
    await prisma.products.deleteMany({});
  });

  describe("When creating a new product...", () => {
    it("should create a new product successful", async () => {
      const { body, status } = await agent.post(BASE_URL).send({
        title: "Smartphone",
        description: "dual-chip, display 6'6, octa-core",
        category: "electronic",
        price: 400,
      });
      product = { ...body };

      expect(status).toBe(201);
      expect(body.title).toBe("Smartphone");
    });

    it("should fail if the new product don't have title", async () => {
      const { body, status } = await agent.post(BASE_URL).send({
        description: "dual-chip, display 6'6, octa-core",
        category: "electronic",
        price: 400,
      });

      expect(status).toBe(400);
      expect(body.message).toBe("Título é um atributo obrigatório");
    });

    it("should fail if the new product title ins't string type", async () => {
      const { body, status } = await agent.post(BASE_URL).send({
        title: 850,
        description: "dual-chip, display 6'6, octa-core",
        category: "electronic",
        price: 400,
      });

      expect(status).toBe(400);
      expect(body.message).toBe("Título é um atributo do tipo string");
    });

    it("should fail if the new product don't have description", async () => {
      const { body, status } = await agent.post(BASE_URL).send({
        title: "Smartphone",
        category: "electronic",
        price: 400,
      });

      expect(status).toBe(400);
      expect(body.message).toBe("Descrição é um atributo obrigatório");
    });

    it("should fail if the new product description ins't string type", async () => {
      const { body, status } = await agent.post(BASE_URL).send({
        title: "Smartphone",
        description: 999,
        category: "electronic",
        price: 400,
      });

      expect(status).toBe(400);
      expect(body.message).toBe("Descrição é um atributo do tipo string");
    });

    it("should fail if the new product don't have category", async () => {
      const { body, status } = await agent.post(BASE_URL).send({
        title: "Smartphone",
        description: "dual-chip, display 6'6, octa-core",
        price: 400,
      });

      expect(status).toBe(400);
      expect(body.message).toBe("Categoria é um atributo obrigatório");
    });

    it("should fail if the new product category ins't string type", async () => {
      const { body, status } = await agent.post(BASE_URL).send({
        title: "Smartphone",
        description: "dual-chip, display 6'6, octa-core",
        category: 859,
        price: 400,
      });

      expect(status).toBe(400);
      expect(body.message).toBe("Categoria é um atributo do tipo string");
    });

    it("should fail if the new product don't have price", async () => {
      const { body, status } = await agent.post(BASE_URL).send({
        title: "Smartphone",
        description: "dual-chip, display 6'6, octa-core",
        category: "electronic",
      });

      expect(status).toBe(400);
      expect(body.message).toBe("Preço é um atributo obrigatório");
    });

    it("should fail if the new product price ins't number type", async () => {
      const { body, status } = await agent.post(BASE_URL).send({
        title: "Smartphone",
        description: "dual-chip, display 6'6, octa-core",
        category: "electronic",
        price: "400",
      });

      expect(status).toBe(400);
      expect(body.message).toBe("Preço é um atributo do tipo number");
    });
  });

  describe("When updating a product", () => {
    it("should update successful", async () => {
      product.price = 250;

      const { status, body } = await agent
        .put(`${BASE_URL}/${product.id}`)
        .send(product);

      expect(status).toBe(200);
      expect(body.price).toBe(250);
    });

    it("should fail if property haven't right type", async () => {
      let wrongProduct = { ...product, price: "250" };
      const { status, body } = await agent
        .put(`${BASE_URL}/${product.id}`)
        .send(wrongProduct);

      expect(status).toBe(400);
      expect(body.message).toBe("Preço é um atributo do tipo number");
    });

    it("should fail if id ins't correct", async () => {
      product.category = "Generic";
      const { body, status } = await agent
        .put(`${BASE_URL}/-852`)
        .send(product);

      expect(status).toBe(400);
      expect(body.message).toBe("Produto não encontrado");
    });
  });
});
