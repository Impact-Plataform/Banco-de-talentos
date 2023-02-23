import request from 'supertest'
import app from '../../../src/main/config/app'

describe("get currency by symbol route", () => {
    test("should return status 200 if try to find a existing currency", async () => {
        await request(app).get("/Currency/USD").expect(200) 
    }),
    test("Should return 400 status if try to find a unexisting currency", async () => {
        await request(app).get("/Currency/ohMygodThisIsWrong").expect(400)
    })
})