import produtoService from "../../../../services/produto.service";

describe("when we try to register a product", () => {
  it("the product is registered", async () => {
    const register = await produtoService.createProduto({
        nome: 'test product',
        quantidade: 12
        })

        expect(register).toHaveProperty('_id');
        expect(register._id).toBeDefined();
  });
})