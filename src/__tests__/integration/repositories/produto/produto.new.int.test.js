import produtoRepository from "../../../../repositories/produto.repository";
import { Produto } from "../../../../models/produto.model";

let productData;
beforeEach(async () => {
  await Produto.deleteMany();
   productData = {
    nome: 'test item',
    quantidade: 12
  };

});


describe('when we try to add to a product ', () => {
  it('it adds or subtracts by an X ammount', async () => {
    const newProduto = {
      quantidade: 14
    }
    
    const create = await Produto.create(productData)

   const updated=  await produtoRepository.newProduto(create._id, newProduto);

    expect(updated.quantidade).toBe(14);
    
  });
})
