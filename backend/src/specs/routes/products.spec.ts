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
    await prisma.products.create({
      data: {
        title: "USB Camera",
        description: "4.0 mpx",
        category: "eletronic",
        price: 159,
      },
    });
  });

  describe("When creating a new product...", () => {
    it("should create a new product successful", async () => {
      const { body, status } = await agent.post(BASE_URL).send({
        title: "Smartphone",
        description: "dual-chip, display 6'6, octa-core",
        category: "electronic",
        price: 1400,
      });
      product = { ...body };

      expect(status).toBe(201);
      expect(body.title).toBe("Smartphone");
    });

    it("should fail if the new product don't have title", async () => {
      const { body, status } = await agent.post(BASE_URL).send({
        description: "dual-chip, display 6'6, octa-core",
        category: "electronic",
        price: 1400,
      });

      expect(status).toBe(400);
      expect(body.message).toBe("Título é um atributo obrigatório");
    });

    it("should fail if the new product title ins't string type", async () => {
      const { body, status } = await agent.post(BASE_URL).send({
        title: 850,
        description: "dual-chip, display 6'6, octa-core",
        category: "electronic",
        price: 1400,
      });

      expect(status).toBe(400);
      expect(body.message).toBe("Título é um atributo do tipo string");
    });

    it("should fail if the new product don't have description", async () => {
      const { body, status } = await agent.post(BASE_URL).send({
        title: "Smartphone",
        category: "electronic",
        price: 1400,
      });

      expect(status).toBe(400);
      expect(body.message).toBe("Descrição é um atributo obrigatório");
    });

    it("should fail if the new product description ins't string type", async () => {
      const { body, status } = await agent.post(BASE_URL).send({
        title: "Smartphone",
        description: 999,
        category: "electronic",
        price: 1400,
      });

      expect(status).toBe(400);
      expect(body.message).toBe("Descrição é um atributo do tipo string");
    });

    it("should fail if the new product don't have category", async () => {
      const { body, status } = await agent.post(BASE_URL).send({
        title: "Smartphone",
        description: "dual-chip, display 6'6, octa-core",
        price: 1400,
      });

      expect(status).toBe(400);
      expect(body.message).toBe("Categoria é um atributo obrigatório");
    });

    it("should fail if the new product category ins't string type", async () => {
      const { body, status } = await agent.post(BASE_URL).send({
        title: "Smartphone",
        description: "dual-chip, display 6'6, octa-core",
        category: 859,
        price: 1400,
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

    it("should fail if product price is negative", async () => {
      const { body, status } = await agent.post(BASE_URL).send({
        title: "Smartphone",
        description: "dual-chip, display 6'6, octa-core",
        category: "electronic",
        price: -950,
      });

      expect(status).toBe(400);
      expect(body.message).toBe("Preço não pode ser menor que zero");
    });
  });

  describe("when getting a product...", () => {
    it("should return all products", async () => {
      const { body, status } = await agent.get(BASE_URL);

      expect(status).toBe(200);
      expect(body).toHaveLength(2);
    });

    it("should return a product by id", async () => {
      const { body, status } = await agent.get(`${BASE_URL}/${product.id}`);

      expect(status).toBe(200);
      expect(body.description).toBe(product.description);
    });

    it("should fail if id ins't correct", async () => {
      const { body, status } = await agent.get(`${BASE_URL}/-96`);

      expect(status).toBe(400);
      expect(body.message).toBe("Produto não encontrado");
    });
  });

  describe("When updating a product...", () => {
    it("should update successful", async () => {
      product.price = 1250;

      const { status, body } = await agent
        .put(`${BASE_URL}/${product.id}`)
        .send(product);

      expect(status).toBe(200);
      expect(body.price).toBe(1250);
    });

    it("should fail if property haven't right type", async () => {
      let wrongProduct = { ...product, price: "250" };
      const { status, body } = await agent
        .put(`${BASE_URL}/${product.id}`)
        .send(wrongProduct);

      expect(status).toBe(400);
      expect(body.message).toBe("Preço é um atributo do tipo number");
    });

    it("should fail if product price is negative", async () => {
      let wrongProduct = { ...product, price: -988 };
      const { body, status } = await agent
        .put(`${BASE_URL}/${product.id}`)
        .send(wrongProduct);

      expect(status).toBe(400);
      expect(body.message).toBe("Preço não pode ser menor que zero");
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

  describe("when deleting a product...", () => {
    test("should delete a product successful", async () => {
      const { status } = await agent.delete(`${BASE_URL}/${product.id}`);

      expect(status).toBe(204);
    });

    it("should fail if product doesn't exists", async () => {
      const { status, body } = await agent.delete(`${BASE_URL}/-98`);

      expect(status).toBe(400);
      expect(body.message).toBe("Produto não encontrado");
    });
  });
});
