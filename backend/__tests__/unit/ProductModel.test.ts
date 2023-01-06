import Product from "../../src/app/models/Product.model";
describe("Product model", () => {
  it("Should  initiate model", async () => {
    const product = await Product.findAll();
    expect(product).toBeTruthy();
  });
});
