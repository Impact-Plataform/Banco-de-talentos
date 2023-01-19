import request from "supertest"
import { app } from "backend/server.js"

describe('Test Product Endpoints', () => {
    it('should create a product', async () => { 
        const res = await request(app)
            .post('/Products')
            .send({
                name: "test-product 1", 
                category: "test-category 1", 
                price_BRL: 100
            })

        expect(res.statusCode).toBe(201)
    })

    it('should list all products', async () => {
        const res = await request(app)
            .get('/Products')
        
        expect(res.status).toBe(200)
    })

    it("should list one product by its id", async () => {
        const res = await request(app)
        .get("/Products/63c6eec549b4b818d5e25aba")
        
        expect(res.statusCode).toBe(200)
        expect(res.body.name).toBe("Product name 1")
      })

      it("should update a product", async () => {
        const res = await request(app)
          .patch("/Products/63c9a7343f628c11751359f9")
          .send({
            name: "test-product 2",
            category: "test-category 2",
            price_BRL: 200
          })

        expect(res.statusCode).toBe(200)
      })

      it("should delete a product", async () => {
        const res = await request(app)
        .delete("/Products/63c9a7343f628c11751359f9")

        expect(res.statusCode).toBe(200)
      })
})

