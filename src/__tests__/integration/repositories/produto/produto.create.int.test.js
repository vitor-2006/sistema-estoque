import produtoRepository from "../../../../repositories/produto.repository";

describe('when we try to create a valid product ', () => {
  it('the created product has an id', async () => {
    const productData = {
      nome: 'test Item',
      quantidade: 12
    };

    const createdProduct = await produtoRepository.create(productData);

    expect(createdProduct).toHaveProperty('_id');
    expect(createdProduct._id).toBeDefined();
    
  });
})