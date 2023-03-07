import app from "../Service/server" ;
import supertest from "supertest";


test("validação do método get para listar todos os registros na rota /Products", async ()=>{
    const res =  await supertest(app).get("/Products")
    expect(res.statusCode).toEqual(200)
})

test("validação do método get para listar registros na rota /Products pelo id 1 (que é um id válido)",async ()=>{
    const res = await supertest(app).get("/Products/1")
    expect(res.statusCode).toEqual(200)
})

test("validação do método get para listar registros na rota /Products pelo id 2 (que é um id não-válido)", async ()=>{
    const res = await supertest(app).get(`/Products/2`)
    expect(res.statusCode).toEqual(404)
})

test("validação do método delete para deletar registros na rota /Products pelo id 2 (que é um id não-válido)", async ()=>{
    const res = await supertest(app).get(`/Products/2`)
    expect(res.statusCode).toEqual(404)
})

test("validação do método put para atualizar registros na rota /Products pelo id 1 (que é um id válido)", async ()=>{
    const res = await supertest(app).put(`/Products/1`).send({
        "name": "Laptop Positivo",
        "descripiton": "Computador portatil com 2gb de RAM",
        "price": 1500,
        "color": "Silver",
        "weight": "2 kg",
        "height": "183 cm"
    })
    expect(res.statusCode).toEqual(200)
})

test("validação do método put para atualizar registros na rota /Products pelo id 1 (que é um id válido) porém com o corpo da requisição incorreto", async ()=>{
    const res = await supertest(app).put(`/Products/1`).send({
        "name": "Laptop Positivo",
        "descripiton": "Computador portatil com 2gb de RAM",
        "price": 1500,
        "color": "Silver",
        "weight": "2 kg",
        "height": "183 cm",
        "quantity": 3
    })
    expect(res.statusCode).toEqual(400)
})

test("validação do método put para atualizar registros na rota /Products pelo id 2 (que é um id não-válido)", async ()=>{
    const res = await supertest(app).put(`/Products/2`).send({
        "name": "Laptop Positivo",
        "descripiton": "Computador portatil com 2gb de RAM",
        "price": 1500,
        "color": "Silver",
        "weight": "2 kg",
        "height": "183 cm"
    })
    expect(res.statusCode).toEqual(404)
})

test("validação do método post para criar registros na rota /Products com o corpo da requisição incorreto", async ()=>{
    const res = await supertest(app).post(`/Products/`).send({
        "name": "Laptop Positivo",
        "descripiton": "Computador portatil com 2gb de RAM",
        "price": 1500,
        "color": "Silver",
        "weight": "2 kg",
        "height": "183 cm",
        "quantity": 3
    })
    expect( res.statusCode).toEqual(400)
})



