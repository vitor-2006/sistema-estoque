import produtoService from "../../../../services/produto.service";
import { Produto } from "../../../../models/produto.model";
import mongoose from "mongoose";

let productData;
beforeEach(async () => {
  await Produto.deleteMany();
   productData = {
    nome: 'test item',
    quantidade: 12
    };
});

  
describe("when we try to update a product that doesn't exist", () => {
    it("throws a validation error", async () => {
      const product = await Produto.create(productData)
      const data = {
        produtoId: new mongoose.Types.ObjectId(),
        quantidade: 5
      }

      await expect(
        produtoService.menos({
          idProduto: data.idProduto,
          quantidade: data.quantidade
        })
      ).rejects.toThrow("Produto não encontrado.");
    });
});

describe("when we try to update a product", () => {
    it("it adds by an x ammount", async () => {
      const product = await Produto.create(productData)
      const data = {
        produtoId: product._id,
        quantidade: 5
      }

      const soma = await produtoService.menos({
        idProduto: data.produtoId,
        quantidade: data.quantidade
      })

      expect(soma.quantidade).toBe(7)
    });
});