
import Validate from "../Service/validate.js";

// Teste Unitário das validações da classe Validate.

test("Validação de número 1", ()=>{
    expect(Validate.validateNumber("dois")).toBe(false)
})
test("Validação de número 2", ()=>{
    expect(Validate.validateNumber("2")).toBe(false)
})
test("Validação de número 3", ()=>{
    expect(Validate.validateNumber(2)).toBe(true)
})

test("Validação de string 1", ()=>{
    expect(Validate.validateText(2)).toBe(false)
})
test("Validação de string 2", ()=>{
    expect(Validate.validateText("2")).toBe(false)
})
test("Validação de string 3", ()=>{
    expect(Validate.validateText("ola tudo bem?")).toBe(true)
})


test("Validação da função isValid 1", ()=>{
    expect(Validate.isValid(("name", "descripiton", "price", "color", "weight", "height"))).toBe(false)
})
test("Validação da função isValid 2", ()=>{
    expect(Validate.isValid(100, "descripiton", "price", "color", "weight", "height")).toBe(false)
})
test("Validação da função isValid 3", ()=>{
    expect(Validate.isValid("name", 100, "price", "color", "weight", "height")).toBe(false)
})
test("Validação da função isValid 1", ()=>{
    expect(Validate.isValid(("name", "descripiton", "price", 100, "weight", "height"))).toBe(false)
})
test("Validação da função isValid 5", ()=>{
    expect(Validate.isValid("name", "descripiton", "price", "color", 100, "height")).toBe(false)
})
test("Validação da função isValid 6", ()=>{
    expect(Validate.isValid("name", "descripiton", "price", "color", "weight", 100)).toBe(false)
})

test("Validação da função isValid 7", ()=>{
    expect(Validate.isValid("name", "descripiton", 50, "color", "weight", "height")).toBe(true)
})


