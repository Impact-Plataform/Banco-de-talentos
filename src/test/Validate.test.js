import Validacao from "../services/Validacoes.js"

test("Se o symbol é R$", () => {
    expect(Validacao.valSymbol("R$")).toBe(true);
})

test("Se currency é BRL", () => {
    expect(Validacao.valCurrency("BRL")).toBe(true);
})